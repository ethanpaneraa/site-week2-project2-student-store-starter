import * as React from "react"
import { useState } from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductGridSettings from "../ProductGridSettings/ProductGridSettings"
import "./Home.css"

export default function Home(props) {

  const [activeCategory, setActiveCategory] = useState(""); 
  const [searchTerm, setSearchTerm] = useState(""); 

  return (
    <div id="home" className="home">
      <Hero />
      <ProductGridSettings 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} />
      <ProductGrid 
        products={props.products} 
        isFetching={props.isFetching} 
        searchTerm={searchTerm} 
        activeCategory={activeCategory}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}/>
        <About />
        <Contact />
        <Footer /> 
    </div>
  )
}
