import VideoPlayer from '../VideoYt/VideoYt'
import styles from './Card.module.css'

const Card = (props) => {
  const {title, url} = props
  console.log('titulo', title)
  return (
    <div className={styles.card}>
      <VideoPlayer videoUrl={url} />
      <h3>{title}</h3>
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
