import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/images/logo.png" alt="logo da AluraFlix" />
      <nav>
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">novo vídeo</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
