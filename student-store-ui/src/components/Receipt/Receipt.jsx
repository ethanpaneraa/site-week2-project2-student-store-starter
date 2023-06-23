import React from "react";
import "./Receipt.css";

const Receipt = (props) => {

    console.log("test:", props.lastPurchaseReceipt); 
    const getItemsFromReceipt = () => {
        if (!props.lastPurchaseReceipt) {
            return null;
        }

        return (
            props.lastPurchaseReceipt?.newPurchase?.map((product) => {
                let shoppingCartItem = props.products.find((item) => item.id === product.itemID);
                console.log("shoppingCartItem:", shoppingCartItem);
                return <li 
                            key={product.id}
                            className="receipt-item"
                            >
                            {product.quantity} total {shoppingCartItem.name} purchased at a cost of ${shoppingCartItem.price.toFixed(2)} for a total cost of ${(product.quantity * shoppingCartItem.price).toFixed(2)}
                            </li>
            })
        )
    }

    return (

        <div className="shopping-cart-receipt-container">
            {props?.lastPurchaseReceipt != null && props.purchaseSucess === true ?  (
                <div className="reciept-container">
                    <h2>Successfully purchased the following items:</h2>
                    <h2>{props?.lastPurchaseReceipt?.message?.title}</h2>
                    <h2>{props?.lastPurchaseReceipt.message?.body}</h2>
                    <ul>
                        {getItemsFromReceipt()}
                    </ul>
                </div>
            )
            
        : (<></>)}
        </div>

    );

};

export default Receipt; 