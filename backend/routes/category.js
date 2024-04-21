const Category = require('../models/Cateory')
const router = require('express').Router()

router.post('/createCategory', async(req,res)=>{
    try{
        const {name} = req.body;
        const category = await Category.findOne({name})
        if(category)  return res.status(400).json({msg:"This meat category already exists"})

        const newCategory = new Category({name})

        await newCategory.save()

        res.status(200).json({msg: "Created a category"})
        

    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.get('/getCategory', async(req,res)=>{
    try{
        const meatCategories = await Category.find()
        res.json(meatCategories)

    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.get('/getOneCategory/:id', async(req,res)=>{
    const category = await Category.findById(req.params.id);
    if(!category) return res.status(404).json({msg: "The category does not exists"})
    return res.status(200).json(category);
})

router.put('/updateCategory/:id', async(req,res)=>{
    try{
        const {name} = req.body;
        await Category.findByIdAndUpdate({_id: req.params.id}, {name})
        res.status(200).json({msg: "Category updated"});

    }catch(err){
        return res.status(500).json({msg: err.message})

    }
    
})

router.delete('/deleteCategory/:id', async(req,res)=>{
    try{
        await Category.findByIdAndDelete(req.params.id)
        res.json({msg: "Deleted a category"})
    }catch(err){
        return res.status(500).json({msg: err.message})

    }
})

module.exports = router;