const express = require("express");
const router = express.Router();
const Store = require("../models/store");
const { BadRequestError, NotFoundError } = require("../utils/errors"); 

// fetch all products in our database
router.get("/", async (req, res, next) => {

    // first try getting the list of all of the products
    try {
        const products = await Store.getAllProducts();
        res.status(200).json({products});
    
    // if something went wrong, make the error
    } catch (error) {
        next(error);
    }
})

// getting the list of all of the purchases made
router.get("/purchases/", async (req, res, next) => {

    // first try getting the purchases from the database
    try {
        const allPurchases = await Store.getAllPurchases(); 
        // if no purchases were found, then we need to throw an error
        if (!allPurchases) {
            throw new NotFoundError("No purchases found"); 
        }
        // otherwise, we made a good API call
        res.status(200).json({allPurchases}); 
    // error handling
    } catch (error) {
        next(new BadRequestError(error)); 
    }
})

// POST request route made when user checkouts on the shopping cart
router.get("/", async (req, res, next) => {

    try {
        // get the name of the user
        const user = req.body.params; 
        // get the items that the user put into the shopping cart
        const userShoppingCart = req.body.shoppingCart; 
        // use our Store model to make the new object to send to the backend
        const newUserPurchase = await Store.createPurchase(user, userShoppingCart); 
        // let our server know that a good request was made and our object was successfully created
        res.status(201).json({
            "purchase": newUserPurchase
        })
    // error handling 
    } catch (error) {
        next(new BadRequestError(error)); 
    }
})

// fetch a specific item from our products database
router.get("/:id", async (req, res, next) => {

    // first try finding the product in our database
    try {
        const productID = req.params.id;
        const product = await Store.getProductById(productID); 
        // if we didn't find a valid object, then we need to throw an error
        if (!product) {
            throw new NotFoundError("Product not found");
        }
        // otherwise we made a good request
        res.status(200).json({product});
    // error handling
    } catch (error) {
        next(error);
    }
})


module.exports = router;