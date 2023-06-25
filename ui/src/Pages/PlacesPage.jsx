import { Link } from "react-router-dom"
import AccountNav from "../Components/AccountNav"
import { useState } from "react"

const PlacesPage = () => {

  const [places, setPlaces] = useState([]);

  const addedPlaces = async () => {
    const { data } = await axios.get('/place');
    setPlaces(data);
  }

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
      <div>
        {places.length > 0 && places.map(place => {
          
        })}
      </div>
    </>
  )
}

export default PlacesPage
