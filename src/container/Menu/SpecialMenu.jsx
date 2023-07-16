import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import data from "../../constants/data";
import MenuItem from "../../components/MenuItem/MenuItem";
import './SpecialMenu.css';
function SpecialMenu () {
    return(
        <div className="app__specialMenu flex__center section__padding" id="menu">
            <div className="app__specialMenu-title">
                <SubHeading title="Lemon Zest: Flavors That Brighten Palates"/>
                <h1 className="headtext__cormorant">Today&#39;s Special</h1>
            </div>

            <div className="app__specialMenu-menu">

            <div className="app__specialMenu-menu_main flex__center">
                <p className="app__specialMenu-menu_heading">Main Dishes</p>
                <div className="app_specialMenu-menu_items">
                    {data.mainDishes.map((dish, index) => (
                        <MenuItem key={dish.title + index} title={dish.title} price={dish.price} tags={dish.tags}/>
                    ))}
                </div>
            </div>

            <div className="app__specialMenu-menu_img">
                    <img src={images.menu} alt="menu image" />
                </div>
            
                <div className="app__specialMenu-menu_desserts flex__center">
                <p className="app__specialMenu-menu_heading">Dessert Dishes</p>
                <div className="app_specialMenu-menu_items">
                    {data.desserts.map((dessert, index) => (
                        <MenuItem key={dessert.title + index} title={dessert.title} price={dessert.price} tags={dessert.tags}/>
                    ))}
                </div>
            </div>

        </div>

        <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>

    </div>
    )
}

export default SpecialMenu;