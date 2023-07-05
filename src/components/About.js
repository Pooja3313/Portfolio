import React from "react";
import "./About.css";

function About() {
return (
      <>
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          {/* <span>About Me</span> */}
          <h2>ABOUT ME</h2>
          <p>I'm Pooja Sorathiya, Pursuing B.Tech in Computer Engineering From Birla Vishvakarma Mahavidyalay. My short term goal is to place in Good IT Company & Long term goal is to achieve award for best Employee of IT Company.</p>
        </div>

        <div class="row">
          <div class="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div class="col-lg-8 d-flex flex-column align-items-stretch">
            <div class="content ps-lg-4 d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Pooja Sorathiya</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sorathiyapooja33@gmail.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 82385 47859</span></li>
                    {/* <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Surat</span></li> */}
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.tech</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Descipline:</strong> <span>Computer Engineering</span></li>
                    {/* <li><i class="bi bi-chevron-right"></i> <strong> :</strong> <span>Available</span></li> */}
                  </ul>
                </div>
              </div>
              {/* <div class="row mt-n4">
                <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-emoji-smile" style={{'color': '#20b38e'}}></i>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-journal-richtextr" style={{'color': '#8a1ac2'}}></i>
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-clock" style={{'color': '#2cbdee'}}></i>
                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter"></span>
                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

                <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-award" style={{'color': '#ffb459'}}></i>
                    <span data-purecounter-start="0" data-purecounter-end="16" data-purecounter-duration="1" class="purecounter"></span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
            {/* <!-- End .content--> */}
           
            <div class="skills-content ps-lg-4">
            <h1>Skills</h1>
            <div class="progress">
                <span class="skill">C++ <i class="val">75%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" style={{width:'75%'}} aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">Java <i class="val">80%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" style={{width:'80%'}} aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">c# .NET <i class="val">80%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"style={{width:'80%'}} aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">python <i class="val">85%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" style={{width:'85%'}} aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">Django <i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" style={{width:'90%'}} aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">HTML <i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" style={{width:'90%'}} aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">CSS <i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"style={{width:'90%'}} aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">JavaScript <i class="val">70%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75"  style={{width:'70%'}} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
              <div class="progress">
                <span class="skill">React JS <i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" style={{width:'90%'}} aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">Node JS <i class="val">85%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" style={{width:'85%'}}  aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">Mongodb <i class="val">80%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" style={{width:'80%'}} aria-valuemax="100"></div>
                </div>
              </div>
              
            </div>

          </div>
        </div>

      </div>
    </section>


			
</>
);
}
export default About;
