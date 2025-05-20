import React, { useState } from "react";

function Login({ showModal, handleCloseModal }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(""); // To store error message
  const [isOtpSent, setIsOtpSent] = useState(false); // State to manage OTP flow
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    // Validate Indian phone number
    const phoneRegex = /^[789]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError(
        "Please enter a valid 10-digit Indian phone number."
      );
      return;
    }

    // If the phone number is valid
    console.log("Phone Number:", phoneNumber);
    setError(""); // Clear any existing error
    setIsOtpSent(true); // Show OTP input field
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Validate OTP (for demo purposes, you can set any OTP format)
    const otpRegex = /^[0-9]{6}$/;
    if (!otpRegex.test(otp)) {
      setOtpError("Please enter a valid 6-digit OTP.");
      return;
    }

    setOtpError(""); // Clear any existing OTP error
    console.log("OTP Verified:", otp);
    handleCloseModal(); // Close modal after OTP verification
  };

  return (
    showModal && (
      <>
        {/* Overlay for background dimming */}
        <div
          className="modal-backdrop fade show"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: "1040",
          }}
        ></div>

        <div
          className="modal fade show d-block"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{
            position: "fixed",
            bottom: "0", // To make it appear from bottom
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1050,
            animation: "slide-up 0.7s ease-out forwards",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                {!isOtpSent ? (
                  <form onSubmit={handlePhoneSubmit}>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label mt-2 mb-3">
                       Enter Your Phone Number
                      </label>
                      <div
                        className="input-group mt-2 mb-4"
                      >
                        {/* +91 Prefix */}
                        <span className="input-group-text bg-light border-secondary text-muted">
                          +91
                        </span>

                        {/* Phone Number Input Field */}
                        <input
                          type="tel"
                          className="form-control border-secondary"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Enter your phone number"
                          maxLength="10"
                          inputMode="numeric"
                          onKeyDown={(e) => {
                            // Prevent unwanted characters like e, +, -, .
                            if (["e", "E", "+", "-", "."].includes(e.key)) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>

                      {error && <div className="text-danger mb-4 mx-5">{error}</div>}
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-secondary">
                        Send OTP
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleOtpSubmit}>
                    <div className="mb-5">
                      <label htmlFor="otp" className="form-label">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder=""
                        required
                        maxLength="6"
                        inputMode="numeric" // Numeric input mode for OTP
                      />
                      {otpError && (
                        <div className="text-danger mt-2 ">{otpError}</div>
                      )}
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-success">
                        Verify OTP
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CSS for Slide-up Animation */}
        <style jsx="true">{`
          @keyframes slide-up {
            0% {
              transform: translateX(-50%) translateY(100%);
            }
            100% {
              transform: translateX(-50%) translateY(30%);
            }
          }
        `}</style>
      </>
    )
  );
}

export default Login;
