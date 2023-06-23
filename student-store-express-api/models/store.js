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

    static async createPurchase(user, receipt) {

        // variables to be user later to setup purchase object
        let grandTotal = 0; 
        let subtotal = 0; 
        let tax = 0.85; 

        // check if all of the required data is present
        if (!user || !user.email || !order || !confirmation) {
            throw new BadRequestError("Missing required fields: email, order, confirmation");
        }

        // sort all of the items in the shopping cart
        const newPurchase = receipt.sort((a,b) => a.itemID - b.itemID)

        // try to see if there are any items that are duplicates in the shopping cart
        for (let i = 0; i < newPurchase.length; i++) {
            for (let j = 0; j < newPurchase.length; j++) {
                // if a duplicate is found, then we have bad data trying to be sent
                if (newPurchase[i].itemID === newPurchase[j].itemID) {
                    throw new BadRequestError("Duplicate item in order");
                }
            }
        }


        // get all of the products in our database
        const allProducts = await this.getAllProducts(); 
        // and get all of the past purchases that folks have made
        const allPurchases = await this.getAllPurchases();
        // calculate the new id of this purchase (so we can easily find it later)
        const newPurchaseID = allPurchases.length + 1;

        // calculate the subtotal for each item in the shopping cart
        newPurchase.forEach((item) => {
            const product = allProducts[item.itemID - 1];
            subtotal += product.price * item.quantity; 
        })
        // calculate the tax
        tax = subtotal * tax;
        // calculate the grand total of the purchase
        grandTotal = subtotal + tax;

        // figure out the time stamp for this purchase
        const newPurchaseTimeStamp = new Data().toISOString();

        // this is the message that is going to be displayed to the user once they confirm their purchase
        const confirmationMessage = {
            title: `Order #${id}`,
            message: `Receipt for ${user.name} available at ${user.email} for a total of $${total.toFixed(2)}`
        }

        // object that is going to be sent to the database once the purchase is made
        const newPurchaseObject = {
            newPurchaseID,
            userName,
            newPurchase,
            grandTotal,
            newPurchaseTimeStamp,
            confirmationMessage
        };

        // finally send the purchase to the database
        await storage.get("purchases").push(newPurchaseObject).write();

        return newPurchaseObject;
        
    }

    static async getAllPurchases() {
        return storage.get("purchases").value(); 
    }

}

module.exports = Store; 