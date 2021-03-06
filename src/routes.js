import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import ManageProfile from './components/ManageProfile';

import RegisterAnimal from './pages/RegisterAnimal';

import Register from './components/Register'
import PagInicial from './components/PagInicial'

import RegisterSupplies from './pages/RegisterSupplies';
import ListSupplies from './pages/ListSupplies';
import UpdateSupplie from './pages/UpdateSupplie';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={PagInicial} />

            <Route path="/login" component={Login} />

            <Route path="/profile" component={ManageProfile} />
            
            <Route path="/register" component={Register} />
            
            <Route path="/register-animal" component={RegisterAnimal} />

            <Route path="/register-supplies" component={RegisterSupplies} />
            <Route path="/list-supplies" component={ListSupplies} />
            <Route path="/update-supplie/:id" component={UpdateSupplie} />
        </BrowserRouter>
    );
}