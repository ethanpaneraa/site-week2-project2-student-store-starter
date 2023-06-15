import React from 'react'
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
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

    return (
        <div className='product-grid'>
            <div className='product-grid-container'>
                {
                    props.isFetching ? (
                        <div><h2>Loading...</h2></div>
                    ) : productsGrid.map((product) => {
                        return (
                            <ProductCard key={product.name} product={product} handleAddItemToCart={props.handleItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart} />
                        )
                    })

                }
            </div>
        </div>
    );

};

export default ProductGrid; 