const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const imageDownloader = require('image-downloader');
const multer = require("multer");
const fs = require('fs');
const Place = require("./models/Place.js");

require("dotenv").config();
const app = express();

const jwtoken = "scsfdbvkjsbsebfesbvlrbvolrbkjesfc";
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'))
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.mongoUrl);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passwordCheck = bcrypt.compareSync(password, userDoc.password);
    if (passwordCheck) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtoken,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("Wrong password");
    }
  } else {
    res.json("User not found");
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtoken, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    })
  }
  else {
    res.json(null);
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true)
});

//console.log({ __dirname }); //this is the full path and it makes the app safer
app.post('/upload-by-link', async (req, res) => {
  try {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
      url: link,
      dest: __dirname + '/uploads/' + newName,
    });
    res.json(newName);
  }
  catch (e) {
    res.status(422).json('Please enter something')
  }
});

const photosMiddleware = multer({ dest: 'uploads/' });
app.post('/uploads', photosMiddleware.array('photos', 10), (req, res) => {
  const uploaded = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    uploaded.push(newPath.replace('uploads\\', ''));
  }
  res.json(uploaded);
});

app.post('/places', (req, res) => {
  const { token } = req.cookies;
  const {
    title, address, addedPhotos,
    description, perks, extraInfo,
    checkIn, checkOut, maxGuests, price } = req.body;
  jwt.verify(token, jwtoken, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.create({
      owner: userData.id,
      title,
      photos:addedPhotos,
      address,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    });
    res.json(placeDoc);
  });
});

app.get('/user-places', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtoken, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Place.find({ owner: id }));
  });

});

app.get('/places/:id', async (req, res) => {
  const { id } = req.params;
  res.json(await Place.findById(id));
});

app.put('/places', async (req, res) => {
  try{
    const { token } = req.cookies;
    const {
      id,
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    } = req.body;
    jwt.verify(token, jwtoken, {}, async (err, userData) => {
      if (err) throw err;
      const placeDoc = await Place.findById(id);
      //console.log(placeDoc.owner, placeDoc.owner.toString());
      if (placeDoc.owner.toString() === userData.id) {
        placeDoc.set({
          title,
          address,
          photos: addedPhotos,
          description,
          perks,
          extraInfo,
          checkIn,
          checkOut,
          maxGuests,
          price,
        });
        await placeDoc.save();
        res.json("ok");
      }
    });
  }
  catch (e) {
    res.status(422).json('Invalid data');
  }
});

app.get('/places', async (req, res) => {
  try {
    const data = await Place.find();
  res.json(data);
  }
  catch (e) {
    res.json(e);
  }
});

app.listen(4000);