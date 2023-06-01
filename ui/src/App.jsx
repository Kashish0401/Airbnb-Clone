import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./Pages/IndexPage"
import Login from "./Pages/Login"
import Layout from "./Layout"
import Register from "./Pages/Register"
import axios from "axios"
import { UserContextProvider } from "./UserContext"

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
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
