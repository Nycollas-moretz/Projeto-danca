import styles from '../Styles/Header.module.css';

const Header: React.FC = () => {
    return (
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <h1 className={styles.headerTitle}>DançaRitmo</h1>
        </div>
        <nav className={styles.nav}>

          <a
            href="https://readdy.ai/home/03655a12-0106-408f-ba7d-39b4219abb7a/0b56f4ca-1db8-4dd7-92df-dec25202264b"
            data-readdy="true"
            className={styles.navLink}
          >
            Início
          </a>
          <a
            href="#"
            className={styles.navLink}
          >
            Sobre o Curso
          </a>
          <a
            href="#"
            className={styles.navLink}
          >
            Depoimentos
          </a>
          <a
            href="#"
            className={styles.navLink}
          >
            Contato
          </a>
        </nav>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <a href="../">
              Voltar ao Site
              </a>
          </button>
        </div>
      </header>
    );
};

export default Header;