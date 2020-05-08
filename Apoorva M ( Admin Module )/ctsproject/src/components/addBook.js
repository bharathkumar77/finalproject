import React, { Component } from "react";
import axios from 'axios';
 class AddBook extends Component{
     state={
        BookTitle: '',
        AuthorName: '',
        Category: '',
        Price: '',
        
        errors: {}
     };
     handleChange=({target})=>{
        const {name,value}=target;
        this.setState({
            [name]:value
        });
     }
     submit=(event)=>{
         event.preventDefault();
         const payload={
            BookTitle: this.state.BookTitle,
            AuthorName: this.state.AuthorName,
            Category: this.state.Category,
            Price: this.state.Price,
            
         };
         axios({
             url:'/api/save',
             method:'POST',
             data:payload
         })
         .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            alert("New Book Details added successfuly!! ");
         })
         .catch(() => {
            console.log('Oops something went wrong');
         })
     }
     resetUserInputs=()=>{
         this.setState({
            BookTitle: '',
            AuthorName: '',
            Category: '',
            Price: '',
            
         });
     };
render(){
    console.log('sate',this.state);
    return(
        <div className="row">
          
        <div className="container col-6 p-5">
        
              <h3 className="text-info text-center">Add A New Book</h3>
              
              <form noValidate className="w-100 mx-auto mt-4 pt-0 border border-secondary bg-light p-3" onSubmit={this.submit}>
              <h1 className="h3 mb-3 font-weight-normal"></h1>
              <div className="form-group">
                <label htmlFor="name">BookTitle</label>
                <input
                  type="text"
                  className="form-control"
                  name="BookTitle"
                  placeholder="Enter Book Title"
                  value={this.state.BookTitle}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Author Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="AuthorName"
                  placeholder="Enter  Author Name"
                  value={this.state.AuthorName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="Category"
                  placeholder="Enter Category"
                  value={this.state.Category}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="Price"
                  placeholder="Price"
                  value={this.state.Price}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-secondary btn-block"
              >
                Add
              </button>
            </form>
          </div>
         
        </div>
          
        
     
      
    )
  }
}
export default AddBook;