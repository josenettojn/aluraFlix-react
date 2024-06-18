import styles from "./TextArea.module.css";

export const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={styles.textarea}
      placeholder={placeholder}
    ></textarea>
  );
};
