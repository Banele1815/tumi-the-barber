import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            TUMI<span>.</span>
          </Link>

          <p>
            Tumi The Barber.
            Clean cuts. Confidence. Culture.
          </p>

          <Link to="/booking" className="footer-book">
            Book Your Chair →
          </Link>
        </div>


        <div className="footer-column">
          <p className="footer-heading">EXPLORE</p>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/booking">Booking</Link>
        </div>


        <div className="footer-column">
          <p className="footer-heading">VISIT US</p>

          <p>Kwaggafontein</p>
          <p>Mpumalanga, South Africa</p>

          <a href="tel:+27630176952">
            063 017 6952
          </a>

          <a
            href="https://wa.me/27630176952"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>

          <a href="mailto:tumithebarber8@gmail.com">
            tumithebarber8@gmail.com
          </a>
        </div>


        <div className="footer-column">
          <p className="footer-heading">OPENING HOURS</p>

          <p>Mon — Fri</p>
          <strong>09:00 — 18:00</strong>

          <p>Saturday</p>
          <strong>09:00 — 16:00</strong>

          <p>Sunday</p>
          <strong>Closed</strong>
        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Tumi The Barber. All rights reserved.
        </p>

        <div className="footer-links">
          <Link to="/terms">Terms & Conditions</Link>

          <a
            href="https://www.facebook.com/search/top?q=Tumi%20Thee%20Barber"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;