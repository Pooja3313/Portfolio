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
      const navbar = select('#navbar');
    
      if (clickedElement.matches('.mobile-nav-toggle')) {
        navbar.classList.toggle('navbar-mobile');
        clickedElement.classList.toggle('bi-list');
        clickedElement.classList.toggle('bi-x');
      }
    
      if (clickedElement.matches('.navbar a')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      if (clickedElement.matches('.navbar .dropdown > .abc')) {
        const navbar = select('#navbar');

        if (navbar.classList.contains('navbar-mobile')) {
          e.preventDefault();
          clickedElement.nextElementSibling.classList.toggle('dropdown-active');
        }
      }

      if (clickedElement.matches('.scrollto')) {
        const targetHash = clickedElement.getAttribute('to');

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

<header class="container">
        <div class="page-header">
            <div class="logo">
                <a to="#">Logo.</a>
            </div>
            <input type="checkbox" id="click"/>

            <label for="click" class="mainicon">
                <div class="menu">
                    <i class='bx bx-menu'></i>
                </div>
            </label>
            <ul>
      <li>
        <NavLink to="/Home" activeClassName="active" style={{ '--navAni': 1 }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/About" style={{ '--navAni': 2 }}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/Resume" style={{ '--navAni': 3 }}>
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink to="/Contact" style={{ '--navAni': 4 }}>
          Contact
        </NavLink>
      </li>
    </ul>
        </div>
    </header>


	</>
	);
}
export default Navbar;