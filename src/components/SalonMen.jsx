function SalonMen() {
  const bookservice = [
    {
      id: 1,
      title: "Haircut & beard styling",
      image: "public/images/SalonMen/haircut.jpeg",
    },
    {
      id: 2,
      title: "Haircolor & Hair spa",
      image: "public/images/SalonMen/haircolor.webp",
    },
    {
      id: 3,
      title: "Pedicure & Manicure",
      image: "public/images/SalonMen/pedicure.webp",
    },
    {
      id: 4,
      title: "Facial and Cleanup",
      image: "public/images/SalonMen/facial.jpg",
    },
  ];

  return (
    <section className="py-5 position-relative bg-light">
      <div className="container">
        <h2 className="mb-4 fw-semibold">Salon For Men</h2>
        <div className="position-relative">
          <div
            className="d-flex pb-3"
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
        </div>
      </div>
    </section>
  );
}

export default SalonMen;
