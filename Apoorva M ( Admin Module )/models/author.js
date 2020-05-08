const mongoose=require('mongoose');
const Schema=mongoose.Schema
const BookSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
   
    ContactNo:{
        type:String,
        required:true
    },
    Email:{
        type:Number,
        required:true
    }
    

})
//model
 const author=mongoose.model('author',BookSchema);
 module.exports=author;