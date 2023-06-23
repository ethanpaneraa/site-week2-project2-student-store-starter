const express = require("express");
const router = express.Router();
const Store = require("../models/store");
const { BadRequestError, NotFoundError } = require("./utils/errors"); 

router.get("/", async (req, res, next) => {
    try {
        const products = await Store.getAllProducts();
        res.status(200).json({products});
    } catch (error) {
        next(error);
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

router.get("/purchases", async (res, res, next) => {

    try {
        

    }

})

module.exports = router;