import React from "react";
import "./Footer.css"

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>All Categories</h4>
                    <ul>
                        <li>All Categories</li>
                        <li>Clothing</li>
                        <li>Food</li>
                        <li>Accessorie</li>
                        <li>Technology</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Company Information</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Find a Store</li>
                        <li>Terms</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Socials</h4>
                    <ul>
                        <li>Twitter</li>
                        <li>Insagram</li>
                        <li>Facebook</li>
                        <li>TikTok</li>
                        <li>Linkedln</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer; 