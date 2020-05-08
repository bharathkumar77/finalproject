const mongoose=require('mongoose');
const Schema=mongoose.Schema
const BookSchema=new Schema({
    BookTitle:{
        type:String,
        required:true
    },
    Rating:{
        type:Number,
        required:true
    },
   
    Reviews:{
        type:String,
        required:true
    }
})
//model
 const reviewAndRating=mongoose.model('reviewAndRating',BookSchema);
 module.exports=reviewAndRating;