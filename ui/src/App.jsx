import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./Pages/IndexPage"
import Login from "./Pages/LoginPage"
import Layout from "./Layout"
import Register from "./Pages/RegisterPage"
import axios from "axios"
import { UserContextProvider } from "./UserContext"
import Account from "./Pages/AccountPage"
import PlacesPage from "./Pages/PlacesPage"
import Bookings from "./Pages/BookingsPage"
import PlacesForm from "./Components/PlacesForm"

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/account' element={<Account />} />
            <Route path='/account/places' element={<PlacesPage />} />
            <Route path='/account/bookings' element={<Bookings />} />
            <Route path='/account/places/new' element={<PlacesForm />} />
            <Route path='/account/places/:id' element={<PlacesForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
