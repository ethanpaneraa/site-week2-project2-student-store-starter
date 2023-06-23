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

        // 
        const newPurchase = receipt.sort((a,b) => a.itemID - b.itemID)

        for (let i = 0; i < newPurchase.length; i++) {
            for (let j = 0; j < newPurchase.length; j++) {
                if (newPurchase[i].itemID === newPurchase[j].itemID) {
                    throw new BadRequestError("Duplicate item in order");
                }
            }
        }

        const allProducts = await this.getAllProducts(); 

        const allPurchases = await this.getAllPurchases();

        const newPurchaseID = allPurchases.length + 1;

        newPurchase.forEach((item) => {
            const product = allProducts[item.itemID - 1];
            subtotal += product.price * item.quantity; 
        })

        tax = subtotal * tax;

        grandTotal = subtotal + tax;

        const newPurchaseTimeStamp = new Data().toISOString();

        const confirmationMessage = {
            title: `Order #${id}`,
            message: `Receipt for ${user.name} available at ${user.email} for a total of $${total.toFixed(2)}`
        }

        const newPurchaseObject = {
            id,
            userName,
            newPurchase,
            grandTotal,
            newPurchaseTimeStamp,
            confirmationMessage
        };

        await storage.get("purchases").push(newPurchaseObject).write();

        return newPurchaseObject;
        
    }

    static async getAllPurchases() {
        return storage.get("purchases").value(); 
    }

}

module.exports = Store; 