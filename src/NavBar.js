import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({isAuthenticated}) {
  
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">Jobly</NavLink>
        <Nav className="ml-auto" navbar>
          {(isAuthenticated)? 
          <>
              <NavItem>
                <NavLink to="/logout">Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/companies">Companies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/jobs">Jobs</NavLink>
              </NavItem>
            </>
            :
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
          }
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
