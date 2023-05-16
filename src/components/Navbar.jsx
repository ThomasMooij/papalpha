import { Link } from "react-router-dom"
import logo from "../assets/images/logo.jpeg"
import cart from "../assets/images/cart.jpg"

const Navbar = () => {
  return (
    <nav id='header' className='bg-black text-white'>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="logo-wrapper pl-4 flex items-center justify-between space-x-10">
                <Link className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                     PAPAUPA
                </Link>
                
            </div>
            <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                <Link to="/">home</Link>
                <Link to="#about">about</Link>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <Link to="/login">
                    <img src={cart} alt="" className="w-10  rounded hover:rounded-lg"/>
                </Link>
                <Link to="/login">sign in</Link>
                <Link to="register">Sign up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar