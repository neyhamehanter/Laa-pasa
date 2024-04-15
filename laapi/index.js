const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const dotenv =require ('dotenv').config();
const fileUpload = require('express-fileupload')
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const productRoute= require("./routes/product")
const cartRoute= require("./routes/cart")
const orderRoute= require("./routes/order")
const upload = require("./routes/upload")


// dotenv.config();


  mongoose.connect (process.env.DATABASE)
  .then(() => console.log("DBconnection successfull!"))
  .catch((err) => {
    console.log(err);
  });


  app.get("/api/test", ()=>{
    console.log("test is successfull");
  })

//Routes
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true
}))
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api",upload);






app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running !!");
});


