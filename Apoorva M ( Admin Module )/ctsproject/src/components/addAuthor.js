import React, { Component } from "react";
import axios from 'axios';
 class AddAuthor extends Component{
     state={
        Name: '',
        Address: '',
        ContactNo: '',
        Email: '',
        
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
            Name: this.state.Name,
            Address: this.state.Address,
            ContactNo: this.state.ContactNo,
            Email: this.state.Email,
            
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
            Name: '',
            Address: '',
            ContactNo: '',
            Email: '',
            
         });
     };
render(){
    console.log('sate',this.state);
    return(
        <div className="row">
          
        <div className="container col-6 p-5">
        
              <h3 className="text-info text-center">Add Author details</h3>
              
              <form noValidate className="w-100 mx-auto mt-4 pt-0 border border-secondary bg-light p-3" onSubmit={this.submit}>
              <h1 className="h3 mb-3 font-weight-normal"></h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Enter Author name"
                  value={this.state.Name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="Address"
                  placeholder="Enter  Address"
                  value={this.state.Address}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">ContactNo</label>
                <input
                  type="text"
                  className="form-control"
                  name="ContactNo"
                  placeholder="Enter ContactNo"
                  value={this.state.ContactNo}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  placeholder="Email"
                  value={this.state.Email}
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
export default AddAuthor;