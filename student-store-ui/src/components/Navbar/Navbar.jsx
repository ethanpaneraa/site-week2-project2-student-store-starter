import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div id="nav-bar-items" className="nav-bar-container">
        <div className="nav-bar-logo"> 
          <Logo />
        </div>
        <SocialMediaLinks /> 
        <div className="nav-bar-buttons">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
          <a href="/#buy-now">Buy Now</a>
        </div>
      </div>
    </nav>
  )
}
