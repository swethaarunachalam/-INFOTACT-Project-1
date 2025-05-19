import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // adjust speed by changing this increment
      });
    }, 10); // adjust interval time (ms) for faster/slower loading

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-4 mb-4">
        <p className="d-flex align-items-center justify-content-center gap-2">
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
      </div>

      <div className="text-center" style={{ width: "300px" }}>
        <div className="progress mb-3" style={{ height: "4px" }}>
          <div
            className="progress-bar bg-dark "
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
