import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      {/* Hero / Intro */}
      <section className={styles.hero}>
        <h1>About LoanPortal</h1>
        <p>
          We’re more than a lending platform — we’re a growth partner for
          ambitious businesses. Our mission is to make financing simple,
          transparent, and accessible.
        </p>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <h2>Our Story</h2>
        <p>
          Founded with the belief that small and medium businesses deserve the
          same financial opportunities as large enterprises, LoanPortal was
          built to bridge the gap. Over the years, we’ve helped thousands of
          entrepreneurs secure the funding they need to expand, innovate, and
          thrive.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mission}>
        <div>
          <h3>Our Mission</h3>
          <p>
            To empower businesses with fast, fair, and flexible financing
            solutions that fuel sustainable growth.
          </p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <p>
            A world where every business — regardless of size — has equal access
            to the capital they need to succeed.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valueGrid}>
          <div>
            <h4>🤝 Trust</h4>
            <p>We believe in transparency and long‑term relationships.</p>
          </div>
          <div>
            <h4>⚡ Speed</h4>
            <p>Quick decisions and fast funding when it matters most.</p>
          </div>
          <div>
            <h4>📊 Flexibility</h4>
            <p>Solutions tailored to your unique business needs.</p>
          </div>
          <div>
            <h4>🌍 Impact</h4>
            <p>Helping businesses grow strengthens communities everywhere.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Partner with us on your growth journey</h2>
        <a href="/loan" className={styles.ctaButton}>
          Apply for a Loan
        </a>
      </section>
    </div>
  );
}