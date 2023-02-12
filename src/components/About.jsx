import React from "react";
import Head from "./Head";
import Skills from "./Skills";

function About(){
    return(
    <div id="about-total">
        <div id="about"> 
            <Head name="About Me"/>
            <p>I am Abhishek, 19 year old full stack developer, focused on making websites for anyone and everyone! I've been making projects in Javascript, HTML & CSS, MongoDB as the database, Express and Node used in the backend and ReactJS framework for the frontend.</p>
            <p>I am also familiar with various other utility libraries and techniques such as ejs, API consumption, pug, bootstrap, Jquery, socket, etc. I am a Full Stack (MERN) developer aiming to create interesting projects.</p>
            <p>I have also made functional projects in these fields: </p>
            <ul>
                <li>- Game Development using Unity 3d</li>
                <li>- Database Management System</li>
                <li>- Android Apps Development in Java</li>
                <li>- Data Science and Data Visualisation in R</li>
            </ul>
        </div>
        <div id="skill-four">
            <h2 id="skill-head">Skills</h2>
            <div className="skill-three">
                <Skills skillname="html"/>
                <Skills skillname="css"/>
                <Skills skillname="javascript"/>
            </div>
            <div className="skill-three">
                <Skills skillname="bootstrap"/>
                <Skills skillname="express"/>
                <Skills skillname="nodejs"/>
            </div>
            <div className="skill-three">
                <Skills skillname="reactjs"/>
                <Skills skillname="mongodb"/>
            </div>
        </div>
    </div>);
}
export default About;