import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="h1 text-white">
              Ch<span className="text_primary">ESS</span>
            </h5>
            <p className="small text-white">
              CHESS is a student's society at NIT Durgapur.
            </p>
            <p className="small text-white mb-0">
              &copy; Copyrights {new Date().getFullYear()} | All rights
              reserved.
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <p className="text-white">Durgapur, West Bengal</p>
              </li>
              <li>
                <p className="text-white">Durgapur, India</p>
              </li>
              <li>
                <a href="mailto:chessnitd2020@gmail.com" className="p-2 large">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="my-1 btn btn-primary" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="my-1 btn btn-primary" to="/faculty">
                  Faculty
                </Link>
              </li>
              <li>
                <Link className="my-1 btn btn-primary" to="/member">
                  Member
                </Link>
              </li>
              <li>
                <Link className="my-1 btn btn-primary" to="/blogs">
                  blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="small">
              Receive the latest updates and offers by signing up href. my
              newsletter
            </p>
            <form action="#">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Recipient's Email Id"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  required
                />
                <button
                  className="btn btn-primary"
                  id="button-addon2"
                  type="button"
                  onClick={() => {
                    alert("Thank you for signing up!")
                  }}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="hr" width="75%" style={{ margin: "1% auto" }} />
      <div className="container">
        <div className="w-50 margin_auto">
          <div className="row">
            <div className="col-6 col-sm-2">
              <a
                className="social-icons"
                href="https://www.facebook.com/Chessnitd"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <div className="col-6 col-sm-2">
              <a
                className="social-icons"
                href="https://in.linkedin.com/company/chemical-engineering-students-society-nit-durgapur"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="col-6 col-sm-2">
              <a
                className="social-icons"
                href="https://www.youtube.com/channel/UCZ-mhpK4AzJzpa3yZTR_P9w"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="col-6 col-sm-2">
              <a
                className="social-icons"
                href="https://www.instagram.com/chess_nit_dgp/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="col-6 col-sm-2">
              <a
                className="social-icons"
                href="/error"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="col-6 col-sm-2">
              <a
                className="social-icons"
                href="https://github.com/CHESS-NIT-DURGAPUR"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
