import React from "react";

const Footer = () => {
  return (
    <footer className=" text-dark pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-12 col-md-4">
            <p
              className=" fw-bold d-flex align-items-center gap-2"
              style={{
                height: "40px",
              }}
              
            >
              <img
                src="/images/logo.png"
                alt="logo"
                style={{ height: "40px", borderRadius: "6px" }}
              />
              <span
                className="fw-bold"
                style={{ lineHeight: "1", fontSize: "20px" }}
              >
                Urban Clone
              </span>
            </p>
            <p className="text-secondary small">
              Urban Company is your one-stop destination for home services
              including cleaning, beauty, plumbing, electrical, appliance
              repair, and more.
            </p>
          </div>

          {/* Popular Categories */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Popular Services</h6>
            <ul className="list-unstyled text-muted small">
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Salon at Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Electricians
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Plumbers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled text-muted small">
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-12 col-md-4">
            <h6 className="fw-semibold mb-3">Connect with Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-light opacity-25" />

        <div className="text-center text-secondary small">
          &copy; {new Date().getFullYear()} Urban Company Clone. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
