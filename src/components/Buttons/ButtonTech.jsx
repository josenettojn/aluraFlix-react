import styles from './ButtonTech.module.css'

const ButtonTech = ({bgColor, children}) => {
  return (
    <button
      className={styles.buttonTech}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {children}
    </button>
  )
}

export default ButtonTech
