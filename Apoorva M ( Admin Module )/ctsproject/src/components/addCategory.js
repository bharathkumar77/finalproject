import React, { Component } from "react";
import axios from 'axios';
 class AddCategory extends Component{
     state={
        Name: '',
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
           
         };
         axios({
             url:'/api/save',
             method:'POST',
             data:payload
         })
         .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            alert("New Category added successfuly!! ");
         })
         .catch(() => {
            console.log('Oops something went wrong');
         })
     }
     resetUserInputs=()=>{
         this.setState({
            Name: '',
          
            
         });
     };
render(){
    console.log('sate',this.state);
    return(
        <div className="row">
          
        <div className="container col-6 p-5">
        
              <h3 className="text-info text-center">Add new Category</h3>
              
              <form noValidate className="w-100 mx-auto mt-4 pt-0 border border-secondary p-3" onSubmit={this.submit}>
              <h1 className="h3 mb-3 font-weight-normal"></h1>
              <div className="form-group">
                <label htmlFor="name">Category name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Enter Book Title"
                  value={this.state.Name}
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
export default AddCategory;