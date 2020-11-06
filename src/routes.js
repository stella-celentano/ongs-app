import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            {/* <Route path="/study" component={TeacherList} /> */}
        </BrowserRouter>
    );
}

export default Routes;