import React, { useState, useEffect } from "react";
import Preloader from "./PreLoader";
import Login from "../pages/Login";

function Navbar() {
  const locations = [
    "Delhi NCR",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Kolkata",
  ];

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [selectedLocation, setSelectedLocation] = useState("Delhi NCR");

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredLocations(
      locations.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = (city) => {
    setSelectedLocation(city);
    setSearchTerm("");
    setFilteredLocations(locations);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3 py-4 fixed-top">
        <div className="container px-4">
          {/* Logo / Brand */}
          <a
            className="navbar-brand fw-bold d-flex align-items-center gap-2"
            href="#"
            style={{
              height: "30px",
              transition: "transform 0.3s ease-in-out", // smooth scaling
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ height: "30px", borderRadius: "6px" }}
            />
            <span
              className="fw-bold"
              style={{ lineHeight: "1", fontSize: "14px" }}
            >
              Urban <br />
              Clone
            </span>
          </a>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Location Dropdown */}
            <ul className="navbar-nav me-5">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  📍 {selectedLocation}
                </a>
                <ul className="dropdown-menu p-2" style={{ minWidth: "200px" }}>
                  {/* Search Input */}
                  <li className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search city"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </li>

                  {/* Filtered Cities */}
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((city, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleSelect(city)}
                        >
                          {city}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li>
                      <span className="dropdown-item text-muted">
                        No results
                      </span>
                    </li>
                  )}
                </ul>
              </li>
            </ul>

            {/* Search Bar */}
            <form
              className="d-flex me-auto ms-3"
              role="search"
              style={{ width: "300px" }}
            >
              <input
                className="form-control me-2 border-secondary"
                type="search"
                placeholder="Search services"
                aria-label="Search"
                style={{
                  boxShadow: "none",
                  outline: "none",
                  transition: "box-shadow 0.3s ease", // smooth effect
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow =
                    "0 0 0 0.2rem rgba(108, 117, 125, 0.5)"; // Secondary color shadow
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "none"; // Remove shadow on blur
                }}
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>

            {/* Nav Links */}
            <ul className="navbar-nav mb-2 mb-lg-0 me-3">
              <li className="nav-item">
                <a className="nav-link hover-effect" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-effect" href="#">
                  About
                </a>
              </li>
            </ul>

            {/* Login / Signup */}
            <div className="d-flex">
              <button
                className="btn btn-outline-secondary me-2"
                onClick={handleOpenLoginModal}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <Login
        showModal={showLoginModal}
        handleCloseModal={handleCloseLoginModal}
      />
    </>
  );
}

export default Navbar;
