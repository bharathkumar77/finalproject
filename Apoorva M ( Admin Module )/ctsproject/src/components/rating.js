import React, { Component } from "react";
import axios from 'axios';
//import { response } from 'express';
 class ReviewRating extends Component{
     state={
        BookTitle: '',
        Rating: '',
        Reviews: '',
        
        posts:[]
     };
     componentDidMount=()=>{
         this.getReview();
     };
     displayReview=(posts)=> {
         if(!posts.length){ return null;}

        return (posts.map((post,index) => (
            <div key={index}>
                
                <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>BookTitle</td>
                <td>{post.BookTitle}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{post.Rating}</td>
              </tr>
              <tr>
                <td>Reviews</td>
                <td>{post.Reviews}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
            </div>
        )));
     }
     getReview=()=>{
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
                 <h2 className="text-center">Review and Rating</h2>
                 {this.displayReview(this.state.posts)}
                 
             </div>
         )
     }
 } 
 export default ReviewRating;