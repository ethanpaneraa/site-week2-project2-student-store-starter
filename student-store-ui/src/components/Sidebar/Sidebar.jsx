import * as React from "react"
import "./Sidebar.css"
import ShoppingCartTable from "../shoppingCartTable/shoppingCartTable";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

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
        
        />
      </div>
    </section>
  )
}
