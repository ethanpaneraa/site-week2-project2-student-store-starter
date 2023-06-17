import React from "react";
import "./Contact.css"; 
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks"
const Contact = () => {

    return (
        <div id="contact" className="Contact">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <div className="contact-summary">
                    <ul className="contact-info-list">
                        <li>
                            <span className="label">Email: </span>
                            <span>code@path.org</span>
                        </li>
                        <li>
                            <span className="label">Phone: </span>
                            <span>1-800-CODEPATH</span>
                        </li>
                        <li>
                            <span className="label">Address: </span>
                            <span>415 Mission Street</span>
                        </li>
                        <li>
                            <span><SocialMediaLinks /> </span>
                        </li>
                    </ul>
                </div>
                <div className="contact-us-media">
                    <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="picture of a women smiling" />
                </div>
            </div>
        </div>
    );

};

export default Contact; 