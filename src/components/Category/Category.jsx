import styles from './Category.module.css'
import ButtonTech from '../Buttons/ButtonTech'
import Card from '../Card/Card'
import Container from '../Container/Container'
import PropTypes from 'prop-types';

const Category = ({tech, btnColor, dataTech}) => {

  console.log('dataTech', dataTech)
  return (
    <Container>
      <section className={styles.category}>
        <ButtonTech bgColor={btnColor}>{tech}</ButtonTech>
        <div className={styles.cards}>
          {dataTech ? (
            dataTech.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                url={item.url}
              />
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </section>
    </Container>
  )
}
Category.propTypes = {
  dataTech: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Category
