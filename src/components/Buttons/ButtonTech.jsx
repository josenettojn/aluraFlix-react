import styles from "./ButtonTech.module.css";

const ButtonTech = ({ bgColor, borderColor, children, ...props }) => {
  return (
    <button
      className={styles.buttonTech}
      style={{
        backgroundColor: `${bgColor}`,
        border: `1px solid ${borderColor}`,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonTech;
