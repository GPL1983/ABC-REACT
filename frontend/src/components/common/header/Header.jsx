import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="dvHeader shadow-sm sticky-top bg-colour6">
        <div className="dvStripe py-1">
          <div className="container-xl">
            <div className="row">
              <div className="dvUserInfo col-6 col-lg-4 d-flex align-items-center">
                <div className="me-2">
                  <i className="fa-regular fa-user text-colour6"></i>
                </div>
                <div id="liwelcome" className="">
                  <span id="lblMemberName" className="text-colour6">
                    <span id="txtWelcome"></span>
                    <span>Guest</span>
                  </span>
                </div>
              </div>
              <div
                id="lnkRegister"
                className="dvActivationInfo col-6 text-end col-lg-auto ms-lg-auto d-none d-lg-block  border-lg-end border-end-0"
              >
                <a href="\Activation.aspx" className="nav-link p-0 text-colour6">
                  <i className="fa fa-power-off"></i>
                  <span>Activation</span>
                </a>
              </div>

              <div id="lnkloginlogout" className="dvLoginInfo col-6 col-lg-auto d-none d-lg-block text-end">
                <div className="nav-item">
                  <a href="Login.aspx" id="lnkLogin" className="nav-link d-inline-block p-0 text-colour6">
                    <i className="fa-regular fa-user pe-1 d-inline-block"></i>
                    <span className="nav-link p-0 d-inline-block">Login</span>
                  </a>
                </div>
              </div>

              <div className="dvLanguageScript col-6 col-lg-auto text-end d-none">
                <select className="dvLang d-none-" id="languageSelector">
                  <option value="en">en</option>
                  <option value="np">np</option>
                  <option value="ar">ar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl py-lg-3">
          <nav className="navbar navbar-expand-lg px-0 py-2 mx-lg-n3 justify-content-start">
            <div className="logo m-0 col-auto col-lg-2 px-0 px-lg-3 order-0 order-lg-0">
              <a href="Index.aspx" className="d-inline-block pe-2 me-1">
                <img src="/src/assets/images/logos/infinity-logo.svg" />
              </a>
            </div>
            <div className="logo m-0 col-auto col-lg-2 px-0 px-lg-3 order-1 order-lg-2 text-lg-end">
              <a href="https://www.abcbanking.mu/" target="_blank" className="d-inline-block">
                <img src="/src/assets/images/logos/abc-footer-logo.svg" />
              </a>
            </div>
            <div className="order-3 col-auto col-lg-auto align-items-center justify-content-end px-0 pe-lg-3 d-lg-none ms-auto">
              <button
                className="navbar-toggler d-lg-none px-0 py-2 border-0 ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <span className="fa-solid fa-bars-staggered text-colour1">
                  <FaBars />
                </span>
              </button>
            </div>

            <div
              className="navbar-collapse collapse order-3 order-lg-1 col-lg-auto px-0 px-lg-3 mb-1 mb-lg-0 justify-content-lg-end ms-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-lg-center w-100">
                <li className="nav-item">
                  <a className="nav-link py-2 py-lg-0 px-0 px-lg-3" id="about" href="AboutUs.aspx">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link py-2 py-lg-0 px-0 px-lg-3" id="earn" href="ComingSoon.aspx">
                    Earn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link py-2 py-lg-0 px-0 px-lg-3" href="Redeem.aspx" id="redeem">
                    Redeem
                  </a>
                </li>
                <li id="limyaccount" className="nav-item dropdown">
                  <a className="nav-link py-2 py-lg-0 px-0 px-lg-3" href="StatementSummary.aspx" id="navbarDropdown">
                    My Account
                  </a>
                </li>

                <li id="mob_lnkloginlogout" className="dvLoginInfo nav-item d-lg-none">
                  <a href="Login.aspx" id="mob_lnkLogin" className="nav-link p-2 btn btn-one">
                    <i className="fa-regular fa-user pe-1 d-inline-block"></i>
                    <span className="d-inline-block">Login</span>
                  </a>
                </li>
                <li id="mob_lnkRegister" className="dvActivationInfo nav-item d-lg-none">
                  <a href="\Activation.aspx" id="mob_activation" className="nav-link p-2 btn btn-one mt-2">
                    <i className="fa fa-power-off pe-1"></i>
                    <span>Activation</span>
                  </a>
                </li>
              </ul>
              <div className="dvLoginBtn d-none"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
