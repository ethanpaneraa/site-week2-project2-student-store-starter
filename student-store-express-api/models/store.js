const { storage }= require("../data/storage");

class Store {
    
    static async getAllProducts() {
        // return all products from the database
        return storage.get("products").value(); 
    }

    static async getProductById(productID) {

        // get all of the products from the database
        const allProducts = storage.get("products").value(); 
        // all products are ordered by id so we can array index to get the product that we want
        const product = allProducts[productID - 1];
        return product; 
    }

}

module.exports = Store; 