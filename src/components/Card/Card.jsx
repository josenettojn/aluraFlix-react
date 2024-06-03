import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src="/images/banner.png" alt="" />
      <div className={styles.actions}>
        <div className={styles.action}>
          <img src="/images/trash.png" alt="" />
          <span>deletar</span>
        </div>
        <div className={styles.action}>
          <img src="/images/edit.png" alt="" />
          <span>editar</span>
        </div>
      </div>
    </div>
  )
}

export default Card
