import React from 'react';
import classes from "./Application.module.css";

const Application = () => {
  return (
    <div className={classes.container}>
    <div className={classes.hero}>
     <h3>COURSE REGISTRATION</h3>
    </div>
    <form className={classes.register}>
       <h3>Welcome to NIIT ABEOKUTA</h3>
       <label for="full_Name" >Full Name</label><br/>
       <input type="first_Name" id="full_Name" name="full_Name" placeholder='Please enter your full name' required/><br/>

       <label for="Email" >Email</label><br/>
       <input type="email" id="email" name="email" placeholder='Please enter your email address' required/><br/>

       <label for="phone_Number" >Phone Number</label><br/>
       <input type="phone" id="phone" name="phone"  required/><br/>

       <label for="address" >Location</label><br/>
       <input type="address" id="address" name="address" placeholder='Please enter your house address' required/><br/>

       <label for="gender" >Gender</label><br/>
       <input type="text" id="gender" name="gender" placeholder='Please select your Gender' required/><br/>

       <label for="course" >Course to Study</label><br/>
       <input type="text" id="course" name="course" placeholder='Please select your Course to Study' required/><br/>

       <label for="attendance" >Mode of Attendance</label><br/>
       <input type="text" id="attendance" name="attendance" placeholder='Please select your prefered Mode' required/><br/>
       
       <div className={classes.submit}>
           <button>SUBMIT</button>
       </div>
    </form>
 </div>
  )
}

export default Application
