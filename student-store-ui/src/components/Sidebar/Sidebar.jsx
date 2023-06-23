import * as React from "react"
import "./Sidebar.css"
import ShoppingCartTable from "../shoppingCartTable/shoppingCartTable";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import Receipt from "../Receipt/Receipt";

export default function Sidebar(props) {

  const className = `sidebar ${props.sideBarIsOpen}`; 
  return (
    <section className={className}>
      <button onClick={props.handleSideBarToggle}>Cart</button>
      <div className={"sidebar-container" + props.sideBarIsOpen} >
        <ShoppingCartTable
          products={props.products}
          shoppingCart={props.shoppingCart}
          sideBarIsOpen={props.sideBarIsOpen}
        />
        <CheckOutForm 
        sideBarIsOpen={props.sideBarIsOpen}
        shoppingCart={props.shoppingCart}
        checkoutFormData={props.checkoutFormData}
        handleCheckoutFormChange={props.handleCheckoutFormChange}
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
        lastPurchaseReceipt={props.lastPurchaseReceipt}
        purchaseSucess={props.purchaseSucess}
        />
        <Receipt 
          products={props.products}
          lastPurchaseReceipt={props.lastPurchaseReceipt}
          purchaseSucess={props.purchaseSucess}
        />
      </div>
    </section>
  )
}
