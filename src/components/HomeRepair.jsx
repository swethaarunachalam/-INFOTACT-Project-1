import React, { useRef, useState, useEffect } from "react";

function HomeRepair() {
  const services = [
    {
      id: 1,
      title: "Fan Repair (ceiling/exhaust/wall)",
      image: "public/images/Home Repair/fan.webp",
      rating: "4.82 (108k)",
      price: "109",
    },
    {
      id: 2,
      title: "Door lock replacement",
      image: "public/images/Home Repair/doorlock.webp",
      rating: "4.86 (18k)",
      price: "319",
    },
    {
      id: 3,
      title: "Switch/ socket replacement",
      image: "public/images/Home Repair/switch.webp",
      rating: "4.86 (62k)",
      price: "49",
    },
    {
      id: 4,
      title: "Smart switch installation",
      image: "public/images/Home Repair/smartswitch.webp",
      rating: "4.81 (728)",
      price: "119",
    },
    {
      id: 5,
      title: "Flush tank repair(external ceramic)",
      image: "public/images/Home Repair/flush.webp",
      rating: "4.80 (31K)",
      price: "199",
    },
    {
      id: 6,
      title: "Jet spray Installation",
      image: "public/images/Home Repair/jet spray.jpg",
      rating: "4.84 (83K)",
      price: "79",
    },
    {
      id: 7,
      title: "Tap repair ",
      image: "public/images/Home Repair/tap.jpg",
      rating: "4.82 (141k)",
      price: "49",
    },
    {
      id: 8,
      title: "Bathroom drainage removal",
      image: "public/images/Home Repair/bathroom.webp",
      rating: "4.85 (5k)",
      price: "99",
    },
    {
      id: 9,
      title: "Single-pole MCB installation ",
      image: "/public/images/Home Repair/singlepole.jpg",
      rating: "4.85 (5k)",
      price: "99",
    },
    {
      id: 10,
      title: "Bulb/ Tubelight holder installation ",
      image: "/images/services/servicebedbug.jpg",
      rating: "4.87 (29k)",
      price: "69",
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
        <h2 className="mb-4 fw-semibold">Home Repair & installation</h2>
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

export default HomeRepair;
