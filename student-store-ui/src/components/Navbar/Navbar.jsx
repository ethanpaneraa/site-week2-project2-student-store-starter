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
          <a href="/site-week2-project2-student-store-starter/#home">Home</a>
          <a href="/site-week2-project2-student-store-starter/#about">About</a>
          <a href="/site-week2-project2-student-store-starter/#contact">Contact</a>
          <a href="/site-week2-project2-student-store-starter/#buy-now">Buy Now</a>
          <a href="/site-week2-project2-student-store-starter/purchases">Purchases</a>
        </div>
      </div>
    </nav>
  )
}
