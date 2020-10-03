import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import DashboardNavbar from '../../components/DashboardNavbar'
import UserDashboard from './UserDashboard'

function Profile({ match }) {
    const { path } = match;
    
    return (
        <div>
            <DashboardNavbar/>
            <Switch>
                <Route exact path={path} component={UserDashboard} />
                <Redirect from="/" to={path} />
            </Switch>
        </div>
    )
}

export default Profile;