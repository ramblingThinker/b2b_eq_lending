import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LoanPortal</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/loan" className={({ isActive }) => (isActive ? styles.active : "")}>
            Loan Form
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}