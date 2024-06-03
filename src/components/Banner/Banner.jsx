import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.banner} style={{ backgroundImage: 'url(/images/banner.png)' }}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.text}>
          <button>front end</button>
          <h1>SEO com React</h1>
          <p>{`Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!`}</p>
        </div>

        <img src="/images/banner.png" alt="banner" />
        </div>
      </div>
    </div>
  )
}

export default Banner
