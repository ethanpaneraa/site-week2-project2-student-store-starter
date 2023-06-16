import React from "react";
import "./ShoppingCartTable.css";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import ShoppingCartHeader from "../ShoppingCartHeader/ShoppingCartHeader.";

const ShoppingCartTable = (props) => {


    let y; 
    let grandTotal; 
    let subTotal; 

    const getAllShoppingCartItems = () => {
        return (
            props.shoppingCart.map((item) => {
                const currentProduct = props.products.find((product) => product.id === item.itemID); 

                if (item.quantity > 0 && currentProduct !== null) {
                    return (
                        <ShoppingCartItem 
                            key={currentProduct.name} 
                            item={currentProduct} 
                            quantity={item.quantity}/>
                        )
                    }
                }
            )
        )
    }

    const getTotalCost = () => {
        const TAX = 0.875; 
        subTotal = 0; 
        props.shoppingCart.forEach((product) => {
            subTotal += props.products.find(item => item.id === product.itemID).price * product.quantity;
        })

        let x = subTotal * TAX;
        y = x; 
        grandTotal = subTotal + x; 
    }

    getTotalCost();

    return (
        <div className="shopping-cart-table">

            {props.shoppingCart.length > 0 ? (
                <table className="shopping-cart-table">
                    <ShoppingCartHeader />
                    {getAllShoppingCartItems()}
                    <tr className="cart-table--column">
                        <th className="cart-table-row"></th>
                        <th className="cart-table-row">Subtotal</th>
                        <th className="cart-table-row">Tax</th>
                        <th className="cart-table-row">Grand Total</th>
                    </tr>
                    <tr className="cart-table--column"> 
                        <td className="cart-table-row"></td>
                        <td className="cart-table-row">${subTotal?.toFixed(2)}</td>
                        <td className="cart-table-row">${y?.toFixed(2)}</td>
                        <td className="cart-table-row">${grandTotal?.toFixed(2)}</td>
                    </tr>
                </table>
            ) : (
                <div className="shopping-cart-empty">
                    <h2>Add Items to You Cart!</h2>
                </div>
            )}
        </div>
    );
};

export default ShoppingCartTable; 