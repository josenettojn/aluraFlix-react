import styles from "./Label.module.css";

export const Label = ({ children, name }) => {
  return (
    <label className={styles.label} htmlFor={name}>
      {children}
    </label>
  );
};
