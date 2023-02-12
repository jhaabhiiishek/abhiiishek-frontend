import React from "react";

function Social(){
    return(<div id="social">
        <span id="vertical-line"></span>
        <span className="horizontal-line"></span>
        <a className="img-btns" href="https://www.facebook.com/people/Abhishek-Jha/100080292255495/">
            <img className="social-icons" src={process.env.PUBLIC_URL+"/images/facebook.png"} alt="fb"/>
        </a>
        <a className="img-btns" href="https://github.com/jhaabhiiishek/">
            <img className="social-icons" src={process.env.PUBLIC_URL+"/images/github.png"} alt="git"/>
        </a>
        <a className="img-btns" href="https://www.instagram.com/abhiiishek_jha/">
            <img className="social-icons" src={process.env.PUBLIC_URL+"/images/instagram.png"} alt="ig"/>
        </a>
        <a className="img-btns" href="https://www.linkedin.com/in/abhishek-jha-138120224/">
            <img className="social-icons" src={process.env.PUBLIC_URL+"/images/linkedin.png"} alt="linkedin"/>
        </a>
        <a className="img-btns" href="https://twitter.com/abhiiishek_jha">
            <img className="social-icons" src={process.env.PUBLIC_URL+"/images/twitter.png"} alt="twitter"/>
        </a>
        <span className="horizontal-line"></span>
    </div>);
}
export default Social;