const mongoose = require ("mongoose")


const ProductSchema= new mongoose.Schema(
    {
        product_id:{type:String, required:true,unique:true},
        title:{type:String, required:true, unique:true},
        desc:{type:String, required:true, unique:true},
        categories:{type:String , required:true },
        price:{type:Number,required:true},
        image:{type: Object, required: true},
        checked:{
            type: Boolean,
            default: false
        },
        inStock:{type:Number, default:0},
        

    },{timestamps:true}
)

module.exports =mongoose.model("Product",ProductSchema)