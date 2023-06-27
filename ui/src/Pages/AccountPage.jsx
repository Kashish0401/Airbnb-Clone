import AccountNav from "../Components/AccountNav"
import { UserContext } from "../UserContext"
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import PlacesPage from "./PlacesPage";
import axios from "axios";

const AccountPage = () => {

    const { user, ready, setUser } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);

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

    async function logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to='/' />
    }

    return (
        <>
            <AccountNav />
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user?.name} ({user?.email}) <br />
                    <button onClick={logout} className="primaryColor py-2 rounded-2xl px-6 mt-2">Logout</button>
                </div>
            )
            }
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </>
    )
}

export default AccountPage
