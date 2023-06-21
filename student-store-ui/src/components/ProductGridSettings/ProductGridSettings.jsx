/*
The ProductGridSettings component provides user interface elements for filtering and searching products.

Props:Props:
- searchTerm: The current search term for filtering products.
- setSearchTerm: A function to update the search term.
- activeCategory: The currently selected category for filtering products.
- setActiveCategory: A function to update the active category.

*/ 

import React from "react";
import "./ProductGridSettings.css";

const ProductGridSettings = (props) => {

    // Update the search term when the user types in the search input
    // this get passes back up to home
    const handleNewSearchTerm = (event) => {
        props.setSearchTerm(event.target.value);
    }

    // Update the active category when a category button is clicked
    // this gets passed up back to home
    const handleNewCategory = (event) => {
        props.setActiveCategory(event.target.id);
    }

    return (
        <div className="products-grid-settings">
            <div className="products-grid-settings-container"> 
                <div className="search-container">
                    <input 
                        name="item-search" 
                        type="text" 
                        placeholder="Item search..."
                        value={props.searchQuery}
                        onChange={handleNewSearchTerm}
                    /> 
                </div>
                <div className="products-grid-category-selectors">
                    <button id="" onClick={handleNewCategory}>All</button>
                    <button id="clothing" onClick={handleNewCategory}>Clothing</button>
                    <button id="food" onClick={handleNewCategory}>Food</button>
                    <button id="accessories" onClick={handleNewCategory}>Accessories</button>
                    <button id="tech" onClick={handleNewCategory}>Technology</button>
                </div>
            </div>
        </div>
    );
};

export default ProductGridSettings;