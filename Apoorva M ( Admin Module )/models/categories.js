const mongoose=require('mongoose');
const Schema=mongoose.Schema
const Category=new Schema({
    Name:{
        type:String,
        required:true
    }
})
//model
 const categories=mongoose.model('categories',Category);
 module.exports=categories;