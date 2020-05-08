


import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './style.css';

class NavBar extends Component {
    
render() {  
    const navStyle = {
        color: 'white',
        fontSize: '18px'
    }
  return (
    <div>
    <nav className="navbar navbar-dark bg-dark">
      <form className="form-inline">
          <a className="nav-item nav-link active text-white" href="#">Home <span className="sr-only"></span></a>
          
      </form>
      <form className="form-inline">
      <a className="nav-item nav-link text-white" href="/">Admin</a>
      <a className="nav-item nav-link text-white" href="#">Register</a>
      <a className="nav-item nav-link text-white" href="/list">Login</a>              
      </form>
  </nav>
    <div className="row p-4">
    <div className="col-3  border-secondary">
        <ul className="list-group ">
            <li className="list-group-item">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle float-sm-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Category Management  
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/addCategory">Add</a>
                        <a className="dropdown-item" href="removeCategory">Remove</a>
                        
                    </div>
                </div>
            </li>
            <li className="list-group-item">
            <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle float-sm-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Product Management  
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/addBook">Add</a>
                        <a className="dropdown-item" href="/removeBook">Remove</a>
                        
                    </div>
                </div>
            </li>
            <li className="list-group-item">
            <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle float-sm-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         User Management  
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/userMgnt">Display</a>
                       
                    </div>
                </div>
            </li>
            
            <li className="list-group-item">
                <Link to="/rating" className="p-2 mb-2 bg-secondary text-white float-sm-left rounded" style={navStyle}>
                        <p>Review and Rating</p>
                    </Link>
            </li>
            <li className="list-group-item">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle float-sm-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Author details update  
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/addAuthor">Add</a>
                        <a className="dropdown-item" href="/removeAuthor">Remove</a>
                        
                    </div>
                </div>            </li>
            
        </ul>
    </div>
    <div className="col-9">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../images/welcome.jpg" class="d-block w-100" alt="image"/>
    </div>
    
    
  </div>
  
</div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-5">Welcome to Admin Dasboard</h1>
            </div>
        </div>
    </div>
  </div>
  </div>  
    
  );
 }
}

export default NavBar;