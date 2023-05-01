import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const socialIcons = [
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  const navLinks = [
    "home",
    "team",
    "mission",
    "work",
    "volunteer",
    "contact",
    "donate",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar__logo_container}>
          <Image
            src="/logo.png"
            // style={{ marginLeft: -100 }}
            alt="logo"
            width={200}
            height={60}
          />
        </div>

        <div className={styles.navbar__navlinks_container}>
          <ul>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className={styles.navbar__navlinks_link}>
                  <Link href={link === "home" ? "/" : `/${link}`}>{link}</Link>
                  <div className={styles.circle}></div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.navbar__socialMedia_container}>
          <ul>
            {socialIcons.map((item, index) => {
              return (
                <li key={index} className={styles.navbar__socialMedia_link}>
                  <Link href={item.link}>{item.icon}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
