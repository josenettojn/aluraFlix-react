import styles from "./TextArea.module.css";

export const TextArea = ({ placeholder }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      name=""
      id=""
    ></textarea>
  );
};
