import styles from "./Input.module.css";

export const Input = (type = "text", { ...props }) => {
  return <input type={type} {...props} className={styles.input} />;
};
