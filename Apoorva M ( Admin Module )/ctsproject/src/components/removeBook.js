import React, { Component } from "react";
import axios from 'axios';
//import { response } from 'express';
 class RemoveBook extends Component{
     state={
        BookTitle: '',
        AuthorName: '',
        Category: '',
        Price: '',
        //ReleaseDate:'',
        posts:[]
     };
     componentDidMount=()=>{
         this.getBook();
     };
     displayBook=(posts)=> {
         if(!posts.length){ return null;}

        return (posts.map((post,index) => (
            <div key={index}>
                <h3>{post.BookTitle}</h3>
                <p>{post.AuthorName}</p>
            </div>
        )));
     }
     getBook=()=>{
         axios.get('/api')
         .then((response)=>{
             const data=response.data;
             this.setState({posts:data});
             console.log('data has been received');
         })
         .catch(()=>{
             alert('error receiving data');
         });
     }
     render(){
         return(
             <div>
                 {this.displayBook(this.state.posts)}
             </div>
         )
     }
 } 
 export default RemoveBook;