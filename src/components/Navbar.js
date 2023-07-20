import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";


const select = (el, all = false) => {
  el = el.trim();

  if (el.startsWith('/')) {
    el = el.substring(1); 
  }

  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};
function Navbar() {

  useEffect(() => {
  
    const handleClick = (e) => {
      const clickedElement = e.target;

      if (clickedElement.matches('.mobile-nav-toggle')) {
        const navbar = select('#navbar');
        navbar.classList.toggle('navbar-mobile');
        clickedElement.classList.toggle('bi-list');
        clickedElement.classList.toggle('bi-x');
      }

      if (clickedElement.matches('.navbar .dropdown > .abc')) {
        const navbar = select('#navbar');

        if (navbar.classList.contains('navbar-mobile')) {
          e.preventDefault();
          clickedElement.nextElementSibling.classList.toggle('dropdown-active');
        }
      }

      if (clickedElement.matches('.scrollto')) {
        const targetHash = clickedElement.getAttribute('href');

        if (targetHash && select(targetHash)) {
          e.preventDefault();

          let navbar = select('#navbar');

          if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');
            let navbarToggle = select('.mobile-nav-toggle');
            navbarToggle.classList.toggle('bi-list');
            navbarToggle.classList.toggle('bi-x');
          }

          scrollto(targetHash);
        }
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };


  }, []);

  const scrollto = (hash) => {
    let header = select('#header');
    let offset = header.offsetHeight;
  
    let cleanedHash = hash.replace('/', ''); // Remove the leading forward slash
    let element = select(cleanedHash);
  
    if (element) {
      let elementPos = element.offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth',
      });
    }
  };
  
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