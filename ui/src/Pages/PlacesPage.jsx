import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import Perks from "../Components/Perks";
import axios from "axios";

const Places = () => {
  const { action } = useParams();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
    setAddedPhotos(prev => {
      return [...prev, filename];
    });
    setPhotoLink('');
  }

  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function uploadPhoto(ev) {
    //console.log(ev);
    const files = ev.target.files;
    //console.log({ files });
    const data = new FormData();
    for (let i = 0; i < files.length; i++){
      data.append('photos', files[i]);
    }
    const {data:filenames} = await axios.post('/uploads', data, {
      headers: { 'Content-type': 'multipart/form-data' }
    });
    setAddedPhotos(prev => {
      return [...prev, ...filenames];
    })
  }

  return (
    <>
      {action !== 'new' && (
        <div className="text-center">
          <Link to={'/account/places/new'} className="bg-primary text-white px-6 py-2 rounded-full inline-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add new place</Link>
        </div>
      )}
      {action === 'new' && (
        <form className="mx-4 md:mx-2">
          {preInput('Title', 'Title for your place. should be short and catchy for advertisement')}
          <input type="text"
            placeholder="title, like my summer home"
            value={title}
            onChange={ev => setTitle(ev.title.value)}
          />
          {preInput('Address', 'Address to this place')}
          <input type="text"
            value={address}
            onChange={ev => setAddress(ev.target.value)}
            placeholder="address" />
          {preInput('Photos', 'the more the better')}
          <div className="flex gap-2">
            <input type="text"
              value={photoLink}
              onChange={ev => { setPhotoLink(ev.target.value) }}
              placeholder="Add using a link ...jpg" />
            <button onClick={addPhotoByLink}
              className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
          </div>
          <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {addedPhotos.length > 0 && addedPhotos.map(link => (
              <div className="h-32 flex">
                <img src={'http://localhost:4000/uploads/' + link} className="rounded-2xl w-full object-cover" />
              </div>
            ))
            }
            <label className="p-4 border rounded-xl flex flex-col items-center justify-center  text-gray-600 cursor-pointer">
              <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
              Upload from your device
            </label>
          </div>
          {preInput('Description', 'A small description about your place')}
          <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
          {preInput('Perks', 'select all the perks of your place')}
          <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <Perks selected={perks} onChange={setPerks} />
          </div>
          {preInput('Extra info', 'house rules, etc')}
          <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
          {preInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input type="text" placeholder="14" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input type="text" placeholder="11" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input type="number" placeholder="1" value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Price per night</h3>
              <input type="number" />
            </div>
          </div>
          <button className="primaryColor rounded-2xl py-2 px-8 my-4">Save</button>
        </form>
      )
      }
    </>
  )
}

export default Places
