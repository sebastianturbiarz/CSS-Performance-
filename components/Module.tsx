import styles from '../styles/Module.module.css'

export const Module = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}><h1>Header</h1></header>
      <form className={styles.form}>
        <input className={styles.input} />
        <input className={styles.input} />
      </form>
      <footer className={styles.footer}>
        <h1 className={styles.h1}>Footer</h1>
      </footer>
    </section>
  )
}

