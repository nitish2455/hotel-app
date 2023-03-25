import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="header_wrapper navbar py-4  bg-dark fixed-top"
    >
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
        >
          <img src="images/logo.png" alt="Site Icon" />
        </NavLink>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse
          className="collapse navbar-collapse order-lg-1"
          id="navMenu"
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/aboutUs" className="nav-link text-white">
                About
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-white">
                Rooms
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/contact-us" className="nav-link text-white">
                Services
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/contact-us" className="nav-link text-white">
                Team
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/contact-us" className="nav-link text-white">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/contact-us" className="nav-link text-white">
                Price
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/contact-us" className="nav-link text-white">
                Blog
              </NavLink>
            </li>
          </ul>
          <NavLink to="/Form" className="main-btn rounded-3 px-lg-2 nav-link text-white ">
                Sign Up
              </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
