import { useVideos } from "../../context/VideoContext";
import VideoPlayer from "../VideoYt/VideoYt";
import styles from "./Card.module.css";

const Card = (props) => {
  const { deleteVideo } = useVideos();
  const { title, url, id } = props;

  const handleDelete = () => {
    deleteVideo(id);
  };

  return (
    <div className={styles.card}>
      <VideoPlayer videoUrl={url} />
      <div className={styles.actions}>
        <div className={styles.action} onClick={handleDelete}>
          <img src="/images/trash.png" alt="" />
          <span>deletar</span>
        </div>
        <div className={styles.action}>
          <img src="/images/edit.png" alt="" />
          <span>editar</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
