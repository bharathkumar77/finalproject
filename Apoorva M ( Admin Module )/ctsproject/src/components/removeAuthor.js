import React, { Component } from "react";
import axios from 'axios';
//import { response } from 'express';
 class RemoveAuthor extends Component{
     state={
        Name: '',
        Address: '',
        ContactNo: '',
        Email: '',
        //ReleaseDate:'',
        posts:[]
     };
     componentDidMount=()=>{
         this.getAuthor();
     };
     displayAuthor=(posts)=> {
         if(!posts.length){ return null;}

         return (posts.map((post,index) => (
            <div className="row shadow mb-3 mt-5" key={index}>
                <div className="col-md-2"></div>
                <div className="col-md-10 p-5">
                <h3>{post.Name}</h3>
                <p>{post.Address}</p>
                <p>{post.ContactNo}</p>
                <p>{post.Email}</p>
                <button className="btn btn-lg btn-danger" onClick={2}>Delete</button>
                </div>
            </div>
        )));
     }
     getAuthor=()=>{
         axios.get('/api')
         
     }
     render(){
         return(
             <div>
                 {this.displayAuthor(this.state.posts)}
             </div>
         )
     }
 } 
 export default RemoveAuthor;