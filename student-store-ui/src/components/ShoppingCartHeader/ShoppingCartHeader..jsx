import React from "react";
import "./ShoppingCartHeader.css";

const ShoppingCartHeader = () => {

    return (

        <tr className="cart-table-column">
            <th className="cart-table-row">Name</th>
            <th className="cart-table-row">Quantity</th>
            <th className="cart-table-row">Price</th>
            <th className="cart-table-row">Total</th>
        </tr>
    );
};

export default ShoppingCartHeader; 