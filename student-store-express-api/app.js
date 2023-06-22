// YOUR CODE HERE
const express = require("express"); 
const morgan = require("morgan"); 
const cors = require("cors"); 
const { NotFoundError } = require("./utils/errors"); 
const storeRouter = require("./routes/store");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/store", storeRouter);

app.get("/", async (req, res) => {
    res.status(200).json({ ping: "pong" });
}) 

app.use((req, res, next) => {
    return next(new NotFoundError());
})

app.use((error, req, res, next) => {
    const status = error.status || 500; 
    const message = error.message; 

    return res.status(status).json({
        error: {message, status }
    });
}); 


module.exports = app;