import React, { useState } from 'react'
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";



const Navbar = () => {
  const [navOpen, setNavOpen] =useState(false);
const handleNavToggle = () => {
    setNavOpen(!navOpen);
};
const handleNavLinkClick = () => {
setNavOpen(false);
};
  return (
    <div className={classes.container}>
      <header>
      <div className={classes.logo}>
         <Link to="/">
          <img src={Logo} alt="Logo"/>
          </Link>
      </div>  
       <nav className={classes.navMenu}>
          <Link to="/" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>Home</li>
          </Link>
          <Link to="/courses" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>Courses</li>
          </Link>
          <Link to="/aboutus" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>About Us</li>
          </Link>
          <Link to="/contactus" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>Contact Us</li>
          </Link>
          <Link to="/register" className={classes.navLink} onClick= {handleNavLinkClick}>
            <button>Register</button>
          </Link>
       </nav>
       <div className={classes.hamburger} onClick= {handleNavToggle}>
                { navOpen ? (<RxHamburgerMenu className ={classes.Icons}/>
                ):(
                    <MdClose className={classes.Icons}/>
                )}
            </div>
            <div className={navOpen ? classes.active : classes.mobileMenu}>
            <nav className={classes.mobileNav}>
          <Link to="/" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>Home</li>
          </Link>
          <Link to="/courses" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>Courses</li>
          </Link>
          <Link to="/aboutus" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>About Us</li>
          </Link>
          <Link to="/contactus" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>Contact Us</li>
          </Link>
          <Link to="/register" className={classes.navLink} onClick= {handleNavLinkClick}>
            <button>Register</button>
          </Link>
       </nav>
       </div>
      </header>
    </div>
  )
}

export default Navbar
