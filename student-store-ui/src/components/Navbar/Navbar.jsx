import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-bar-container">
        <div className="nav-bar-logo"> 
        
        </div>
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
