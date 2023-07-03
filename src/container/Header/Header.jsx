import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import './Header.css';

function Header () {
    return (
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
            <SubHeading title="Chase The Lemon Flavour" />
            <h1 className="app__header-h1">The Key To Fine Dining</h1>
            <p className="p__opensans" style={{margin: '2rem 0'}}>
            We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.
            </p>
            <button type="button" className="custom__button">Reserve a table</button>
            </div>                    

            <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome image" style={{borderRadius:'10px'}}/>
            </div>
        </div>
    )
}

export default Header;