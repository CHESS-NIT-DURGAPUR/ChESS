import React from "react";
import { ReactDOM } from "react";
import {Link} from 'react-router-dom'
import Logo from "./assets/hexa.png"
import Building from"./assets/building.png"
import './Navbarm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarBrand } from "react-bootstrap";
function navbarm(){
    return(<div id="shapeout">
        <div class="navbarm" id="myNavbar">
        <Link className="navbar-brand font-bold" to="/">
          <img className="logom" src={Logo} alt="logo"/>
        </Link>
        <li className="nav-item active">
              <Link className="nav-link" to="/">
                 Home{" "}
                {/* <span className="sr-only">(current)</span> */}
              </Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/faculty">
                 Faculty
              </Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alumni">
                
                Alumni
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/member">
              Member
              </Link>
            </li>
            <li className="nav-item dropdown">
            <span className="nav-link">Preview</span> 
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              
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
           
            <span className="nav-link">Events</span>
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                
              >
             
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
              <img className="cuilding" src={Building}></img>
               Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
              Blogs
              </Link>
            </li>
</div>
      
    </div>)
}
export default navbarm;

