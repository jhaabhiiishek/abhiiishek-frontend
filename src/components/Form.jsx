import React from "react";
import {useState} from "react";
import Button from "./Button";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event){
        event.preventDefault()
        if(name!==""||email!==""||subject!==""||message!==""){
            axios.post('https://abhiiishek-backend.vercel.app/formSubmit', {
                name: name,
                email:email,
                subject:subject,
                message:message
              });
            setName("");
            setEmail("");
            setMessage("");
            setSubject("");
        }
    }

    const diffToast = ()=>{
        if(name===""||email===""||subject===""||message===""){
            toast.error("Fill all fields",{
                position:"bottom-center"
            });
        }else{
            toast.success("Submitted Successfully!",{
                position:"bottom-center"
            });
        }
    }

    return(
        <div id="contact" className="fade-bottom ">
            <div id="contact-text">
                <h2>Need anything web?</h2>
                <p> I'm more than happy to help you out with anything web- related.</p>
                <p>I am just a click away.</p>
                <span id="contact-line"></span>
                <h4>Let me design your website!</h4>
                <div id="contact-details">
                    <p>Address: Ludhiana, India</p>
                    <p>Phone/Whatsapp: +91 8146689282</p>
                    <p>Email: abhi10092003@gmail.com</p>
                </div>
                <Button id="Mail" href="mailto:abhi10092003@gmail.com"/>
            </div>
            <div id="form">
                <form id="form-internal" onSubmit={handleSubmit}>
                    <h3 id="form-head">Contact Me!</h3>
                    <input className="input-text" type="text" min={3} max={50} size={16} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="input-text" type="text" min={8} max={30} size={16} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="input-text" type="text" min={1} max={30} size={16} placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />              
                    <textarea id="message" min={1} max={300} size={34} type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />                   
                    <input onClick={diffToast} type="submit" id="submit-form" placeholder="Submit"/>
                    <ToastContainer/>
                </form>
            </div>
        </div>
    );
}
export default Form;