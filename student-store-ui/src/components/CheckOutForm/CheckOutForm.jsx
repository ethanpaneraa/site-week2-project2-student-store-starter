import React from "react";
import "./CheckOutForm.css";
import { useState } from "react";

const CheckOutForm = (props) => {

    return (
        <div className="checkout-form-container">
            <h2>Check Out</h2>
            <label htmlFor="checkout-form">Username</label>
            <input 
                className="name-input" 
                type="text"
                name="name"
                placeholder="Enter your name"
                value={props.checkoutFormData?.name || ""}
                onChange={props.handleCheckoutFormChange}
            />

            <label htmlFor="email">Email</label>
            <input 
                className="email-input"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={props.checkoutFormData?.email || ""}
                onChange={props.handleCheckoutFormChange}
            />

            <input 
                className="checkout-button"
                type="submit"
                value="checkout"
                onClick={(event) => {props.handleOnSubmitCheckoutForm()}}>
            </input>
        </div>
    );
};

export default CheckOutForm;