import * as React from "react"
import "./Sidebar.css"
import ShoppingCartTable from "../shoppingCartTable/shoppingCartTable";

export default function Sidebar(props) {

  const className = `sidebar ${props.sideBarIsOpen}`; 
  console.log("CLASSNAME: ", className);
  return (
    <section className={className}>
      <button onClick={props.handleSideBarToggle}>Shopping Cart</button>
      <div className="sidebar-container">
        <ShoppingCartTable
          products={props.products}
          shoppingCart={props.shoppingCart}
          sideBarIsOpen={props.sideBarIsOpen}
        />
      </div>
    </section>
  )
}
