import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "../Container/Container";
import Button from "../Buttons/ButtonTech";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Container>
        <header className={styles.header}>
          <Link to="/">
            <img src="/images/logo.png" alt="logo da AluraFlix" />
          </Link>
          <nav>
            <ul>
              <li>
                <Button>
                  <Link to="/">home</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="/new">novo vídeo</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default Header;
