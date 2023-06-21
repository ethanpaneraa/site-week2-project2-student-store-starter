/* 
The Hero component is responsible for rendering the header for the web app.
It displays a welcome message and a brief description of the app's purpose.
*/ 
import React from 'react'
import "./Hero.css"

const Hero = () => {

    return (
        <div className="hero">
            <div className='hero-container'>
                <div className='hero-text'>
                    <h1>Welcome!
                    <br />
                    Discover items that give you inspiration</h1>
                    <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready</p>
                </div>
            </div>
        </div>
    )
};

export default Hero;
