import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./Style.css";
import { Label } from "../Inputs/Label";
import { Input } from "../Inputs/Input";
import { Select } from "../Inputs/Select";
import { TextArea } from "../Inputs/TextArea";
import ButtonTech from "../Buttons/ButtonTech";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="ButtonEditar">EDITAR</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">EDITAR CARD</Dialog.Title>
        <Dialog.Description className="DialogDescription"></Dialog.Description>
        <fieldset className="Fieldset">
          <div className="Field">
            <Label>Título</Label>
            <Input placeholder="o que é javascript" />
          </div>
          <div className="Field">
            <Label>Categoria</Label>
            <Select />
          </div>
          <div className="Field">
            <Label>Imagem</Label>
            <Input placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..." />
          </div>
          <div className="Field">
            <Label>Video</Label>
            <Input placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.." />
          </div>
          <div className="Field">
            <TextArea placeholder="lorem ipsum blah blah blah" />
          </div>
          <div className="Buttons">
            <ButtonTech>Guardar</ButtonTech>
            <ButtonTech>Limpar</ButtonTech>
          </div>
        </fieldset>
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

export default DialogDemo;
