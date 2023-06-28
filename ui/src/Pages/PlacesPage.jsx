import { Link } from "react-router-dom"
import AccountNav from "../Components/AccountNav"
import { useEffect, useState } from "react"
import axios from "axios";

const PlacesPage = () => {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <>
      <AccountNav />
      <div className="text-center">
        <Link to={'/account/places/new'} className="bg-primary text-white px-6 py-2 rounded-full inline-flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add new place</Link>
      </div>
      <div className="mt-4">
        {places.length > 0 && places.map((place, key) => (
          <Link to={'/account/places/'+place._id} className="bg-gray-200 cursor-pointer p-2 rounded-2xl mb-3 flex gap-3" key={key}>
            <div className="flex w-32 h-32 shrink-0 bg-gray-300 rounded-xl">
              {
                place.photos.length > 0 && <img src={'http://localhost:4000/uploads/' + place.photos[0]} alt='' className="object-cover" />
              }
            </div >
            <div className="">
              <h2 className="text-xl">{place.title}</h2>
              <p className="mt-2 text-sm">{place.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default PlacesPage
