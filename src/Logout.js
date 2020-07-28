import React from "react";
import { Redirect } from "react-router-dom";


function Logout({undoAuthenticate}) {
    localStorage.removeItem("_token");
    undoAuthenticate();
    return (<Redirect to="/"/> );
}

export default Logout;
