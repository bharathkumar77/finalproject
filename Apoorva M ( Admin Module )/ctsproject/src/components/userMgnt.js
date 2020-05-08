import React, { Component } from "react";
import axios from 'axios';
//import { response } from 'express';
 class UserMgnt extends Component{
     state={
        Username: '',
        Password: '',
        ContactNo: '',
        Address:'',
        Email:'',
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
                <td>Username</td>
                <td>{post.Username}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>{post.Password}</td>
              </tr>
              <tr>
                <td>ContactNo</td>
                <td>{post.ContactNo}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{post.Address}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{post.Email}</td>
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
        
     }
     render(){
         return(
             <div>
                 <h2 className="text-center">User Management</h2>
                 {this.displayReview(this.state.posts)}
                 
             </div>
         )
     }
 } 
 export default UserMgnt;