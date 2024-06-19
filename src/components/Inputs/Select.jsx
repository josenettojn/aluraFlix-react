import styles from "./Select.module.css";
let option = ["frontend", "backend", "mobile"];

export const Select = ({ value, onChange }) => {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      <option value="">Selecione uma categoria</option>
      {option.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
