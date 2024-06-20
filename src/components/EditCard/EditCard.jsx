import styles from "./EditCard.module.css";
import { Input } from "../Inputs/Input";
import { Label } from "../Inputs/Label";
import { TextArea } from "../Inputs/TextArea";
import { Select } from "../Inputs/Select";
import ButtonTech from "../Buttons/ButtonTech";

export const EditCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.close}>X</div>
      <div className={styles.form}>
        <h1 className={styles.title}>Editar Card</h1>
        <div>
          <Label>Título</Label>
          <Input placeholder="o que é javascript" />
        </div>
        <div>
          <Label>Categoria</Label>
          <Select />
        </div>
        <div>
          <Label>Imagem</Label>
          <Input placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..." />
        </div>
        <div>
          <Label>Video</Label>
          <Input placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.." />
        </div>
        <div>
          <TextArea placeholder="lorem ipsum blah blah blah" />
        </div>
        <div className={styles.buttons}>
          <ButtonTech>Guardar</ButtonTech>
          <ButtonTech>Limpar</ButtonTech>
        </div>
      </div>
    </div>
  );
};
