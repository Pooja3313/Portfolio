import React from "react";
 import "./Resume.css";
function Resume() {
return (
<>
{/* <!-- ======= My Resume Section ======= --> */}
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          {/* <span>My Resume</span> */}
          <h2>MY RESUME</h2>
          <p></p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            {/* <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Alice Barkley</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
              </p>
            </div> */}

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>B.tech In Computer Engineering </h4>
              <p>BIRLA VISHWAKARMA MAHAVIDYALAYA</p>
              <h5>2021-2024</h5> 
            </div>
            <div class="resume-item">
              <h4>Diploma in Information Technology </h4>
              <p>THE MAHARAJA SAYAJIRAO UNIVERSITY OF BARODA</p>
              <h5>2018-2021</h5>
            </div>
            <div class="resume-item">
              <h4>SSC Standard</h4> 
              <p>SHREE SWAMINARAYAN VIDYALAYA,GURUKUL,SAVARKUNDLA,AMRELI.</p>
              <h5>March-2017</h5>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Summer Intern</h4>
              <h6><b>React JS</b></h6>
              <p>TATVASOFT SOFTWARE COMPANY,AHMEDABAD.</p>
              <h5>6 June,2023 - Current</h5>
            </div>
            <div class="resume-item">
              <h4>Summer Intern</h4>
              <h6><b>Python With Django</b></h6>
              <p>BRAINYBEAM TECHNOLOGIES,PVT. LTD. ,AHMEDABAD.</p>
              <h5>15 June,2022 - 7 July,2022</h5>
            </div>
          
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End My Resume Section --> */}

</>
);
}
export default Resume;