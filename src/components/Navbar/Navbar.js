import React from 'react';
import Darkbtn from '../UI/Darkbtn';
import styles from './Navbar.module.css';
import './Navbar.css';
import logo from '../../assets/mk-logo-modified.png';

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  shadow ${styles.nav} bg-transparent position-fixed top-0 nav `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="MK | logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler bg-transparent "
            id="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <span className="fs-3">
              <ion-icon name="menu-outline"></ion-icon>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#program">
                  Program
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#prices">
                  Prices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <Darkbtn onDarkModeHandler={props.isDarkHandler} imgsHandler={props.imgs} imgSrcHandler={props.imgSrc} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
