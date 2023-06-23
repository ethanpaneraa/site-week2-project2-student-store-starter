import React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "../ProductView/ProductView"; 


/*
The ProductDetail component displays the details of a specific product based on its ID.

Props:
- handleAddItemToCart: A function to handle adding the item to the shopping cart.
- handleRemoveItemFromCart: A function to handle removing the item from the shopping cart.
- shoppingCart: An array representing the items in the shopping cart.
*/ 

const ProductDetail = (props) => {

    // State variable to hold the data of a product based on its id
    const [productDetails, setProductDetails] = useState({});
    // lets us know when axios is done fetching
    const [isDataFetching, setIsDataFetching] = useState(false);
    // lets us know when the data is finished fetching
    const [hasFetched, setHasFetched] = useState(false);
    // error handler state variable 
    const [error, setError] = useState(null);


    // product id from URL
    const { productId } = useParams();

    useEffect(() => 
    {
        // async function to fetch data for a specific product based on its id
        const fetchProductByID = async () => {

            // set our state variables for keeping track of status of fetch
            setIsDataFetching(true);
            setHasFetched(false)

            try {
                const response = await axios.get(`http://localhost:3001/store/${productId}`);
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
                    handleRemoveItemFromWishlist={props.handleRemoveItemFromWishlist}
                    handleAddItemToWishlist={props.handleAddItemToWishlist}
                    shoppingCart={props.shoppingCart} />
            ) :
            (
                <h2>Loading...</h2>
            )}
        </div>
    );

};

export default ProductDetail;
