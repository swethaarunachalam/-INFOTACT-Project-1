import React, { useRef, useState, useEffect } from "react";

function AdminPanel() {
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);

  const bookservice = [
    {
      id: 1,
      title: "AC service and Repair",
      image: "public/images/Repair/ac.avif",
    },
    {
      id: 2,
      title: "Water Purifier Repair",
      image: "public/images/Repair/waterpurufier.webp",
    },
    {
      id: 3,
      title: "Washing Machine Repair",
      image: "public/images/Repair/washing machine.jpg",
    },
    {
      id: 4,
      title: "Refrigerator Repair",
      image: "public/images/Repair/refrigenerator.webp",
    },
    {
      id: 5,
      title: "Microwave Repair",
      image: "public/images/Repair/microwave.webp",
    },
    {
      id: 6,
      title: "Native Water Purifier",
      image: "public/images/Repair/native purifier.webp",
    },
   
  ];

  const handleScroll = () => {
    const container = scrollRef.current;
    setShowPrev(container.scrollLeft > 0);
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollLeft += direction === "next" ? scrollAmount : -scrollAmount;
  };

  return (
    <section className="py-5 position-relative bg-light">
      <div className="container">
        <h2 className="mb-4 fw-semibold">Appliance repair & service</h2>
        <div className="position-relative">
          {/* Left Scroll Button */}
          {showPrev && (
            <button
              className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-2 rounded-circle shadow"
              onClick={() => scroll("prev")}
              style={{ height: "40px", width: "40px" }}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
          )}

          {/* Scrollable Cards */}
          <div
            className="d-flex pb-3"
            ref={scrollRef}
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              scrollBehavior: "smooth",
            }}
          >
            {bookservice.map((item) => (
              <div
                key={item.id}
                className="me-3"
                style={{ minWidth: "180px", flex: "0 0 auto" }}
              >
                <div
                  className="card h-100"
                  style={{
                    width: "260px",
                    cursor: "pointer",
                    border: "2px solid transparent", // Reserve space
                    transition: "transform 0.3s ease, border 0.3s ease", // Smooth animation
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = "2px solid #ccc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = "2px solid transparent";
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body text-center">
                    <p className="mb-0 fw-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="btn btn-light border text-dark position-absolute top-50 end-0 translate-middle-y z-2 rounded-circle shadow"
            onClick={() => scroll("next")}
            style={{ height: "40px", width: "40px" }}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;

