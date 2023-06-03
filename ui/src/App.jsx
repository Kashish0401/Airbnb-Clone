import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./Pages/IndexPage"
import Login from "./Pages/Login"
import Layout from "./Layout"
import Register from "./Pages/Register"
import axios from "axios"
import { UserContextProvider } from "./UserContext"
import Account from "./Pages/Account"
import Profile from "./Pages/Profile"
import Bookings from "./Pages/Bookings"
import Places from "./Pages/Places"

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/account/:subpage?' element={<Account />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
