import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"

export default function App() {

  const [products, setProducts] = useState([]); 
  const [isFetching, setIsFetching] = useState(false); 
  const [sideBarIsOpen, setSideBarIsOpen] = useState("closed"); 
  const [shoppingCart, setShoppingCard] = useState([]); 
  const [checkoutFormData, setCheckoutOUtFormData] = useState(null); 
  const [error, setError] =useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true); 

      try {
        const response = await axios.get("https://codepath-store-api.herokuapp.com/store"); 

        if (response?.data?.products) {
          setProducts(response.data.products); 
        } else {
          setError("No products found or Error fetching products"); 
        }
      } catch (error) {
        const errorMessage = error?.response?.data?.message || error.message;
        setError(errorMessage);
      } finally {
        setIsFetching(false); 
    }
  } 
    fetchProducts();
  }, []); 

  // TODO: Add handleItemToCart and handleRemoveItemToCart functions
  const handleAddItemToCart = (item) => {

    console.log(item); 
    const itemToAdd = {
      "itemID": 0, 
      "quantity": 0 
    };

    itemToAdd.itemID = item.id;

    if ((!shoppingCart.find((product) => item.id === product.itemID))) {
      itemToAdd.quantity = 1;
      setShoppingCard((prev) => [...prev, itemToAdd]);
      console.log("here")
    } else {
      const currProduct = shoppingCart.find(product => item.id === product.itemID);
      itemToAdd.quantity = currProduct.quantity + 1;
      console.log("here2")
      const newShoppingCart = shoppingCart.filter(product => { 
        return product.itemID !== itemToAdd.itemID});

      setShoppingCard([...newShoppingCart, itemToAdd])
    }

    console.log(shoppingCart);
  }

  const handleRemoveItemFromCart = (item) => {

    const itemToRemove = {
      "itemID": 0, 
      "quantity": 0 
    };

    itemToRemove.itemID = item.id;

    const currProduct = shoppingCart.find(product => item.id === product.itemID);
    if (currProduct) {
      if (currProduct.quantity === 1) {
        let shoppingCartNew = shoppingCart.filter((e) => {
          return e.itemID !== itemToRemove.itemID;
        })

        setShoppingCard(shoppingCartNew);
    } else if (currProduct.quantity > 1) {
      itemToRemove.quantity = currProduct.quantity - 1;
      const newShoppingCart = shoppingCart.filter(product => { 
        return product.itemID !== itemToRemove.itemID});

      setShoppingCard([...newShoppingCart, itemToRemove])
    } 
  }
  console.log(shoppingCart);
}
  const handleSideBarToggle = () => {
    if (sideBarIsOpen === "open") {
      setSideBarIsOpen("closed")
    } else {
      setSideBarIsOpen("open"); 
  }
}

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar 
          sideBarIsOpen={sideBarIsOpen}
          shoppingCart={shoppingCart}
          handleSideBarToggle={handleSideBarToggle}
          products={products}
          />
          <Routes>
            <Route 
              path="/" 
              element={<Home products={products} 
              isFetching={isFetching} 
              handleAddItemToCart={handleAddItemToCart} 
              handleRemoveItemFromCart={handleRemoveItemFromCart} 
              shoppingCart={shoppingCart}/>} />

            <Route 
              path="/products/:productId"
              element={<ProductDetail 
              />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
