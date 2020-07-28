import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import JobList from './JobList';
import CompanyList from './CompanyList';
import Company from './Company';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';

function Routes({doAuthenticate, undoAuthenticate}) {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
                <Route exact path="/jobs">
                <JobList />
            </Route>
            <Route exact path="/companies">
                <CompanyList />
            </Route>
            <Route path="/companies/:handle">
                <Company cantFind="/companies" />
            </Route>
            <Route path="/login">
                <Login doAuthenticate={doAuthenticate}/>
            </Route>
            <Route path="/logout">
                <Logout undoAuthenticate={undoAuthenticate}/>
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route>
                <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
        </Switch>
    )
}

export default Routes;