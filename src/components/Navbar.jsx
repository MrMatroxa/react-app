import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="website logo" className={styles.logo} />
      <h1>Do It!!!!</h1>
    </nav>
  );
}
