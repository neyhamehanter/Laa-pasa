const mongoose = require ("mongoose")


const ProductSchema= new mongoose.Schema(
    {
        product_id:{type:String, required:true},
        title:{type:String, required:true},
        desc:{type:String, required:true, unique:true},
        categories:{type:Array, required:true },
        price:{type:Number,required:true},
        image:{type: Object, required: true},
        inStock:{type:Boolean, default:true},
        

    },{timestamps:true}
)

module.exports =mongoose.model("Product",ProductSchema)