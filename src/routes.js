import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import ManageProfile from './components/ManageProfile';

import Login from './components/Login';
import RegisterAnimal from './pages/RegisterAnimal';
import RegisterSupplies from './pages/RegisterSupplies';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/profile" component={ManageProfile} />

            <Route path="/register-animal" component={RegisterAnimal} />
            <Route path="/register-supplies" component={RegisterSupplies} />
        </BrowserRouter>
    );
}

export default Routes;