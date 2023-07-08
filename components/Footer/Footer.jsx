import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        🎨 + 💻:{" "}
        <a href="https://wasifali-portfolio.netlify.app" target={"_blank"}>
          Wasif Ali
        </a>
      </p>

      <h3 className={styles.text}>
        {" "}
        <b>Al-Together &copy; 2023- </b>
      </h3>

      <p>
        Code At:{" "}
        <a
          href="https://github.com/WaxifAlee/project_altogether"
          target={"_blank"}
        >
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
