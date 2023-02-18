import React from "react";
import Button from "./Button";

function HomeMain(){
    return(<div id="home-main">
        <p>Greetings! My name is</p>
        <h2>Abhishek Jha.</h2>
        <h1>I create elegant websites.</h1>
        <h3>FULL-STACK WEB DEVELOPER.</h3>
        <div id="desc">Proficient web applications designer. I love to make scalable web apps with attractive and engaging front-end design and efficient backend servers using MERN stack. Passionate to make highly stable websites, add whatever I could, make use of my communication skills and analysation capabilities to help businesses and teams!</div>
        <Button 
            href="https://drive.google.com/file/d/1hnyXo6s6gC_Vq_4uGG_Pkhw6-NSkVaB-/view?usp=share_link"
            id="Resume"
        />
    </div>);
}
export default HomeMain;