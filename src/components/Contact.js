import React from "react";
import "./Contact.css";
// import {faEnvelope} from 'font-awesome';

function Contact() {
return (
      <>
<section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          {/* <span>Contact Me</span> */}
          <h2>CONTACT ME</h2>
          {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
        </div>

        <div class="row">

          <div class="col-lg-6">

            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="bx bx-share-alt"></i>
                  <h3>Social Profiles</h3>
                  <div class="social-links">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                  <h3>Email Me</h3>
                  <p>sorathiyapooja33@gmail.com</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bx bx-phone-call"></i>
                  <h3>Call Me</h3>
                  <p>+91 82385 47859</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="6" placeholder="Message" required> </textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
      <div className="container">
        <div className="row">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29752.924978618674!2d72.87643422983417!3d21.227263204479996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f61ab9b35c7%3A0x7ccc9025485b7120!2sNana%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1694753958418!5m2!1sen!2sin" width="600" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
    </section>
    {/* <!-- End Contact Me Section --> */}

    </>
    );
    }
    export default Contact;