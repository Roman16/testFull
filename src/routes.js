import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import App from './pages/index';

const Authentication = () => (
    <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={App}/>
    </Switch>
);

const Navigation = () => (
    <Switch>
        <Route exact path='/home' component={ Home }/>
        <Route exact path='/users' component={ Users }/>
        <Route exact path="/" render={() => (
            <Redirect to="/login"/>
        )}/>
    </Switch>
);

export {
    Authentication,
    Navigation
};