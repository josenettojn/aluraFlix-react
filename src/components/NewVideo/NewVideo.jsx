import styles from "./NewVideo.module.css";
import { Input } from "../Inputs/Input";
import { Label } from "../Inputs/Label";
import { Select } from "../Inputs/Select";
import { TextArea } from "../Inputs/TextArea";
import ButtonTech from "../Buttons/ButtonTech";
import { useState } from "react";

const NewVideo = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSendVideo = (e) => {
    e.preventDefault();
    console.log(title, imageUrl, videoUrl, description);
    console.log("enviado");
  };

  const handleClearInputs = (e) => {
    e.preventDefault();
    setTitle("");
    setImageUrl("");
    setVideoUrl("");
    setDescription("");
  };
  return (
    <div className={styles.newVideo}>
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
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="digite o título do vídeo"
              />
            </div>
            <div className={styles.inputArea}>
              <Label>categoria</Label>
              <Select />
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputArea}>
              <Label>imagem</Label>
              <Input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="digite a url da imagem"
              />
            </div>
            <div className={styles.inputArea}>
              <Label>video</Label>
              <Input
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="digite a url do video"
              />
            </div>
          </div>
          <div>
            <Label>descrição</Label>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="sobre o que é esse vídeo"
            />
          </div>
          <div className={styles.buttons}>
            <ButtonTech onClick={(e) => handleSendVideo(e)}>Guardar</ButtonTech>
            <ButtonTech onClick={(e) => handleClearInputs(e)}>
              Limpar
            </ButtonTech>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewVideo;
