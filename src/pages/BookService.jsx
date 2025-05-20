import { useRef, useState, useEffect } from "react";

function BookService() {

 
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);

  const bookservice = [
    { id: 1, image: "public/images/BookService/Acservice.webp" },
    { id: 2, image: "public/images/BookService/bathroomclean.webp" },
    { id: 3, image: "public/images/BookService/home.webp" },
    { id: 4, image: "public/images/BookService/wedding.webp" },
    { id: 5, image: "public/images/BookService/relax.webp" },
    { id: 6, image: "public/images/BookService/haircut.jpg" },
    { id: 7, image: "public/images/BookService/electricians.webp" },
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

  // Enable scroll buttons
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

          {/* Scrollable Service Cards */}
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
                style={{
                  minWidth: "400px",
                  flex: "0 0 auto",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={item.image}
                    alt="service"
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
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

export default BookService;
