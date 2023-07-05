import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "../js/main"
import { useEffect } from "react";
import "jquery-ui-dist/jquery-ui";
import $ from "jquery";
var scrollto = require('scroll-to');


function Navbar() {

  // $(document).on('click', '.mobile-nav-toggle', function(e) {
  //   $('#navbar').toggleClass('navbar-mobile');
  //   $(this).toggleClass('bi-list bi-x');
  // });
  

  /**
   * Mobile nav dropdowns activate
   */
  // $(document).on('click', '.navbar .dropdown > a', function(e) {
  //   if ($('#navbar').hasClass('navbar-mobile')) {
  //     e.preventDefault();
  //     $(this).next().toggleClass('dropdown-active');
  //   }
  // });
  
  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  // $(document).on('click', '.scrollto', function(e) {
  //   if ($(this.hash).length) {
  //     e.preventDefault();
  
  //     let navbar = $('#navbar');
  //     if (navbar.hasClass('navbar-mobile')) {
  //       navbar.removeClass('navbar-mobile');
  //       let navbarToggle = $('.mobile-nav-toggle');
  //       navbarToggle.toggleClass('bi-list bi-x');
  //     }
  //     scrollto(this.hash);
  //   }
  // });
  
	return(
<>
 {/* <!-- ======= Header ======= --> */}
 <header id="header" class="fixed-top d-flex justify-content-center align-items-center header-transparent">

<nav id="navbar" class="navbar">
  <ul>
    <li><NavLink class="nav-link scrollto " to="/Home">Home</NavLink></li>
    <li><NavLink class="nav-link scrollto" to="/About">About</NavLink></li>
    <li><NavLink class="nav-link scrollto" to="/Resume">Resume</NavLink></li>
   <li><NavLink class="nav-link scrollto" to="/Contact">Contact</NavLink></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
</nav>

</header>

	</>
	);
}
export default Navbar;