import styles from "./Input.module.css";

export const Input = ({ type = "text", placeholder = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      {...props}
    />
  );
};
