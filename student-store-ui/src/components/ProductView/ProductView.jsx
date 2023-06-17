import React from "react";
import "./ProductView.css";

const ProductView = (props) => {

    const getProductQuantity = () => {
        return props.shoppingCart.find((product) => {
            return product.itemID === props.productDetail.id;
        })
    }

    return (
        <div className="product-view-container">
            <div className="product-view">
                <h2>Product #{props.productDetail.id}</h2>
                <h2>{props.productDetail.name}</h2>
                <img src={props.productDetail.image} />
                <h3>Price: ${props.productDetail.price}</h3>
                <h3>{props.productDetail.description}</h3>
                <div className="button-container2">
                    <button onClick={(event) => {props.handleAddItemToCart(props.productDetail)}}>+</button>
                    <button onClick={(event) => {props.handleRemoveItemFromCart(props.productDetail)}}>-</button>
                </div>
                {getProductQuantity() != null && getProductQuantity().quantity > 0 ? <h3 className="product-quantaity">Quantity: {getProductQuantity().quantity}</h3> : <h3></h3>}
            </div>
        </div>
    );

};

export default ProductView; 