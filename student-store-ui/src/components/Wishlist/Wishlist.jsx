import React from "react";
import "./Wishlist.css"; 

const Wishlist = (props) => {


    const getAllWishlistItems = () => {
        return (props.wishlist.map((item) => {
            const currWishlistItem = props.products.find((product) => product.id === item.itemID)

            if (item.quantity > 0 && currWishlistItem !== null) {
                return <div className="wishlist-grid-item">
                        <h3>{currWishlistItem.name}</h3>
                        <h2>{currWishlistItem.price.toFixed(2)}</h2>
                        <img src={currWishlistItem.image} />
                        <button onClick={(event) => {props.handleRemoveItemFromWishlist(currWishlistItem)}}>Remove From Wishlist</button>
                </div>
            }
        }))
    }

    return (

        <div className="wishlist-container">
            <div className="wishlist-item-gird">
                {props.wishlist.length > 0 ? (
                    getAllWishlistItems()
                ) :
                (<h1>Add items to your wishlist!</h1>)}
            </div>
        </div>

    );

};

export default Wishlist; 