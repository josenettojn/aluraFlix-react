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
          <h2>novo video</h2>
          <p>Complete o formulário para criar um novo card de vídeo.</p>
        </div>
        <form className={styles.form}>
          <div>
            <Label>título</Label>
            <Input type="text" name="title" id="title" />
          </div>
          <div>
            <Label>categoria</Label>
            <Select />
          </div>
          <div>
            <Label>imagem</Label>
            <Input type="text" name="title" id="title" />
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
