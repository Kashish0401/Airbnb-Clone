
import { Link, useParams } from "react-router-dom"
import PlacesForm from "../Components/PlacesForm";

const Places = () => {

  const { action } = useParams();

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
        <PlacesForm />
      )
      }
    </>
  )
}

export default Places
