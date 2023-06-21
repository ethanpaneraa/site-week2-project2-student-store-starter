import React from 'react';
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import NoItemsFound from '../NoItemsFound/NoItemsFound';


/*
The ProductGrid component displays a grid of products based on the provided data.

Props: 

 products: An array of products to display in the grid.
- isFetching: A boolean indicating whether data is still being fetched.
- searchTerm: The current search term for filtering products.
- activeCategory: The currently selected category for filtering products.
- handleAddItemToCart: A function to handle adding an item to the shopping cart.
- handleRemoveItemFromCart: A function to handle removing an item from the shopping cart.
- shoppingCart: An array representing the items in the shopping cart

*/ 

const ProductGrid = (props) => {

    let productsGrid = props.products; 

    // Filter products based on the active category
    if (props.activeCategory !== "") {
        productsGrid = productsGrid.filter((product) => {
            return product.category === props.activeCategory; 
        });
    } 

    // Filter products based on the search term
    if (props.searchTerm !== "") {
        productsGrid = productsGrid.filter((product) => {
            return product.name.toLowerCase().includes(props.searchTerm.toLowerCase()); 
        });
    }

    // If no products are found, display a message
    if (productsGrid.length === 0) {
        return (
            <NoItemsFound searchQuery={props.searchTerm} />
        )
    }

    return (
        <div id="buy-now" className='product-grid'>
            <div className='product-grid-container'>
                {
                    // If data is still being fetched, display a loading message
                    props.isFetching ? (
                        <div><h2>Loading...</h2></div>
                    ) : productsGrid.map((product) => {
                        // Render a ProductCard component for each product
                        return (
                            <ProductCard 
                                key={product.name} 
                                product={product} 
                                handleAddItemToCart={props.handleAddItemToCart} 
                                handleRemoveItemFromCart={props.handleRemoveItemFromCart} 
                                shoppingCart={props.shoppingCart}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductGrid;