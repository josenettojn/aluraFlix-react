import styles from "./NewVideo.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Input } from "../Inputs/Input";
import { Label } from "../Inputs/Label";
import { Select } from "../Inputs/Select";
import { TextArea } from "../Inputs/TextArea";

const NewVideo = () => {
  return (
    <div className={styles.newVideo}>
      <Header />
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>novo video</h1>
          <p className={styles.description}>
            Complete o formulário para criar um novo card de vídeo.
          </p>
        </div>
        <h2 className={styles.subtitle}>Criar Card</h2>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.inputArea}>
              <Label>título</Label>
              <Input placeholder="digite o título do vídeo" />
            </div>
            <div className={styles.inputArea}>
              <Label>categoria</Label>
              <Select />
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputArea}>
              <Label>imagem</Label>
              <Input placeholder="digite a url da imagem" />
            </div>
            <div className={styles.inputArea}>
              <Label>video</Label>
              <Input placeholder="digite a url do video" />
            </div>
          </div>
          <div>
            <Label>descrição</Label>
            <TextArea placeholder="sobre o que é esse vídeo" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default NewVideo;
