const mongoose=require('mongoose');
const Schema=mongoose.Schema
const BookSchema=new Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
   
    ContactNo:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
    

})
//model
 const books=mongoose.model('books',BookSchema);
 module.exports=books;