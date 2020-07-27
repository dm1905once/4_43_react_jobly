import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from './Home';
import JobList from './JobList';
import CompanyList from './CompanyList';
import Company from './Company';
import Login from './Login';
import Profile from './Profile';

function Routes() {
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
                <Login />
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