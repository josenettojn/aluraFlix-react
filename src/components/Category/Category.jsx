import styles from './Category.module.css'
import ButtonTech from '../Buttons/ButtonTech'
import Card from '../Card/Card'
import Container from '../Container/Container'

const Category = () => {
  return (
    <Container>
      <section className={styles.category}>
        <ButtonTech bgColor='#00C86F'>Font End</ButtonTech>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </Container>
  )
}

export default Category
