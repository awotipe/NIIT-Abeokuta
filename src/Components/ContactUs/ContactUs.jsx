import React,  {useRef, useState} from 'react';
import classes from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";
import Facebook from "../../Assests/facebook.png";
import Instagram from "../../Assests/instagram.png";
import Twitter from "../../Assests/twitter.png";
import Youtube from "../../Assests/youtube.png";
import Linkedin from "../../Assests/linkedin.png";
// import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";

const Result = () => {
  return <p>Your application has been submitted successfully.</p>;
};

const ContactUs = () => {
  const [result, showResult] = useState(false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5s4trng",
        "template_92n55td",
        form.current,
        "1woq1KBTuIFDNqDRe"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(
            "Your application has been submitted successfully."
          );
        },
        (error) => {
          console.log(error.text);
          console.log("Message not sent");
        }
      );

    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className={classes.container}>
    <div className={classes.hero}>
     <h3>CONTACT US</h3>
    </div>
    <div className={classes.innerContainer}>
    <div className={classes.contactSide}>
            <p>
              NIIT Office, Suite B107/108 MKO Abiola Way, Providence Event
              Center, by NNPC, Leme Abeokuta.Ogun state, Abeokuta, Nigeria
            </p>
            <p>
              <TiLocation /> Suite B107/108 MKO Abiola Way, Abeokuta, Nigeria
            </p>
            <p>
              <IoCall /> 08094355000, 08094355003
            </p>
            <p>niitabeokuta@gmail.com</p>
            <div className={classes.socials}>
              <div className={classes.media}>
                <img src={Facebook} alt="Facebook" />
              </div>
              <div className={classes.media}>
                <img src={Instagram} alt="Instagram" />
              </div>
              <div className={classes.media}>
                <img src={Twitter} alt="Twitter" />
              </div>
              <div classname={classes.media}>
                <img src={Youtube} alt="Youtube" />
              </div>
              <div className={classes.media}>
                <img src={Linkedin} alt="Linkedin" />
              </div>
            </div>
          </div>
    <form ref={form} onSubmit={sendEmail} className={classes.register}>
       <h3>Get In Touch With Us</h3>
       <p>We would love to hear from you</p>
       <label for="full_Name" >Full Name</label><br/>
       <input type="name" id="full_Name" name="full_Name" placeholder='Please enter your full name' required/><br/>

       <label for="Email" >Email</label><br/>
       <input type="email" id="email" name="email" placeholder='Please enter your email address' required/><br/>

       <label for="phone_Number" >Phone Number</label><br/>
       <input type="phone" id="phone" name="phone"  placeholder='+234 80 xxx xxx xx' required/><br/>

       <label for="address" >Location</label><br/>
       <input type="address" id="address" name="address" placeholder='Please enter your house address' required/><br />
       
       <div className={classes.submit}>
           <button>SUBMIT</button>
       </div>
       <div className={classes.myRow}>{result ? <Result /> : null} </div>
    </form>
    </div>
 </div>
  )
}

export default ContactUs
