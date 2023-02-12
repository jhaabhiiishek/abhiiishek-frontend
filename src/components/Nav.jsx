import React,{useState}  from "react";
import Navelem from "./Navelem";

function Nav(){

    const [isShown, setIsShown] = useState(false);
    const handleClick = () => {
        setIsShown(!isShown);
    };
    return(
    <div id="nav">
        <a href="#vertical-line" id="nav-brand">Abhishek</a>
        <div id="nav-btn">
            <Navelem call="#about-total" element="About Me" />
            <Navelem call="#skill-four" element="Skills" />
            <Navelem call="#contact" element="Contact" />
        </div>
        <div id="icon-div">
            <div>
                <div onClick={handleClick}><img id="nav-img" src={process.env.PUBLIC_URL+"/images/navicon.png"} alt="navbar" /></div> 
                {isShown && <div id="nav-drawer">
                    <Navelem call="#about-total" element="About Me"/>
                    <Navelem call="#skill-four" element="Skills"/>
                    <Navelem call="#contact" element="Contact"/>
                </div>}
                
            </div>
        </div>
    </div>);
}
export default Nav;