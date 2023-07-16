import images from "../../constants/images";

import './AboutUs.css';

function AboutUs () {
    return (
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
          <img src={images.test} alt="G_overlay" />
        </div>
    
        <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">About Us</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">
Little Lemon Restaurant: Delightful flavors, warm ambiance, and exceptional service create memorable dining moments for everyone. Come savor happiness today!</p>

          </div>
    
          <div className="app__aboutus-content_knife flex__center">
          </div>
    
          <div className="app__aboutus-content_history">
            <h1 className="headtext__cormorant">Our History</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city&#39;s diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
          </div>
        </div>
      </div>
    )
}

export default AboutUs;