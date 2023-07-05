import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
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