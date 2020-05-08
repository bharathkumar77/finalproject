import React, { Component } from "react";
import axios from 'axios';
//import { response } from 'express';
 class RemoveCategory extends Component{
     state={
        
        Category: '',
        posts:[]
     };
     componentDidMount=()=>{
         this.getCategory();
     };
     displayCategory=(posts)=> {
         if(!posts.length){ return null;}

        return (posts.map((post,index) => (
            <div className="row shadow mb-3 mt-5" key={index}>
                <div className="col-md-2"></div>
                <div className="col-md-10 p-5">
                <h3>{post.Name}</h3>
                <button className="btn btn-lg btn-danger" onClick={2}>Delete</button>
                </div>
            </div>
        )));
     }
     getBook=()=>{
        axios.get('/api')
        .then((response)=>{
            
            console.log('data has been received');
        })
        .catch(()=>{
            alert('error receiving data');
        });
    }
     
     render(){
         return(
             <div>
                 {this.displayCategory(this.state.posts)}
             </div>
         )
     }
 } 
 export default RemoveCategory;