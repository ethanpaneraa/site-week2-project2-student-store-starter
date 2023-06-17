import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {

    const getProductQuantity = () => {
        return props.shoppingCart.find((product) => {
            return product.itemID === props.product.id;
        })
    }

    return (
        <div className="product-card">
            <div className="media">
                <Link to={`/products/${props.product.id}`}>
                    <img src={props.product.image}/>
                </Link>
            </div>
            <div className="product-information">
                <h3 className="text">{props.product.name}</h3>
                <h3>${props.product.price.toFixed(2)}</h3>
            </div>
            <div className="button-container">
                <button onClick={(event) => {props.handleAddItemToCart(props.product)}}>+</button>
                <button onClick={(event) => {props.handleRemoveItemFromCart(props.product)}}>-</button>
            </div>
            <div>
            {getProductQuantity() != null && getProductQuantity().quantity > 0 ? <h4>{getProductQuantity().quantity}</h4> : ""}
            </div>
        </div>
    );

};

export default ProductCard; 