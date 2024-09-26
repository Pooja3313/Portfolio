import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram,faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
function Home(){
return (
<>
<section class="container">
        <div class="main">
            <div class="rounding-sec">
                <div class="big-circle">
              
                </div>
                <div class="images">
                    <img src={require("./images/pp.jpg")} alt="" class="img-w"/>
                </div>
            </div>
            <div class="detail">
                <h3>Hi, I'm</h3>
                <h1><span style={{ color: "#f9532d" }}>Pooja</span> Sorathiya</h1>
                <p>I'm a Web Developer.My area Of interest Frontend Developer, the technology which I prefer to use Frontend Development HTML, CSS,JAVASCRIPT,BOOTSTRAP,REACT JS.  </p>
          <div className="resume">

          <NavLink to="https://your-resume-link.com" target="_blank" rel="noopener noreferrer">
              View Resume
            </NavLink> 
          </div>

           
            <div className="social-links">
            {/* <NavLink to="#" className="twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} /></NavLink> */}
            <NavLink to="https://github.com/Pooja3313" target="_blank" className="github"><FontAwesomeIcon icon={faGithub} /></NavLink>
            <NavLink to="https://instagram.com/sorathiya_puja?igshid=NGExMmI2YTkyZg==" className="instagram" target="_blank"><FontAwesomeIcon icon={faInstagram} /></NavLink>
            <NavLink to="https://www.linkedin.com/in/pooja-sorathiya-11808023b" className="linkedin" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></NavLink>
          </div>
            </div>
        </div>
    </section>

  
</>
);
}
export default Home;
