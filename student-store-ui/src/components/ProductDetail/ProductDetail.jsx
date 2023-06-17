import React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "../ProductView/ProductView"; 

const ProductDetail = (props) => {

    const [productDetails, setProductDetails] = useState({});
    const [isDataFetching, setIsDataFetching] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);
    const [error, setError] = useState(null);


    const { productId } = useParams();

    useEffect(() => 
    {
        const fetchProductByID = async () => {

            setIsDataFetching(true);
            setHasFetched(false)

            try {
                const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
                console.log("response:", response)
                if (response?.data?.product) {
                    setProductDetails(response?.data?.product);
                } else {
                    setError("Product info not found or error fetching product info");
                }
            } catch (error) {
                const errorMessage = error?.response?.data?.message || error.message;
                setError(errorMessage);
            }

            setHasFetched(true); 
            setIsDataFetching(false); 
        }

    fetchProductByID();
    }, []); 

    return (
        <div className="product-detail">
            {hasFetched && !isDataFetching && !error ? (
                <ProductView 
                    productDetail={productDetails} 
                    handleAddItemToCart={props.handleAddItemToCart} 
                    handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                    shoppingCart={props.shoppingCart} />
            ) :
            (
                <h2>Loading...</h2>
            )}
        </div>
    );

};

export default ProductDetail;
