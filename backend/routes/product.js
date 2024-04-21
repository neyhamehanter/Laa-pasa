const Product = require("../models/Products");
const router = require("express").Router();
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');


 router.post("/addProducts", auth, authAdmin,async (req,res)=>{
    try{
        const {product_id, title, desc, categories, price, image} = req.body;
        if(!image)
        return res.status(400).json({msg: "No image uploaded"});

        const product = await Product.findOne({product_id})
        if(product)
        return res.status(400).json({msg: "The product already exists"});

        const newProduct = new Product({
            product_id, title, desc, categories, price,image
        })
        
        await newProduct.save()
        return res.status(200).json({msg: "Created a new product"});
    }catch(err){
        res.status(500).json(err)
    }

 })

 router.put("/updateProduct/:id",auth,authAdmin, async(req,res)=>{
  try{
    const {title, desc, categories, price, image}  = req.body;
    if(!image)
    return res.status(400).json({msg: "No image Uploaded"});
    
    await Product.findByIdAndUpdate({_id: req.params.id}, {title,desc,categories,price,image})
    res.status(200).json({msg: "Updated a product"})
  }catch(err){
    return res.status(500).json({msg: err.message})

  }

 })

 router.delete('/deleteProduct/:id', auth, authAdmin, async(req,res)=>{
  try{
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({msg: "Deleted a product"})

  }catch(err){
    return res.status(500).json({msg: err.message})

  }

 })

 router.get('/product',async(req,res)=>{
  try{
    console.log(req);
    const product = await Product.find()
    
    if(!product) return res.status(400).json({msg: "Product does not exist"})
    res.json(product)

  }catch(err){
    return res.status(500).json({msg: err.message});

  }

 })

 router.get('/product/:id',auth,authAdmin, async(req,res)=>{
  try{
    const prod_id = req.params.id;
    const productDetails = await Product.findById(prod_id)
    if(!productDetails) return res.status(404).json({msg: "Product does not exist"})

    return res.status(200).json(productDetails);

  }catch(err){
    return res.status(500).json(err.message);
  }
 })






module.exports = router;
