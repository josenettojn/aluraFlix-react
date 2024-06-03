import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
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
  )
}

export default Header
