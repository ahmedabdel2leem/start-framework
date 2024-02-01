import React from "react";
import  './navbar.css'
import { NavLink,Link } from "react-router-dom";
export default function Navbar(props) {
 

  return (
    <>
    <nav className="navbar navbar-expand-lg  fixed-top py-4 ">
  <div className="container">
    <NavLink  className="navbar-brand fs-2 fw-bolder text-white" to="/">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item  me-3 ">
          <NavLink  className="nav-link  px-2 rounded-3 text-white fw-bold " to="#/about">ABOUT</NavLink>
        </li>
        <li className="nav-item  me-3 ">
          <NavLink  className="nav-link px-2  rounded-3 text-white text-white fw-bold" to="/portfolio">PORTFOLIO</NavLink>
         </li>
        <li className="nav-item  me-3">
          <NavLink  className="nav-link px-2  rounded-3 text-white text-white fw-bold" to="/contact">CONTACT</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
