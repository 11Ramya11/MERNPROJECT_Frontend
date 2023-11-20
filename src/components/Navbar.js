import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  text-dark bg-warning shadow">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          {/* Your brand/logo here */}
          Product Review and Rating Platform
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-outline-dark ms-auto px-4 rounded-pill" to="/login">
            <i className="fa fa-sign-in me-2"></i>Login
          </NavLink>
          <NavLink className="btn btn-outline-dark ms-2 px-4 rounded-pill" to="/register">
            <i className="fa fa-user-plus me-2"></i>Register
          </NavLink>
          <NavLink className="btn btn-outline-dark ms-2 px-4 rounded-pill" to="/dashboard">
            <i className="fa fa-sign-plus me-2"></i>Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;