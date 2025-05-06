import styles from '../Styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={`${styles.flex} ${styles.flexCol} md:${styles.flexRow}`}>
            <div className={styles.mb4}>
              <p className="text-sm text-white">
                © 2025 DançaRitmo. Todos os direitos reservados.
              </p>
            </div>
            <div className={styles.spaceX6}>
              <a
                href="#"
                className="text-sm text-white hover:text-[#1A535C] transition-colors duration-300 cursor-pointer"
              >
                Termos de Uso
              </a>
              <a
                className="text-sm text-white hover:text-[#1A535C] transition-colors duration-300 cursor-pointer"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-white hover:text-[#1A535C] transition-colors duration-300 cursor-pointer"
              >
                Suporte
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;