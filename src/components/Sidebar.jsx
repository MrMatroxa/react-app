import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidenav}>
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
    </aside>
  );
}
