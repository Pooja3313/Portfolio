
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <h3>Pooja Sorathiya</h3>
          <p>Find out what you like doing best, and get someone to pay you for doing it</p>
          <div class="social-links">
            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
          
          <div class="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/ --> */}
            Designed by <b><a href="/">Pooja Sorathiya </a></b> 
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;