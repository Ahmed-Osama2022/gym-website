import React from 'react';
import logo from '../../assets/mk-logo-modified.png';

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="bd-footer py-5 mt-5 border-top border-danger border-1">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a
                className="d-inline-flex align-items-center justify-content-center  mb-2 link-dark text-decoration-none"
                href="#"
                aria-label="MK Gym"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="32"
                  className="d-block me-2"
                  viewBox="0 0 118 94"
                  role="img"
                >
                  <title>MK Gym</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                    fill="currentColor"
                  ></path>
                </svg> */}
                <img src={logo} style={{ width: '40px', height: '37px' }} alt="" />
                <span className="fs-5 gym-name fw-bold my-auto"> Gym</span>
              </a>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">
                  Designed and built with all the love in the world by <span className="gym-name">Ahmed Osama.</span>
                </li>
                <li className="mb-2">
                  All Rights Reserved @{date.getFullYear()} for <span className="gym-name">Mohammed Khalid.</span> The
                  manager of the gym.
                </li>
                {/* <li className="mb-2">Currently </li> */}
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5 className="text-danger">Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#home" className="nav-link p-0">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about-us" className="nav-link p-0">
                    About-Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#why-us" className="nav-link p-0">
                    Why Us?
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#program" className="nav-link p-0">
                    Program
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#prices" className="nav-link p-0">
                    Prices
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#contact" className="nav-link p-0">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5 className="text-danger">Guides</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Getting started
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Meet your online coach
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Text us on whatsapp
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    See our location
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5 className="text-danger">Our Coaches</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Ashraf Mohammed
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#">Mostafa Ali</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Mohammed Amr
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Amr Mostafa
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Ahmed Zaher
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5 className="text-danger">Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Issues
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Discussions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Corporate sponsors
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="nav-link p-0">
                    Open Collective
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
