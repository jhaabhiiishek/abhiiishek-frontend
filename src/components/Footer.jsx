import React from "react";

function Footer(){
    return(
        <div id="footer">
            <div id="foot-social">
                <a className="foot-social-img" href="https://www.facebook.com/people/Abhishek-Jha/100080292255495/">
                    <img className="social-icons" src={process.env.PUBLIC_URL+"/images/facebook.png"} alt="fb"/>
                </a>
                <a className="foot-social-img" href="https://github.com/jhaabhiiishek/">
                    <img className="social-icons" src={process.env.PUBLIC_URL+"/images/github.png"} alt="git"/>
                </a>
                <a className="foot-social-img" href="https://www.instagram.com/abhiiishek_jha/">
                    <img className="social-icons" src={process.env.PUBLIC_URL+"/images/instagram.png"} alt="ig"/>
                </a>
                <a className="foot-social-img" href="https://www.linkedin.com/in/abhishek-jha-138120224/">
                    <img className="social-icons" src={process.env.PUBLIC_URL+"/images/linkedin.png"} alt="linkedin"/>
                </a>
                <a className="foot-social-img" href="https://twitter.com/abhiiishek_jha">
                    <img className="social-icons" src={process.env.PUBLIC_URL+"/images/twitter.png"} alt="twitter"/>
                </a>
            </div>
            <p>© Abhishek Kumar Jha 2022</p>
        </div>
    )
}

export default Footer;