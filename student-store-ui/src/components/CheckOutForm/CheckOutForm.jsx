import React from "react";
import "./CheckOutForm.css";
import { useState } from "react";
const CheckOutForm = () => {

    return (

        <div className="checkout-form-container">
            <h2>Check Out</h2>
            <label htmlFor="checkout-form">Username</label>
            <input 
                className="name-input" 
                type="text"
                name="name"
                value=""
                placeholder="Enter your name"
                />
        </div>
    );
};

export default CheckOutForm;