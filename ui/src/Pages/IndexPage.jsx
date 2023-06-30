import axios from 'axios';
import React, { useEffect, useState } from 'react'

const IndexPage = () => {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then(({ data }) => {
      //console.log(data);
      setPlaces(data);
    });
  }, []);

  console.log(places);

  return (
    <>
      <div className='mt-8 gap-y-8 gap-x-6 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 rounded-2xl'>
        {
          places.length > 0 && places.map((place) => (
            <div className=''>
              <div className='bg-gray-400 mb-2 rounded-2xl flex'>
                {place.photos.length > 0 && 
                <img src={'http://localhost:4000/uploads/'+place.photos[0]} alt='place.title' className='rounded-2xl object-fit aspect-square'/>  
              }
              </div>
              <div> {place.address}</div>
              <div> {place.title}</div>
              <div>{ place.price}</div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default IndexPage
