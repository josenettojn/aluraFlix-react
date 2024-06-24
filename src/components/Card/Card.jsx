import { useVideos } from "../../context/VideoContext";
import DialogDemo from "../Dialog/Dialog";
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
          <DialogDemo videoId={id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
