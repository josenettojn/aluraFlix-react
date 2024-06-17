import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { CategoryContainer } from './components/Category/CategoryContainer'

function Home() {

  return (
    <>
      <Header />
      <Banner />
      <CategoryContainer />
      <Footer />
    </>
  )
}

export default Home
