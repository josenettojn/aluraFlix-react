import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./Style.css";
import { Label } from "../Inputs/Label";
import { Input } from "../Inputs/Input";
import { Select } from "../Inputs/Select";
import { TextArea } from "../Inputs/TextArea";
import ButtonTech from "../Buttons/ButtonTech";
import { useVideos } from "../../context/VideoContext";

const DialogDemo = ({ videoId }) => {
  const { videos, updateVideo } = useVideos();
  const [video, setVideo] = useState({
    title: "",
    imageUrl: "",
    videoUrl: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    const videoToEdit = videos.find((video) => video.id === videoId);
    if (videoToEdit) {
      setVideo(videoToEdit);
    }
  }, [videoId, videos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo((prevVideo) => ({
      ...prevVideo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo(video);
  };
  const handleClearInput = () => {
    setVideo({
      title: "",
      imageUrl: "",
      videoUrl: "",
      category: "",
      description: "",
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="ButtonEditar">EDITAR</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">EDITAR CARD</Dialog.Title>
          <Dialog.Description className="DialogDescription"></Dialog.Description>
          <form onSubmit={handleSubmit}>
            <fieldset className="Fieldset">
              <div className="Field">
                <Label>Título</Label>
                <Input
                  name="title"
                  value={video.title}
                  onChange={handleChange}
                  placeholder="o que é javascript"
                />
              </div>
              <div className="Field">
                <Label>Categoria</Label>
                <Select
                  name="category"
                  value={video.category}
                  onChange={handleChange}
                />
              </div>
              <div className="Field">
                <Label>Imagem</Label>
                <Input
                  name="imageUrl"
                  value={video.imageUrl}
                  onChange={handleChange}
                  placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..."
                />
              </div>
              <div className="Field">
                <Label>Video</Label>
                <Input
                  name="videoUrl"
                  value={video.videoUrl}
                  onChange={handleChange}
                  placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.."
                />
              </div>
              <div className="Field">
                <TextArea
                  name="description"
                  value={video.description}
                  onChange={handleChange}
                  placeholder="lorem ipsum blah blah blah"
                />
              </div>
              <div className="Buttons">
                <ButtonTech type="submit">Guardar</ButtonTech>
                <ButtonTech onClick={handleClearInput}>Limpar</ButtonTech>
              </div>
            </fieldset>
          </form>
          <div>
            <Dialog.Close asChild></Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
