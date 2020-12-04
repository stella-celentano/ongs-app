import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import ManageProfile from './components/ManageProfile';

import RegisterAnimal from './pages/RegisterAnimal';

import Register from './components/Register'
import Menu from './components/Menu'

import RegisterSupplies from './pages/RegisterSupplies';
import ListSupplies from './pages/ListSupplies';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/profile" component={ManageProfile} />
            <Route path="/menu" component={Menu} />
            <Route path="/register" component={Register} />
            <Route path="/register-animal" component={RegisterAnimal} />
            <Route path="/register-supplies" component={RegisterSupplies} />
            <Route path="/list-supplies" component={ListSupplies} />
        </BrowserRouter>
    );
}