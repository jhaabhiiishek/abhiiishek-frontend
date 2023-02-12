import React from "react";

function Nav(event){

    return(
    <a href={event.call} id="nav-buttons">
    {event.element}
    </a>);
}
export default Nav;