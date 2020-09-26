import React from 'react';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}

export default Routes;