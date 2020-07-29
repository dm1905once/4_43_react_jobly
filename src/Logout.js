import React from "react";
import { Redirect } from "react-router-dom";
import UserContext from "./UserContext";


function Logout() {
    const {undoAuth} = React.useContext(UserContext);
    localStorage.removeItem("_token");
    undoAuth();
    return (<Redirect to="/"/> );
}

export default Logout;
