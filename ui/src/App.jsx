import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./Pages/IndexPage"
import Login from "./Pages/LoginPage"
import Layout from "./Layout"
import Register from "./Pages/RegisterPage"
import axios from "axios"
import { UserContextProvider } from "./UserContext"
import Account from "./Components/AccountNav"
import Profile from "./Pages/ProfilePage"
import Bookings from "./Pages/BookingsPage"
import Places from "./Pages/PlacesPage"

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
            <Route path='/account/:subpage?' element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
