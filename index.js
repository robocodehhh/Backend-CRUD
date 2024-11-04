const express = require("express");
const app = express();
const productRoute = require("./routes/product.route.js");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://admin:boss@backenddb.3k9jv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database !");
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });
