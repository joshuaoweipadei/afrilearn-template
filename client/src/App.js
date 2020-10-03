import React from 'react'
import { Router, Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { history } from './_helpers'

import PrivateRoute from './components/PrivateRoute'

import HomePage from './views/Account/HomePage'
import Register from './views/Account/Register'
import Login from './views/Account/Login'
import Profile from './views/Profile'

import "../node_modules/font-awesome/scss/font-awesome.scss"
import "./styles/style.scss"

function App() {
    const { pathname } = useLocation(); 

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/account" component={Profile} />
                    <Redirect from="/" to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
