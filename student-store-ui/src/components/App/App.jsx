import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import PurchasesHistory from "../PurchasesHistory/PurchasesHistroy"
import PurchaseDetail from "../PurchaseDetail/PurchaseDetail"
import Wishlist from "../Wishlist/Wishlist"
import NotFound from "../NotFound/NotFound"
import "./App.css"

/**
 * The main component for the Student Store web application.
 * It handles fetching products, managing the shopping cart, and rendering different routes.
 */
export default function App() {

  const checkoutFormInputData = {
    "name": "", 
    "email": ""
  }

 // State variables
 const [products, setProducts] = useState([]); // Stores the list of products
 const [isFetching, setIsFetching] = useState(false); // Indicates if data is being fetched
 const [sideBarIsOpen, setSideBarIsOpen] = useState("closed"); // Controls the state of the sidebar
 const [shoppingCart, setShoppingCard] = useState([]); // Stores the items in the shopping cart
 const [checkoutFormData, setCheckoutFormData] = useState(checkoutFormInputData); // Stores the form data for checkout
 const [lastPurchaseReceipt, setLastPurchaseReceipt] = useState({})
 const [purchaseSuccess, setPurchaseSucess] = useState(false); // Indicates if the last purchase was successful
 const [error, setError] =useState(null); // Stores any errors that occur during data fetching
 const [purchases, setPurchases] = useState([]); // array of all past purchases made
 const [wishlist, setWishlist] = useState([]); 

  // Fetch all product data on first load of web app
  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true); 

      // first try to get the data from API
      try {
        const response = await axios.get("http://localhost:3001/store/"); 

        // if good fetch, set the data
        if (response?.data?.productsList) {
          setProducts(response.data.productsList); 
        } else {
          setError("No products found or Error fetching products"); 
        }
      // if not a good fetch, display the error message
      } catch (error) {
        const errorMessage = error?.response?.data?.message || error.message;
        setError(errorMessage);
        alert(errorMessage); 
      } finally {
      // end fetching state
        setIsFetching(false); 
    }
  }
    fetchProducts();
  }, []); 

   // Function to handle adding an item to the shopping cart
  const handleAddItemToCart = (item) => {

    // declare the new item that we want to add to the shopping cart
    const itemToAdd = {
      "itemID": 0, 
      "quantity": 0 
    };

    // change the new item to match the id of the item we want to add
    itemToAdd.itemID = item.id;

    // check to see if this product already exist in our shopping cart
    if ((!shoppingCart.find((product) => item.id === product.itemID))) {
      // if the item doesn't exist, then add it to our shopping cart
      itemToAdd.quantity = 1;
      setShoppingCard((prev) => [...prev, itemToAdd]);
    // otherwise, we need to find the product in our shopping cart and increment the quantity 
    } else {
      const currProduct = shoppingCart.find(product => item.id === product.itemID);
      itemToAdd.quantity = currProduct.quantity + 1; 
      const newShoppingCart = shoppingCart.filter(product => { 
        return product.itemID !== itemToAdd.itemID});

      // use spreader to update array with new item in cart
      setShoppingCard([...newShoppingCart, itemToAdd])
    }
  }

  // Function to handle removing an item from the shopping car
  const handleRemoveItemFromCart = (item) => {

    // declare the item we might want to remove
    const itemToRemove = {
      "itemID": 0, 
      "quantity": 0 
    };

    itemToRemove.itemID = item.id;
    // first try to see if the item exist in our shopping cart
    const currProduct = shoppingCart.find(product => item.id === product.itemID);
    if (currProduct) {
      // If the item quantity is 1, remove it from the shopping cart
      if (currProduct.quantity === 1) {
        let shoppingCartNew = shoppingCart.filter((e) => {
          return e.itemID !== itemToRemove.itemID;
        })

        setShoppingCard(shoppingCartNew);
    // If the item quantity is greater than 1, decrease its quantity by 1
    } else if (currProduct.quantity > 1) {
      itemToRemove.quantity = currProduct.quantity - 1;
      const newShoppingCart = shoppingCart.filter(product => { 
        return product.itemID !== itemToRemove.itemID});

      setShoppingCard([...newShoppingCart, itemToRemove])
    } 
  }
}

  const handleAddItemToWishlist = (item) => {
    const itemToAdd = {
      "itemID": 0, 
      "quantity": 0 
    };

    // change the new item to match the id of the item we want to add
    itemToAdd.itemID = item.id;

    // check to see if this product already exist in our shopping cart
    if ((!wishlist.find((product) => item.id === product.itemID))) {
      // if the item doesn't exist, then add it to our shopping cart
      itemToAdd.quantity = 1;
      setWishlist((prev) => [...prev, itemToAdd]);
      
    // otherwise, we need to find the product in our shopping cart and increment the quantity 
    }
    console.log("wishlist:", wishlist)
  }

  const handleRemoveItemFromWishlist = (item) => {

    const itemToRemove = {
      "itemID": 0, 
      "quantity": 0 
    };

    itemToRemove.itemID = item.id;
    // first try to see if the item exist in our shopping cart
    const currProduct = wishlist.find(product => item.id === product.itemID);
    if (currProduct) {
      // If the item quantity is 1, remove it from the shopping cart
      if (currProduct.quantity === 1) {
        let newWishlist = wishlist.filter((e) => {
          return e.itemID !== itemToRemove.itemID;
        })

        setWishlist(newWishlist);
      }  
    }
  }
  // Function to toggle the sidebar
  const handleSideBarToggle = () => {
    if (sideBarIsOpen === "open") {
      setSideBarIsOpen("closed")
    } else {
      setSideBarIsOpen("open"); 
  }
}

  // handles the case when users enter their information into the checkout form 
  const handleCheckoutFormChange = (event) => {
    setCheckoutFormData((prev) => ({
      ...prev, [event.target.name] : event.target.value}))
    console.log(checkoutFormData); 
  }

  // handles when the user presses the submit for their order
  const handleOnSubmitCheckoutForm = async () => {

    // base case, we need to make sure we don't send an empty shopping cart to the server
    if (!shoppingCart.length > 0 ) {
      alert("shopping cart is empty: can't submit")
      return null; 
    }

    // making the post request for our node server with the information 
    // about this customer as well as their shopping cart information
    console.log("here"); 
    await axios.post(`http://localhost:3001/store/`, {
      user : checkoutFormData, 
      shoppingCart : shoppingCart
    }) 
    // this is going to be useful for displaying all of the recent purchases
    .then((response) => {
      console.log("response:", response); 
      console.log("Response from server:", response); 
      setLastPurchaseReceipt(response.data.purchase)
      console.log("last purchase receipt:", lastPurchaseReceipt);
    })
    .catch((error) => {
      console.log("Error when sending data:", error)
    })

    setPurchaseSucess(true);

    // reset the shopping cart and user information back to their defaults
    setShoppingCard([]); 
    setCheckoutFormData(checkoutFormInputData); 
    

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
          checkoutFormData={checkoutFormData}
          handleCheckoutFormChange={handleCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          lastPurchaseReceipt={lastPurchaseReceipt}
          purchaseSucess={purchaseSuccess}
          />
          <Routes>
            <Route 
              path="/site-week2-project2-student-store-starter/" 
              element={<Home products={products} 
              isFetching={isFetching} 
              handleAddItemToCart={handleAddItemToCart} 
              handleRemoveItemFromCart={handleRemoveItemFromCart} 
              handleAddItemToWishlist={handleAddItemToWishlist}
              shoppingCart={shoppingCart}/>} />

            <Route 
              path="/products/:productId"
              element={<ProductDetail 
                handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemFromCart={handleRemoveItemFromCart} 
                handleAddItemToWishlist={handleAddItemToWishlist}
                handleRemoveItemFromWishlist={handleRemoveItemFromWishlist}
                shoppingCart={shoppingCart}ls
              />}
            />

            <Route 
              path="/site-week2-project2-student-store-starter/purchases"
              element={<PurchasesHistory 
              purchases={purchases}
              setPurchases={setPurchases}
              />}
            />

            <Route 
              path="/site-week2-project2-student-store-starter/purchases/:id"
              element={<PurchaseDetail 
              purchases={purchases}
              setPurchases={setPurchases}
              />}
            />

            <Route 
              path="/site-week2-project2-student-store-starter/wishlist"
              element={<Wishlist
              wishlist={wishlist}
              handleRemoveItemFromWishlist={handleRemoveItemFromWishlist}
              products={products}
              />}
            />

            <Route 
              path="*" 
              element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
