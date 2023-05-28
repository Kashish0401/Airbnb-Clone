import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const Layout = () => {
    return (
        <div className='p-4'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout
