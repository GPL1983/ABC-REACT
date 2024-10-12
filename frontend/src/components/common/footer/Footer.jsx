import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="dvFooter">
        <div className="bg-colour1 py-4">
          <div className="container-xl">
            <div className="row align-items-lg-center">
              <div className="dvLinks col-lg-10 text-center text-lg-left mb-3 mb-lg-0 text-uppercase">
                <a className="d-block d-md-inline-block py-1" href="ComingSoon.aspx">
                  Earn
                </a>
                <a className="d-block d-md-inline-block py-1" href="Redeem.aspx">
                  Redeem
                </a>
                <a className="d-block d-md-inline-block py-1" href="AboutUs.aspx">
                  About Us
                </a>
                <a className="d-block d-md-inline-block py-1" href="FAQ.aspx">
                  FAQs
                </a>
                <a className="d-block d-md-inline-block py-1" href="TermsAndConditions.aspx">
                  Terms &amp; Conditions
                </a>
                <a className="d-block d-md-inline-block py-1" href="PrivacyPolicy.aspx">
                  Privacy Policy
                </a>
                <a className="d-block d-md-inline-block py-1" href="BookingPolicy.aspx">
                  Booking Policy
                </a>
              </div>
              <div className="dvSocialIcons col-lg-2 text-center text-lg-right mb-3 mb-md-0">
                <a
                  className="d-inline-block px-1"
                  href="https://www.facebook.com/ABCbankingcorporation"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook text-colour6"></i>
                </a>
                <a
                  className="d-inline-block px-1"
                  href="https://www.linkedin.com/company/abc-banking-corporation-ltd-mauritius"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin text-colour6"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl py-4">
          <div className="row align-items-lg-center">
            <div className="col-sm-12 col-lg-2 text-center text-lg-left mb-3 mb-lg-0">
              <a className="d-inline-block" href="https://www.abcbanking.mu/" target="_blank">
                <img
                  className="img-fluid footer-logo"
                  src="/src/assets/images/logos/abc-footer-logo.svg"
                  alt="Infinity Rewards Logo"
                />
              </a>
            </div>
            <div className="col-sm-12 col-lg-6 text-center text-lg-left mb-3 mb-lg-0">
              <p className="h8 heading-semibold text-colour7">
                &copy;
                <script>document.write(new Date().getFullYear());</script>
                ABC BANKING CORPORATION LTD. All rights reserved.
              </p>
            </div>
            <div className="col-sm-12 col-lg-4 text-center text-lg-right">
              <a className="d-inline-block" href="https://www.giift.com/" target="_blank">
                <img className="img-fluid" src="/src/assets/images/logos/giift-logo.svg" alt="Giift Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
