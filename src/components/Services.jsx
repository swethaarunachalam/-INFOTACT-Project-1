import React, { useRef, useState, useEffect } from "react";

function Services() {
  const services = [
    {
      id: 1,
      title: "Full home painting consultation",
      image: "/images/services/servicepaint.webp",
      rating: "4.79 (48k)",
      price: "49",
    },
    {
      id: 2,
      title: "Rooms/walls painting consultation",
      image: "/images/services/servicepaint.webp",
      rating: "4.79 (4k)",
      price: "49",
    },
    {
      id: 3,
      title: "Pest control (includes utensil removal)",
      image: "/images/services/servicepestc.webp",
      rating: "4.79 (106k)",
      price: "1098",
    },
    {
      id: 4,
      title: "Apartment pest control(includes utensil removal)",
      image: "/images/services/servicepest.png",
      rating: "4.80 (36k)",
      price: "1498",
    },
    {
      id: 5,
      title: "Foam-jet AC service",
      image: "/images/services/serviceac.webp",
      rating: "4.78 (1.5M)",
      price: "799",
    },
    {
      id: 6,
      title: "intense cleaning (2 bathrooms)",
      image: "/images/services/serviceintense.webp",
      rating: "4.78 (2.3M)",
      price: "49",
    },
    {
      id: 7,
      title: "Apartment termite control",
      image: "/images/services/serviceapartment.avif",
      rating: "4.83 (15k)",
      price: "3999",
    },
    {
      id: 8,
      title: "Automatic top load machine check-up",
      image: "/images/services/servicetopload.jpg",
      rating: "4.81 (317k)",
      price: "99",
    },
    {
      id: 9,
      title: "Bed bugs control",
      image: "/images/services/servicebedbug.jpg",
      rating: "4.77 (22k)",
      price: "1599",
    },
    {
      id: 10,
      title: "Apartment pest control(excludes utensil removal)",
      image: "/images/services/serviceapartmentpest.jpg",
      rating: "4.81 (126k)",
      price: "1299",
    },
  ];

  const scrollRef = useRef();
  const [showPrev, setShowPrev] = useState(false);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    setShowPrev(container.scrollLeft > 0);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScroll);
    return () => container.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container ">
        <h2 className="mb-4 fw-semibold">Services We Offer</h2>
        <div className="position-relative">
          {/* Horizontal Card Scroll Container */}
          <div
            className="d-flex overflow-auto gap-3 pb-2  position-relative border-0 "
            ref={scrollRef}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}

          >
            {services.map((service) => (
              <div
                key={service.id}
                className="card flex-shrink-0 "
                style={{ width: "250px", border: "none", cursor: "pointer" }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{ height: "170px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-title fw-bold">{service.title}</p>
                  <p className="fw-semibold" style={{ fontSize: "13px" }}>
                    <i className="bi bi-star-fill text-dark"></i>{" "}
                    {service.rating}
                  </p>
                  <p className="fw-semibold" style={{ fontSize: "13px" }}>
                    ₹{service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Left Button */}
          {showPrev && (
            <button
              className="btn btn-light border position-absolute top-50 translate-middle-y rounded-circle"
              style={{ left: "10px", zIndex: "2" }}
              onClick={() => scroll("left")}
            >
              <i className="bi bi-arrow-left "></i>
            </button>
          )}

          {/* Scroll Right Button */}
          <button
            className="btn btn-light border position-absolute top-50 translate-middle-y rounded-circle"
            style={{ right: "10px", zIndex: "2" }}
            onClick={() => scroll("right")}
          >
            <i className="bi bi-arrow-right " style={{ fontWeight: 900 }}></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
