import React, { useState } from 'react';
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "98d094d9-11e9-4b8c-9d3d-b7a58de8463f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
          <h3>Send us a message <img src={ msg_icon}></img> </h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions
          are important to us we strive to provide exceptional service to our university community</p>
          <ul>
            <li> <img src={ mail_icon}></img> shreya20211@gmail.com</li>
            <li> <img src={phone_icon}></img> +91 123456</li>
            <li> <img src={location_icon}></img> Phoolbagan, Kolkata <br/> West Bengal, India </li>
          </ul>
        </div>
    
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required></input>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required></input>
            {/* <label>Your Email</label>
            <input type="email" name="email" placeholder='Enter your email id'></input> */}
            <label>Write your message here</label>
            <textarea name="message" id="" cols="30" rows="6" placeholder="Enter your message" required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}></img></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact