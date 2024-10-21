import React from "react";
import { NavLink } from "react-router-dom";
import signature from "../../images/icons/signature (4) 1.png";
import { CgMenuRight } from "react-icons/cg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <li>
          <NavLink to="#">
            <img src={signature} alt="" />
          </NavLink>
        </li>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/treatment">Treatment</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/media">Media</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>

        <div className="hamburger">
          <CgMenuRight size={32} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
