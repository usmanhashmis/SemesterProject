import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <a className="navbar-brand">
          <Link to="/">Hashmi's Production</Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-md-3">
            <li className="nav-item active nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/AddSharyi">AddShayari</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/sharyi">Shayari</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/chat">Chat</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item nav-link ">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item nav-link buttonD">
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
