import React from "react";
import { Link } from "react-router-dom";
import logo from "./assests/finallogo.png";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <div className="navbar_logo" style={{ display: "flex" }}>
          <a
            className="text-light"
            href="#"
            style={{
              fontSize: "2.2rem",
              textDecoration: "none",
              paddingTop: ".45rem",
            }}
          >
            BITD C
          </a>
          <img
            src={logo}
            alt=""
            style={{ height: "4rem", objectFit: "contain" }}
          />
          <a
            className="navbar-brand text-light"
            href="#"
            style={{ fontSize: "2.2rem", textDecoration: "none" }}
          >
            nnect
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active text-light ms-3"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light ms-3"
                href="https://bitdurg.ac.in/home"
                target={"_blank"}
              >
                BITD
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light ms-3"
                href="https://erp.bitdurg.ac.in/Accsoft_BIT/StudentLogin.aspx"
                target={"_blank"}
              >
                Student ERP
              </a>
            </li>
            <li className="nav-item">
              <Link to={"/About"} className="nav-link text-light ms-3" href="#">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={"/ClubProfile"}
                href="#"
                className="nav-link text-light ms-3"
              >
                Club Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/Calender"}
                href="#"
                className="nav-link text-light ms-3"
              >
                Calender
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
