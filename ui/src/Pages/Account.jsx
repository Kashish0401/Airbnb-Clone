import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";

const Account = () => {
    const { user, ready } = useContext(UserContext);

    let { subpage } = useParams();
    if (subpage === undefined)
        subpage = 'profile';

    if (!ready) {
        return <div>Loading...</div>
    }
    if (ready && !user) {
        return (
            <Navigate to='/login' />
        )
    }

    function LinkClasses(type = null) {
        let classes = "px-8 py-2"
        if (type === subpage) {
            classes += ' bg-primary text-white rounded-full';
        }
        console.log(classes);
        return classes;
    }

    return (
        <div>
            <nav className={"flex justify-center gap-2 w-full mt-8"}>
                <Link to={'/account'} className={LinkClasses('profile')}>My profile</Link>
                <Link to={'/account/bookings'} className={LinkClasses('bookings')}>My bookings</Link>
                <Link to={'/account/places'} className={LinkClasses('places')}>My accommodations</Link>
            </nav>
        </div>
    )
}

export default Account
