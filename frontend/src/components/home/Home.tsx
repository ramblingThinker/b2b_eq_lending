import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Fuel Your Business Growth with Smart Lending</h1>
          <p>
            Flexible financing solutions designed for modern businesses. Fast
            approvals, transparent terms, and a partner you can trust.
          </p>
          <Link to="/loan" className={styles.ctaButton}>
            Apply Now
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2>Why Businesses Choose Us</h2>
        <div className={styles.featureGrid}>
          <div className={styles.card}>
            <h3>⚡ Lightning Fast</h3>
            <p>Loan approvals in as little as 24 hours.</p>
          </div>
          <div className={styles.card}>
            <h3>📊 Flexible Options</h3>
            <p>Custom repayment plans that fit your cash flow.</p>
          </div>
          <div className={styles.card}>
            <h3>🔒 Transparent</h3>
            <p>No hidden fees, no surprises — just clear terms.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span>1</span>
            <p>Submit your loan application online.</p>
          </div>
          <div className={styles.step}>
            <span>2</span>
            <p>Our experts review and approve quickly.</p>
          </div>
          <div className={styles.step}>
            <span>3</span>
            <p>Funds are deposited directly to your account.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <h2>Ready to Scale Your Business?</h2>
        <Link to="/loan" className={styles.ctaButtonAlt}>
          Start Application
        </Link>
      </section>
    </div>
  );
}