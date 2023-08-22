import { useState } from "react"
import emailjs from '@emailjs/browser';


export const EmailForm = (selectedParts) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const createMessage = () => {
        const message = [];
        selectedParts.selectedParts.map((part) => (
            message.push(part.partName + " " + part.count + "\n")
        ))
        console.log(message);
        return message;
    }


    const sendEmail = () => {
        const serviceID = "service_lh8yepw";
        const templateID = "template_05ez5e3";
        const props = {
            email: email,
            name: name,
            message: createMessage(),
        }
        emailjs.send(serviceID,templateID,props)
        .then(
            alert("Email sent successfully!!")
        )
        .catch((err) => console.log(err));
    }

    (function(){
        emailjs.init("ejlOnc03qO1AQW365");
     })();

    return (
        <div>
            <form onSubmit={sendEmail}>
                <input type="text" onChange={handleNameChange} placeholder="Enter your name" required/>
                <input type="email" onChange={handleEmailChange} placeholder="Enter your email" required/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}