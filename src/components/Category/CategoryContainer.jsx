import Category from "./Category";
import Container from "../Container/Container";
import styles from "./CategoryContainer.module.css";
import { useVideos } from "../../context/VideoContext";

export const CategoryContainer = ({ category }) => {
  const { videos } = useVideos();

  const frontendVideos = videos.filter(
    (video) => video.category === "frontend"
  );
  const backendVideos = videos.filter((video) => video.category === "backend");
  const mobileVideos = videos.filter((video) => video.category === "mobile");

  return (
    <Container className={styles.container}>
      <Category tech="front end" btnColor="#6BD1FF" dataTech={frontendVideos} />
      <Category tech="back end" btnColor="#00C86F" dataTech={backendVideos} />
      <Category tech="mobile" btnColor="#FFBA05" dataTech={mobileVideos} />
    </Container>
  );
};
