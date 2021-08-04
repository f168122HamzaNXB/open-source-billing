import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from '../authenticate/login';
import Dashboard from '../Dashboard/dashboard';

function AppRoute() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/dashboard" component={Dashboard}></Route>
            </Switch>
        </Router>
    );
}

export default AppRoute;
