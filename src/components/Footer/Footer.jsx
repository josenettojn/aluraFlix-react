import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <img src="/images/logo.png" alt="logo da AluraFlix" />
      </Link>
    </footer>
  );
};

export default Footer;
