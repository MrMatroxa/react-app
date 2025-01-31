import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidenav}>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
      </div>
    </aside>
  );
}
