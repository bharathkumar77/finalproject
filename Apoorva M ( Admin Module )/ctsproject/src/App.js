import React from 'react';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import './App.css';

import ManageBook from './ManageBook';
import ManageOrder from './ManageOrder';
import NavBar from './NavBar';
import AddBook from './components/addBook';
import RemoveBook from './components/removeBook';
import AddCategory from './components/addCategory';
import RemoveCategory from './components/removeCategory';
import ReviewRating from './components/rating';
import UserMgnt from './components/userMgnt';
import AddAuthor from './components/addAuthor';
import RemoveAuthor from './components/removeAuthor';

function App() {
  return (
    <Router>
      <div>
        {/* <Login /> */}
        <NavBar />
        <Route path="/addBook" component={AddBook}/>
        <Route path="/removeBook" component={RemoveBook}/>
        <Route path="/addCategory" component={AddCategory}/>
        <Route path="/removeCategory" component={RemoveCategory}/>
        <Route path="/rating" component={ReviewRating}/>
        <Route path="/userMgnt" component={UserMgnt}/>
        <Route path="/addAuthor" component={AddAuthor}/>
        <Route path="/removeAuthor" component={RemoveAuthor}/>
        
      </div>
    </Router>
  );
}

export default App;