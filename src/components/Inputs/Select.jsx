import styles from "./Select.module.css";
let option = ["Frontend", "Backend", "Mobile"];

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
