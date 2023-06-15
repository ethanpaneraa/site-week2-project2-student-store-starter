import React from "react";
import "./ProductGridSettings.css";

const ProductGridSettings = (props) => {


    const handleNewSearchTerm = (event) => {
        props.setSearchTerm(event.target.value);
    }

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
