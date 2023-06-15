import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"

export default function App() {

  const [products, setProducts] = useState([]); 
  const [isFetching, setIsFetching] = useState(false); 
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false); 
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
  const handleItemToCart = (item) => {

  } 

  const handleRemoveItemToCart = (item) => {

  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route 
              path="/" 
              element={<Home products={products} 
              isFetching={isFetching} 
              handleItemToCart={handleItemToCart} 
              handleRemoveItemToCart={handleRemoveItemToCart} />} />

            <Route 
              path="/products/:productId"
              element={<ProductDetail 
              />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
