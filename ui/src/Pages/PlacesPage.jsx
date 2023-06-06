import { Link, useParams } from "react-router-dom"

const Places = () => {
  const { action } = useParams();
  const labelCss = 'text-2xl mt-4 inline-block', descriptionCss = 'text-gray-500 text-sm';
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
          <label htmlFor="title" className={labelCss}>Title</label>
          <p className={descriptionCss}>Title for your place, should be short and catchy for advertisment</p>
          <input type="text" id="title" placeholder="title, like my summer home" />
          <label htmlFor="address" className={labelCss}>Address</label>
          <p className={descriptionCss}>Address to this place</p>
          <input type="text" id="address" placeholder="address" />
          <h2 className={labelCss}>Photos</h2>
          <p className={descriptionCss}>The more the better</p>
          <div className="flex gap-2">
            <input type="text" placeholder="Add using a link ....jpg" />
            <button className="primaryColor px-3 rounded-xl">Add&nbsp;photo</button>
          </div>
          <div>
            <button className="p-4 border rounded-xl flex flex-col items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
              Upload from your device
            </button>
          </div>
          <label htmlFor="desc" className={labelCss}>Description</label>
          <p className={descriptionCss}>A small descrption about your place</p>
          <textarea id="desc" cols="30" rows="4"></textarea>
          <h2 className={labelCss}>Perks</h2>
          <p className={descriptionCss}>Select all the perks of your place</p>
          <div className="grid mt-2 gap-2 grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
            <div className="border p-4 rounded-2xl">
              <input type="checkbox" id="wifi" className="" />
              <label htmlFor="wifi">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
                Wifi</label>
            </div>
            <div className="border p-4 rounded-2xl">
              <input type="checkbox" id="tv" className="" />
              <label htmlFor="tv">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                TV</label>
            </div>
            <div className="border p-4 rounded-2xl">
              <input type="checkbox" id="parking" className="" />
              <label htmlFor="parking">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                Free Parking Space</label>
            </div>
            <div className="border p-4 rounded-2xl">
              <input type="checkbox" id="pets" className="" />
              <label htmlFor="pets">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
                Pets allowed</label>
            </div>
            <div className="border p-4 rounded-2xl">
              <label htmlFor="space">
                <input type="checkbox" id="space" className="" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                Private Entrance</label>
            </div>
            <div className="border p-4 rounded-2xl">
              <input type="checkbox" id="washer" className="" />
              <label htmlFor="washer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
                Washer</label>
            </div>
          </div>
          <label htmlFor="extraInfo" className={labelCss}>Extra Info</label>
          <p className={descriptionCss}>House rules, etc</p>
          <textarea id="extraInfo" cols="30" rows="4"></textarea>
          <h2 className={labelCss}>Check in&out times</h2>
          <p className={descriptionCss}>add check in and out times, remember to have some time window for cleaning the room between guests.</p>
          <div className="grid sm:grid-cols-3 gap-2">
            <div>
              <h3 className="mt-2 -mb-1 font-semibold">Check in time</h3>
              <input type="text" placeholder="13:00"/>
            </div>
            <div>
              <h3 className="mt-2 -mb-1 font-semibold">Check in time</h3>
              <input type="text" placeholder="13:00" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1 font-semibold">Check in time</h3>
              <input type="text" placeholder="13:00" />
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
