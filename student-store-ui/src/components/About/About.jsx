import React from "react";
import "./About.css";

const About = () => {

    return (
        <div id="about" className="about">
            <div className="about-us-container">
                <h2>About Us</h2>
                    <div className="summary">
                        <div className="text2">
                            <p>The codepath student store offers great products at great prices from a great team and for a great cause.
                            <br />
                            <br /> 
                            We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
                            <br /> 
                            <br /> 
                            All proceeds go towards bringing high quality CS education to college students around the country.</p>
                        </div>
                        {/* <div className="about-us-image">
                            <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="CodePath Image Logo" />
                        </div> */}
                    </div>
            </div>
        </div>
    );

};

export default About; 