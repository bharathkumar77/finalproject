const express=require('express');
const router=express.Router();
const books=require('../models/books');
router.get('/',(req,res) =>{
   
    books.find({ })
     .then((data) => {
        console.log('Data:',data);
        res.json(data);
     })
     .catch((error)=>{
         console.log('error:',error);
         
     })
 });
 router.post('/save',(req,res) =>{
    console.log('Body:',req.body);
    //saving data to mongodb
    const data  =req.body;
    console.log('Data:',data);
    const newBook=new books(data);
    newBook.save((error) =>{
          if(error){
              res.status(500).json({msg:'Sorry, internal server errors'});
              return;
          }
          return res.json({
                msg:"we received your data ..."
        })
    })
});
 
module.exports=router;