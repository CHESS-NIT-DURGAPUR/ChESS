import React from "react";
import "./navbar.css";
import Logo from "./assets/hexa.png"
import {Link} from 'react-router-dom' 
import Building from"./assets/building.png"
import { library } from '@fortawesome/fontawesome-svg-core';
function NavBar() {
  return (
    <div className="custom_navButtom">
      <nav className="mb-4 navbar navbar-expand-lg navbar-dark fixed-top cyan">
        <Link className="navbar-brand font-bold" to="/">
          <img className="logo" src={Logo} alt="logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav custom_margin">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fa fa-home" aria-hidden="true"></i> Home{" "}
                {/* <span className="sr-only">(current)</span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faculty">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Faculty
              </Link>
            </li>
            

            <li className="nav-item">
              <Link className="nav-link" to="/alumni">
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                Alumni
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/member">
              <i className="fa fa-users" aria-hidden="true"></i> Member
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
               Preview{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <Link className="dropdown-item" to="/chemeinsider">
                Chem-E-Insider
                </Link>
                <Link className="dropdown-item" to="/achatwithchess">
                A Chat With ChESS
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              Events{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <Link className="dropdown-item" to="/chemKriti2021">
                ChemKriti 2021
                </Link>
                <Link className="dropdown-item" to="/chemKriti2022">
                ChemKriti 2022
                </Link>
                <Link className="dropdown-item" to="/more">
                More Events
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companiesc">
               Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
              <i className="fa fa-blog"></i> Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
