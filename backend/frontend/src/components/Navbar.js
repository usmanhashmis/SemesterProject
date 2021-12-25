import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light fixed-top"
        id="ftco-navbar "
      >
        <div className="container">
          <a className="navbar-brand">
            <Link to="/">Hashmi's Production</Link>
          </a>
          <div className="social-media order-lg-last">
            <p className="mb-0 d-flex">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-facebook">
                  <i className="sr-only">Facebook</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-twitter">
                  <i className="sr-only">Twitter</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-instagram">
                  <i className="sr-only">Instagram</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-dribbble">
                  <i className="sr-only">Dribbble</i>
                </span>
              </a>
            </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
