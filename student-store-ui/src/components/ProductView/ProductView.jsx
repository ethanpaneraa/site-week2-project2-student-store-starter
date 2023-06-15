import React from "react";
import "./ProductView.css";

const ProductDetail = (props) => {

    console.log(props.productDetail); 

    return (
        <div className="product-detail">
            <h2>{props.productDetail.name}</h2>
            <h3>${props.productDetail.price}</h3>
            <h3>{props.productDetail.description}</h3>
            <img src={props.productDetail.image} />
        </div>
    );

};

export default ProductDetail; 