import { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import Login from "../pages/Login";
import PreLoader from "../components/PreLoader";

const Navbar = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const inputRef = useRef(null);


  const services = [
    "Plumbing",
    "Salon at home",
    "AC repair",
    "Home cleaning",
    "Electrician services",
    "Painting services",
  ];

  // Typing effect
  useEffect(() => {
    if (isFocused) return; // Do not animate while input is focused

    const currentText = services[index];
    let typingSpeed = isDeleting ? 30 : 30;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setTypedText(currentText.substring(0, typedText.length + 1));
        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      } else {
        // Deleting
        setTypedText(currentText.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % services.length); // Move to next
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, index, isFocused]);

  const availableCities = [
    "Delhi NCR",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
  ];

  const handleCityClick = (city) => {
    setSelectedLocation(city);
    setShowLocationModal(false);
    setCitySearch("");
  };

  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      () => {
        setSelectedLocation("Your Location");
        setShowLocationModal(false);
      },
      (err) => {
        alert(err, "Could not access your location.");
      }
    );
  };

  const filteredCities = availableCities.filter((city) =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const [showLoginButton, setShowLoginButton] = useState(false);
 
  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3 py-4 fixed-top">
        <div className="container px-4">
          {/* Logo */}
          <a
            className="navbar-brand fw-bold d-flex align-items-center gap-2"
            href="#"
            style={{ transition: "transform 0.3s ease-in-out" }}
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
              style={{ fontSize: "14px", lineHeight: "1" }}
            >
              Urban <br /> Clone
            </span>
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarContent"
          >
            {/* Centered Search Section */}
            <div className="d-flex align-items-center gap-3 mx-auto flex-wrap">
              {/* Location Input */}
              <div
                className="d-flex align-items-center border border-secondary rounded px-2"
                style={{ width: "260px", cursor: "pointer", height: "38px" }}
                onClick={() => setShowLocationModal(true)}
              >
                <i className="bi bi-geo-alt-fill text-secondary me-2"></i>
                <span
                  className="flex-grow-1 text-secondary"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "14px",
                  }}
                >
                  {selectedLocation || "Gandhipuram ..."}
                </span>
                <i className="bi bi-caret-down-fill text-secondary ms-2"></i>
              </div>

              {/* Search Input */}
              <form
                role="search"
                style={{ width: "260px", position: "relative" }}
              >
                <i
                  className="bi bi-search text-secondary"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                ></i>
                <input
                  ref={inputRef}
                  className="form-control border-secondary"
                  type="search"
                  placeholder={
                    isFocused ? "Search Services" : `Search for "${typedText}"`
                  }
                  style={{ fontSize: "14px", paddingLeft: "35px" }}
                  aria-label="Search"
                  onFocus={(e) => {
                    setIsFocused(true);
                    e.target.style.boxShadow =
                      "0 0 0 0.2rem rgba(108, 117, 125, 0.5)";
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    e.target.style.boxShadow = "none";
                  }}
                />
              </form>
            </div>

            {/* Right Side Icons */}
            <div className="d-flex align-items-center gap-5 ms-auto position-relative">
              {/* Cart Icon */}
              <div title="Your Cart" style={{ cursor: "pointer" }}>
                <i className="bi bi-cart3 fs-5 text-dark"></i>
              </div>

              {/* User Icon and Login */}
              <div className="position-relative" style={{ cursor: "pointer" }}>
                <i
                  className="bi bi-person-circle fs-5 text-dark"
                  onClick={() => setShowLoginButton((prev) => !prev)}
                ></i>

                {showLoginButton && (
                  <div
                    className="position-absolute mt-2"
                    style={{
                      top: "100%",
                      left: "-50%",
                      zIndex: 1000,
                    }}
                  >
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={handleOpenLoginModal}
                    >
                      Login
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Login
        showModal={showLoginModal}
        handleCloseModal={handleCloseLoginModal}
      />
      {/* Location Modal */}
      <Modal
        show={showLocationModal}
        onHide={() => setShowLocationModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Search city..."
            className="mb-3"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
          />
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <Button
                key={index}
                variant="light"
                className="w-100 mb-2 text-start"
                onClick={() => handleCityClick(city)}
              >
                {city}
              </Button>
            ))
          ) : (
            <div className="text-muted">No cities found.</div>
          )}
          <Button variant="outline-primary" onClick={handleUseCurrentLocation}>
            📍 Use Current Location
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
