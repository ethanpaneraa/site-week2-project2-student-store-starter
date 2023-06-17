import React from "react";
import "./NoItemsFound.css";

const NoItemsFound = (props) => {

    return (
        <div className="no-items-found">
            <h2>No items found for search: {props.searchQuery}</h2>
        </div>
    );
};

export default NoItemsFound; 