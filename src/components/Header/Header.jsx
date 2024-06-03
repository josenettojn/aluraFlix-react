import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Container from '../Container/Container'

const Header = () => {
  return (
      <div className={styles.headerContainer}>
        <Container>
          <header className={styles.header}>
            <img src="/images/logo.png" alt="logo da AluraFlix" />
            <nav>
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/new">novo vídeo</Link>
                </li>
              </ul>
            </nav>
          </header>
        </Container>
      </div>
  )
}

export default Header
