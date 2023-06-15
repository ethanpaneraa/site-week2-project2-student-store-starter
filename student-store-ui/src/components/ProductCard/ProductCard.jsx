import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {


    return (
        <div className="product-card">
            <h2 className="text">{props.product.name}</h2>
            <div className="media">
                <Link to={`/products/${props.product.id}`}>
                    <img src={props.product.image}/>
                </Link>
            </div>
            <h3>${props.product.price}</h3>
        </div>
    );

};

export default ProductCard; 