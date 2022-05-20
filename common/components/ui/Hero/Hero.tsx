import styles from './Hero.module.scss'

const Hero = () => {

  return (
    <div id='hero' className={styles['hero-container']}>
      <div className={styles['hero-content']}>
        <div className={styles['hero-intro']}>Hi, my name is</div>
        <div className={styles['hero-name']}>
          <h1>RISKI<br/><span>NUGROHO</span><br/>PUTRA</h1>
        </div>
        <div className={styles['hero-separator']} />
        <div className={styles['hero-desc']}>
          <p>
            I&apos;m a Frontend Engineer with about more than 5 years of experience.
            Currently, i&apos;m focused on building advertising generator products at <a href="https://stickearn.com">Stickearn</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero