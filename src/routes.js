import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import ManageProfile from './components/ManageProfile';


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/profile" component={ManageProfile} />
        </BrowserRouter>
    );
}

export default Routes;