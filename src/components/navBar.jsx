import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Home
      </NavLink>
      <NavLink className="navbar-brand" to="/projects">
        Projects
      </NavLink>
      <NavLink className="navbar-brand" to="/about-me">
        About Me
      </NavLink>
    </nav>
  );
};

export default NavBar;
