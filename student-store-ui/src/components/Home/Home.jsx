import * as React from "react"
import { useState } from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductGridSettings from "../ProductGridSettings/ProductGridSettings"

export default function Home(props) {
  // State variables
  const [activeCategory, setActiveCategory] = useState(""); // Stores the active category for filtering
  const [searchTerm, setSearchTerm] = useState(""); // Stores the search term for filtering

  return (
    <div id="home" className="home">
      <Hero /> {/* Render the Hero component */}
      <ProductGridSettings
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      /> {/* Render the ProductGridSettings component */}
      <ProductGrid
        products={props.products}
        isFetching={props.isFetching}
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
        handleAddItemToWishlist={props.handleAddItemToWishlist}
      /> {/* Render the ProductGrid component */}
      <About /> {/* Render the About component */}
      <Contact /> {/* Render the Contact component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}
