import { Link, useParams } from "react-router-dom"

const Places = () => {
  const { action } = useParams();
  const labelCss = 'text-2xl mt-4 inline-block', descriptionCss ='text-gray-500 text-sm';
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
        <form>
          <label htmlFor="title" className={labelCss}>Title</label>
          <p className={descriptionCss}>Title for your place, should be short and catchy for advertisment</p>
          <input type="text" id="title" />
          <label htmlFor="address" className={labelCss}>Address</label>
          <p className={descriptionCss}>Address to this place</p>
          <input type="text" id="address" />
          <h2 className={labelCss}>Photos</h2>
          <p className={descriptionCss}>The more the better</p>
          <div>
            <button className="p-8 border rounded-xl">+</button>
          </div>
        </form>
      )
      }
    </>
  )
}

export default Places
