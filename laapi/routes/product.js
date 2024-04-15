const Product = require("../models/Product");
const router = require("express").Router();
const {verifyToken,verifyTokenAndAdmin ,verifyTokenAndAuthorization } = require("./verifyToken");




//Create
 router.post("/", verifyTokenAndAdmin, async(req, res)=>{
  try{
    const {product_id, title, desc, categories, price, image} = req.body;
    if(!image)
    return res.status(400).json({msg: "No images uploaded"})

    const product = await Product.findOne({product_id})
    if(product)
    return res.status(400).json({msg: "The product already exists"})

    const newProduct = new Product({product_id, title, desc, categories, price, image})
    await newProduct.save();

    return res.status(200).json({msg:"Product created successfully"})
  }catch(err){
    res.status(500).json(err);

  }
 })


//update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});


// delete
 router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
  try{
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json("Product has been deleted...")
  } catch(err){
    res.status(500).json(err)
  }
 })



//get product
 router.get("/find/:id", async (req,res)=>{
  try{
    const product = await Product.findById(req.params.id)
    res.status(200).json({product});

  } catch(err){
    res.status(500).json(err)
  }
 })
 

 //get all Products

 router.get("/", async (req,res)=>{
  const qNew =req.query.new
  const qCategory= req.query.category
  try{
    let products;

    if(qNew){
        products= await Product.find().sort({createdAt: 1 }).limit (1)
    }else if (qCategory){
        products = await Product.find({categories:{
            $in:[qCategory],

        }
    })
    }else{
        products =await Product.find()


    }

    
    res.status(200).json({products});

  } catch(err){
    res.status(500).json(err)
  }
 })





module.exports = router;
