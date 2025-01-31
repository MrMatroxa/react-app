import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <article className="about">
        <h1>About</h1>
        <p>This is a simple to do app made with React</p>
      </article>
      <article className={styles.authors}>
        <h3>This app was made by:</h3>
        <ul>
          <li>
            <img src="https://avatars.githubusercontent.com/u/93343167?v=4" />
            <span>Nikol Topalusic</span>
            <a href="https://github.com/nikolniven">GitHub </a>
            <a href="https://www.linkedin.com/in/nikol-topalusic/">LinkedIn</a>
          </li>
          <li>
          <img src="https://ca.slack-edge.com/T02CQ4EN4-U080XACSN72-0e855a6bcf9e-512" />
            <span>Matiss Uskans</span>
            <a href="https://github.com/MrMatroxa">GitHub </a>
            <a href="https://www.linkedin.com/in/matiss-uskans-666a6b306/">
              LinkedIn
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}
