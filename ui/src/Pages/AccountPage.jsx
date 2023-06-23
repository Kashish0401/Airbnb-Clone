import AccountNav from "../Components/AccountNav"
import Profile from "./ProfilePage";
import Bookings from "./BookingsPage";
import Places from "./PlacesPage";
import { UserContext } from "../UserContext"
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";

const AccountPage = () => {

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
    return (
        <>
            <AccountNav />
            {subpage === 'places' ? <Places /> : subpage === 'bookings' ? <Bookings /> : <Profile />
            }
        </>
    )
}

export default AccountPage
