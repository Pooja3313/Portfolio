
import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram,faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>Pooja Sorathiya</h3>
          <p>Find out what you like doing best, and get someone to pay you for doing it</p>
          <div className="social-links">
            {/* <NavLink to="#" className="twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} /></NavLink> */}
            <NavLink to="https://github.com/Pooja3313" target="_blank" className="github"><FontAwesomeIcon icon={faGithub} /></NavLink>
            <NavLink to="https://instagram.com/sorathiya_puja?igshid=NGExMmI2YTkyZg==" className="instagram" target="_blank"><FontAwesomeIcon icon={faInstagram} /></NavLink>
            <NavLink to="https://www.linkedin.com/in/pooja-sorathiya-11808023b" className="linkedin" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></NavLink>
          </div>
          
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/ --> */}
            Designed by <b><NavLink to="/">Pooja Sorathiya </NavLink></b> 
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;