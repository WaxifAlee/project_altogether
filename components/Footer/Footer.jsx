import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {" "}
        AllTogether <b> &copy; 2023 - 24</b>
      </p>

      <p>
        🎨 + 💻:{" "}
        <a href="https://wasifali-portfolio.netlify.app" target={"_blank"}>
          Wasif Ali
        </a>
      </p>
    </footer>
  );
};

export default Footer;
