import React from "react";

function Button(event){
    return(
        <a href={event.href} id="resume">{event.id}</a>
    )
}
export default Button;