import React from "react";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        <h4>We Connect</h4>

        <h2 style={{ backgroundColor: "rgba(233, 233, 233, 0.25)" }}>
          PEOPLE WHO GIVE <br /> AND <br /> PEOPLE WHO NEED 🤝
        </h2>

        <a href="#" style={{ backgroundColor: "#52734d" }}>
          DONATE AS LOW AS 100 PKR
        </a>
      </div>

      <div
        style={{
          width: "2px",
          backgroundColor: "white",
          height: "43vh",
        }}
      ></div>

      <div className={styles.card_container}>
        <h4>We Need</h4>

        <h2
          style={{
            backgroundColor: "rgba(82, 115, 77, 0.80)",
            color: "#FEFFDE",
          }}
        >
          PEOPLE WHO ARE <br /> WILLING <br /> TO MAKE AN IMPACT 🌎
        </h2>

        <a href="#" style={{ backgroundColor: "#FEFFDE", color: "#7B936F" }}>
          VOLUNTEER AS A MEMBER
        </a>
      </div>
    </div>
  );
};

export default Hero;
