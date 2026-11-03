import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <p className="section-label">WHO WE ARE</p>

        <h1>THE TUMI STORY</h1>

        <p>
          More than a haircut. A place to look sharp, feel confident and
          leave ready for whatever comes next.
        </p>
      </section>

      <section className="about-story section">
        <div className="about-image">
          <img
            src="/images/two.jpg"
            alt="Barber working with a client"
          />
        </div>

        <div className="about-copy">
          <p className="section-label">OUR PHILOSOPHY</p>

          <h2>
            CRAFT
            <br />
            MATTERS.
          </h2>

          <p>
            With Tumi, barbering is about more than simply cutting hair. It's
            about the details — the precision of the cut, the sharpness of
            the finish and the confidence you have when you leave the chair.
          </p>

          <p>
            Tumi combines traditional barbering techniques with a modern
            approach to style, creating an experience that feels relaxed,
            personal and professional.
          </p>
        </div>
      </section>

      <section className="about-barbers section">
        <div className="section-heading">
          <p className="section-label">YOUR BARBER</p>

          <h2>MEET TUMI</h2>
        </div>

        <div className="barbers-grid">
          <article>
            <div className="barber-avatar">T</div>
            <h3>Tumi</h3>
            <p className="barber-role">Barber &amp; Digital Creator</p>
            <p>
              Based in Kwaggafontein, Mpumalanga. Known for clean cuts,
              sharp line ups and a following of 191K on Facebook.
              Clean cuts. Confidence. Culture.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values section">
        <div className="section-heading">
          <p className="section-label">WHAT WE STAND FOR</p>

          <h2>THE TUMI STANDARD</h2>
        </div>

        <div className="values-grid">
          <article>
            <span>01</span>
            <h3>Precision</h3>
            <p>
              Every detail matters. We take the time to get the finish right.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Style</h3>
            <p>
              Classic foundations combined with modern cuts and personal
              expression.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Experience</h3>
            <p>
              A welcoming environment where every client can feel comfortable
              in the chair.
            </p>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <p className="section-label">YOUR CHAIR IS WAITING</p>

          <h2>COME SEE TUMI.</h2>

          <Link to="/booking" className="btn btn-primary">
            Book an Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;