import { BrowserRouter,Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Menu from "../pages/Menu/Menu"
import PaySuccess from "../pages/PaySuccess/PaySuccess"
import Register from "../pages/Register/Register"


const Navigation = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/PaySuccess" element={<PaySuccess />} />
            <Route path="/Register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation