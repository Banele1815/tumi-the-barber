import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <p className="section-label">KWAGGAFONTEIN · MPUMALANGA</p>

          <h1>
            LOOK SHARP.
            <br />
            FEEL FRESH.
          </h1>

          <p className="hero-text">
            Clean cuts. Confidence. Culture.
            Fresh looks from Tumi The Barber.
          </p>

          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">
              Book Your Chair
            </Link>

            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="home-intro section">
        <div>
          <p className="section-label">WELCOME TO TUMI THE BARBER</p>

          <h2>
            MORE THAN
            <br />
            A HAIRCUT.
          </h2>
        </div>

        <div className="intro-text">
          <p>
            Tumi The Barber is built around clean cuts, confidence and
            culture — and an experience worth coming back for.
          </p>

          <p>
            Whether you want a standard cut, a sharp line up or a fresh
            beard trim, you'll leave looking and feeling your best.
          </p>

          <Link to="/about" className="text-link">
            Meet Tumi →
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="home-services section">
        <div className="section-heading">
          <p className="section-label">WHAT WE DO</p>

          <h2>OUR SERVICES</h2>
        </div>

        <div className="service-preview-grid">

          <article className="service-preview">
            <span>01</span>
            <h3>Men's Standard Cut</h3>
            <p>Clean, timeless and tailored to you.</p>
            <strong>R250</strong>
          </article>

          <article className="service-preview">
            <span>02</span>
            <h3>Cut + Beard Trim</h3>
            <p>A fresh cut with your beard shaped to match.</p>
            <strong>R270</strong>
          </article>

          <article className="service-preview">
            <span>03</span>
            <h3>Line Up</h3>
            <p>Crisp edges and a sharp finish.</p>
            <strong>R50</strong>
          </article>

          <article className="service-preview">
            <span>04</span>
            <h3>Kids Haircuts</h3>
            <p>A fresh, comfortable cut for younger clients.</p>
            <strong>R200</strong>
          </article>

        </div>

        <div className="center-button">
          <Link to="/services" className="btn btn-outline">
            See All Services
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div>
          <p className="section-label">YOUR CHAIR IS WAITING</p>

          <h2>READY FOR A FRESH CUT?</h2>

          <Link to="/booking" className="btn btn-primary">
            Book an Appointment
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;