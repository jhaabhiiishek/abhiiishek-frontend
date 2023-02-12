import React from "react";

function Skills(event){
    return(
        <div id="skill-two">
            <img id="skill-one" src={process.env.PUBLIC_URL+"/images/"+event.skillname+".png"} alt={event.skillname}/>
        </div>
    );
}
export default Skills;