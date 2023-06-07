import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import Perks from "../Components/Perks";

const Places = () => {
  const { action } = useParams();
  const labelCss = 'text-2xl mt-4 inline-block', descriptionCss = 'text-gray-500 text-sm';
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
          <input type="text" placeholder="title, like my summer home" />
          {preInput('Address', 'Address to this place')}
          <input type="text" placeholder="address" />
          {preInput('Photos', 'the more the better')}

          {preInput('Description', 'A small description about your place')}
          <textarea />
          {preInput('Perks', 'select all the perks of your place')}
          <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <Perks />
          </div>
          {preInput('Extra info', 'house rules, etc')}
          <textarea />
          {preInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input type="text" placeholder="14" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input type="text" placeholder="11" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input type="number"/>
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
