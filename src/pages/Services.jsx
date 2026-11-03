import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      number: "01",
      name: "Men's Standard Cut",
      description:
        "A clean, timeless haircut finished to suit your style and face shape.",
      price: "R250",
    },
    {
      number: "02",
      name: "Standard Cut + Dye",
      description:
        "Your standard cut with a fresh dye for a bold, polished look.",
      price: "R350",
    },
    {
      number: "03",
      name: "Standard Cut + Beard Trim",
      description:
        "A complete haircut and beard shape-up for a fresh, polished look.",
      price: "R270",
    },
    {
      number: "04",
      name: "Line Up",
      description:
        "Sharp, precise edges to keep your look clean between cuts.",
      price: "R50",
    },
    {
      number: "05",
      name: "Line Up + Beard",
      description:
        "A crisp line up with your beard shaped and detailed.",
      price: "R70",
    },
    {
      number: "06",
      name: "Kids Haircuts",
      description:
        "A fresh, comfortable haircut for younger clients.",
      price: "R200",
    },
  ];

  return (
    <main className="services-page">

      <section className="page-hero services-hero">
        <div>
          <p className="section-label">WHAT WE OFFER</p>

          <h1>OUR SERVICES</h1>

          <p>
            Clean cuts. Confidence. Culture.
          </p>
        </div>
      </section>

      <section className="services-list section">

        <div className="section-heading">
          <p className="section-label">THE PRICE LIST</p>

          <h2>CHOOSE YOUR CUT.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <strong>{service.price}</strong>
              </div>

              <h3>{service.name}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>

      </section>

      <section className="services-booking-cta">
        <p className="section-label">READY WHEN YOU ARE</p>

        <h2>BOOK YOUR CHAIR.</h2>

        <Link to="/booking" className="btn btn-primary">
          Book an Appointment
        </Link>
      </section>

    </main>
  );
}

export default Services;