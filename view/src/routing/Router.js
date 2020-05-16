import React from 'react';
import Home from '../components/Home';
import UserRegistration from '../components/UserRegistration';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={UserRegistration} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default RouterComponent;