import React from "react";
import "./Navbar.css";


function Navbar() {
	return(
<>
 {/* <!-- ======= Header ======= --> */}
 <header id="header" class="fixed-top d-flex justify-content-center align-items-center header-transparent">

<nav id="navbar" class="navbar">
  <ul>
    <li><a class="nav-link scrollto " href="/Home">Home</a></li>
    <li><a class="nav-link scrollto" href="/About">About</a></li>
    <li><a class="nav-link scrollto" href="/Resume">Resume</a></li>
   <li><a class="nav-link scrollto" href="/Contact">Contact</a></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
</nav>

</header>

	</>
	);
}
export default Navbar;