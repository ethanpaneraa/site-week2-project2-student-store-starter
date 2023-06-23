const express = require("express");
const router = express.Router();
const Store = require("../models/store");
const { BadRequestError, NotFoundError } = require("../utils/errors"); 

router.get("/", async (req, res, next) => {
    try {
        const productsList = await Store.getAllProducts();
        res.status(200).json({productsList});
    } catch (error) {
        next(error);
    }

    console.log("at homepage")
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

router.get("/:id", async (req, res, next) => {
    try {
        const productID = req.params.id;
        const product = await Store.getProductById(productID); 
        if (!product) {
            throw new NotFoundError("Product not found");
        }
        res.status(200).json({product});
    } catch (error) {
        next(error);
    }
})

router.post("/", async (req, res, next) => {

    try {
        // get the name of the user
        const user = req.body.user; 
        // get the items that the user put into the shopping cart
        const userShoppingCart = req.body.shoppingCart; 
        console.log(user, userShoppingCart); 
        // use our Store model to make the new object to send to the backend
        const newUserPurchase = await Store.createPurchase(user, userShoppingCart); 
        console.log("new purchase:", newUserPurchase);
        // let our server know that a good request was made and our object was successfully created
        res.status(201).json({
            "purchase": newUserPurchase
        })
    // error handling 
    } catch (error) {
        next(new BadRequestError(error)); 
    }
})

module.exports = router;