import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-light" style={{ height: "calc(100vh - 1px)" }}>
        <div className="container d-flex h-100">
          {/* Left Side - 40% */}
          <div
            className="d-flex flex-column justify-content-center mt-5 ms-4"
            style={{ width: "50%" }}
          >
            <h1 className="fw-semibold mb-5 fs-2">
              Home Services at your <br /> doorstep
            </h1>
            <p className="fw-semibold lead mb-4 border border-1 p-4 pb-5 text-muted w-75">
              What are you looking for?
            </p>

            <div className="d-flex gap-5 mt-5 ms-3">
              {/* Service Rating */}
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-star fs-3"></i>
                <div>
                  <h5 className="fw-semibold mb-0">4.8</h5>
                  <p className="fw-light mb-0 " style={{ fontSize: "13px" }}>
                    Service Rating*
                  </p>
                </div>
              </div>

              {/* Customers Globally */}
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-people fs-3"></i>
                <div>
                  <h5 className="fw-semibold mb-0">12M+</h5>
                  <p className="fw-light mb-0" style={{ fontSize: "13px" }}>
                    Customers Globally*
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 60% */}
          <div
            className="d-flex justify-content-center align-items-center mt-5"
            style={{ width: "60%" }}
          >
            <div className="row g-4 w-100" style={{ maxWidth: "600px" }}>
              {[
                "service1.avif",
                "service2.avif",
                "service3.jpg",
                "service4.jpg",
              ].map((img, i) => (
                <div className="col-6" key={i}>
                  <img
                    src={`/images/${img}`}
                    alt={`Service ${i + 1}`}
                    className="img-fluid rounded shadow-sm"
                    style={{
                      height: "290px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
