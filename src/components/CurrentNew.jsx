
import React, { useRef, useState, useEffect } from "react";

function CurrentNew() {
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);

  const CurrentNewItems = [
    { id: 1, title: "Insta Help", image: "images/currentNew/insta.webp" },
    {
      id: 2,
      title: "Native Water Purifier",
      image: "images/currentNew/purifier.jpg",
    },
    {
      id: 3,
      title: "Full home painting",
      image: "images/currentNew/homepainting.jpg",
    },
    {
      id: 4,
      title: "Native Smart Locks",
      image: "images/currentNew/smartlock.jpeg",
    },
    { id: 5, title: "Laptop", image: "images/currentNew/laptop.jpg" },
    { id: 6, title: "Spa Ayurveda", image: "images/currentNew/spa.webp" },
    {
      id: 7,
      title: "Hair Studio for Women",
      image: "images/currentNew/hairstudio.jpg",
    },
    { id: 8, title: "AC", image: "images/currentNew/ac.webp" },
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
    if (direction === "next") {
      container.scrollLeft += scrollAmount;
    } else {
      container.scrollLeft -= scrollAmount;
    }
  };

  return (
    <section className="py-5 position-relative bg-light">
      <div className="container">
        <h2 className="mb-4 fw-semibold">New and Noteworthy</h2>
        <div className="position-relative">
          {showPrev && (
            <button
              className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-2 rounded-circle"
              onClick={() => scroll("prev")}
              style={{ height: "40px", width: "40px" }}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
          )}

          <div
            className="d-flex overflow-auto pb-3"
            ref={scrollRef}
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          >
            {CurrentNewItems.map((item) => (
              <div
                key={item.id}
                className="me-3"
                style={{ minWidth: "250px", flex: "0 0 auto" }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "170px", objectFit: "cover",cursor:"pointer" }}
                  />
                  <div className="card-body">
                    <p className="card-text fw-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn btn-light border text-dark position-absolute top-50 end-0 translate-middle-y z-2 rounded-circle"
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

export default CurrentNew;
