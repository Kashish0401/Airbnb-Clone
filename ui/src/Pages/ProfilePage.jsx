import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import axios from "axios";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);

    async function logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to = '/'/>
    }

  return (
    <div className="text-center max-w-lg mx-auto">
          Logged in as {user?.name} ({user?.email}) <br />
          <button onClick={logout} className="primaryColor py-2 rounded-2xl px-6 mt-2">Logout</button>
          
    </div>
  )
}

export default Profile
