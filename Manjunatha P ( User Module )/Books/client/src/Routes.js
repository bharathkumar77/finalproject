import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Dashboard from './user/UserDashboard';
import Cart from './user/Cart';
import Profile from './user/Profile';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/user/dashboard" exact component={Dashboard} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/profile/:userId" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
