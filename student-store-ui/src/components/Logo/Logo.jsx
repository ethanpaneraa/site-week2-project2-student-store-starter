import React from "react";
import "./Logo.css"; 
import { Link } from "react-router-dom";
const Logo = () => {

    return (

        <Link to="/"><img className="logo" src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/></Link>

    )
}

export default Logo;