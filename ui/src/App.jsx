import {BrowserRouter, Route, Routes} from "react-router-dom"
import IndexPage from "./Pages/IndexPage"
import Login from "./Pages/Login"
import Layout from "./Layout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
