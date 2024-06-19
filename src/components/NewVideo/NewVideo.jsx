import styles from "./NewVideo.module.css";
import { Input } from "../Inputs/Input";
import { Label } from "../Inputs/Label";
import { Select } from "../Inputs/Select";
import { TextArea } from "../Inputs/TextArea";
import ButtonTech from "../Buttons/ButtonTech";
import { useState } from "react";
import { useVideos } from "../../context/VideoContext";
import { useNavigate } from "react-router-dom";

const NewVideo = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { addVideo } = useVideos();
  const navigate = useNavigate();

  const handleSendVideo = async (e) => {
    e.preventDefault();

    const newVideo = {
      title,
      imageUrl,
      url: videoUrl,
      category,
      description,
    };

    try {
      const response = await fetch("http://localhost:5000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVideo),
      });

      if (response.ok) {
        alert("Vídeo criado com sucesso!");
        addVideo(newVideo);
        handleClearInputs();

        navigate("/");
      } else {
        console.error("Erro ao enviar o vídeo:", response.statusText);
        alert("Erro ao criar o vídeo.");
      }
    } catch (error) {
      console.error("Erro ao enviar o vídeo:", error);
      alert("Erro ao criar o vídeo.");
    }
  };

  const handleClearInputs = () => {
    setTitle("");
    setCategory("");
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
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
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
            <ButtonTech onClick={handleClearInputs}>Limpar</ButtonTech>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewVideo;
