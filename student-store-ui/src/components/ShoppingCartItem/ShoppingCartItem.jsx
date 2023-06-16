import React from "react";
import "./ShoppingCartItem.css";

const ShoppingCartItem = (props) => {


    return (
        <div className="shopping-cart-item">
            <tr className="card-table-column">
            <td className="cart-table-row cart-product-name">{props.item.name}</td>
            <td className="cart-table-row cart-product-quantity">{props.quantity}</td>
            <td className="cart-table-row cart-product-price">${props.item.price.toFixed(2)}</td>
            <td className="cart-table-row cart-product-subtotal">${(props.quantity * props.item.price).toFixed(2)}</td>
            </tr>
        </div>
    );
};

export default ShoppingCartItem; 