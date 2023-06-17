import React from 'react'
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import NoItemsFound from '../NoItemsFound/NoItemsFound';
const ProductGrid = (props) => {

    let productsGrid = props.products; 

    if (props.activeCategory !== "") {
        productsGrid = productsGrid.filter((product) => {
            return product.category === props.activeCategory; 
        });
    } 

    if (props.searchTerm !== "") {
        productsGrid = productsGrid.filter((product) => {
            return product.name.toLowerCase().includes(props.searchTerm.toLowerCase()); 
        });
    }

    if (productsGrid.length === 0) {
        return (
            <NoItemsFound searchQuery={props.searchTerm}/>
        )
    }
    return (
        <div id="buy-now" className='product-grid'>
            <div className='product-grid-container'>
                {
                    props.isFetching ? (
                        <div><h2>Loading...</h2></div>
                    ) : productsGrid.map((product) => {
                        return (
                            <ProductCard 
                                key={product.name} 
                                product={product} 
                                handleAddItemToCart={props.handleAddItemToCart} 
                                handleRemoveItemFromCart={props.handleRemoveItemFromCart} 
                                shoppingCart={props.shoppingCart}/>
                        )
                    })

                }
            </div>
        </div>
    );

};

export default ProductGrid; 