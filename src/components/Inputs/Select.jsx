import styles from "./Select.module.css";
let option = ["Frontend", "Backend", "Mobile"];

export const Select = () => {
  return (
    <select className={styles.select}>
      {option.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
