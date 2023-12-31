import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import images from "../../constants/images";
import './Navbar.css'
import logo from '../../assets/nav-logo.jpg';
function Navbar () {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <nav className="app__navbar">
        <div className="app__navbar-logo">
        <img src={logo} alt="app logo" />
        </div>
        <ul className="app__navbar-links">
            <li className="p__opensans">
                <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
                <a href="#about">About</a>
            </li>
            <li className="p__opensans">
                <a href="#menu">Menu</a>
            </li>
            <li className="p__opensans">
                <a href="#reservation">Reservation</a>
            </li>
            <li className="p__opensans">
                <a href="#login">LogIn</a>
            </li>
        </ul>

        <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In</a>
        <div></div>
        <a href="/" className="p__opensans" id="registration">Registration</a>
        </div>
        <div className="app__navbar-smallscreen">
        <GiHamburgerMenu fontSize={27} onClick={()=> setToggleMenu(true)}/>

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
        <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans">
                <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
                <a href="#about">About</a>
            </li>
            <li className="p__opensans">
                <a href="#menu">Menu</a>
            </li>
            <li className="p__opensans">
                <a href="#reservation">Reservation</a>
            </li>
            <li className="p__opensans">
                <a href="#login">LogIn</a>
            </li>
        </ul>
        </div>
        )}
        </div>
        </nav>
    )
}

export default Navbar;