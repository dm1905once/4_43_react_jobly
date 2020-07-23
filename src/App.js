import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import JobList from './JobList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
             <Route exact path="/jobs">
              <JobList />
            </Route>
            <Route exact path="/companies">
              {/* <CompanyList /> */}
            </Route>
            {/* <Route path="/companies/:id">
              <Item cantFind="/companies" />
            </Route> */}
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
