import React, { useRef, useState, useEffect } from "react";

function SalonWomen() {
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);

  const bookservice = [
    {
      id: 1,
      title: "Facial and Cleanup",
      image: "public/images/SalonWomen/facial.png",
    },
    {
      id: 2,
      title: "Waxing",
      image: "public/images/SalonWomen/waxing.jpg",
    },
    {
      id: 3,
      title: "Pedicure",
      image: "public/images/SalonWomen/pedicure.jpg",
    },
    {
      id: 4,
      title: "Manicure",
      image: "public/images/SalonWomen/manicure.webp",
    },
    {
      id: 5,
      title: "Hair care",
      image: "public/images/SalonWomen/haircut.jpeg",
    },
    {
      id: 6,
      title: "Bleach and detan",
      image: "public/images/SalonWomen/bleach.avif",
    },
    {
      id: 7,
      title: "Threading and face waxing",
      image: "public/images/SalonWomen/threading.jpeg",
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
        <h2 className="mb-4 fw-semibold">Salon For Women</h2>
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
                    border: "2px solid transparent", 
                    transition: "transform 0.3s ease, border 0.3s ease", 
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

export default SalonWomen;
