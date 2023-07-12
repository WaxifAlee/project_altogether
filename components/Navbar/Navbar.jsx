import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTimes,
  FaBars,
} from "react-icons/fa";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const socialIcons = [
    { icon: <FaInstagram />, link: "https://instagram.com", text: "Instagram" },
    { icon: <FaFacebook />, link: "https://facebook.com", text: "Facebook" },
    { icon: <FaTwitter />, link: "https://twitter.com", text: "Twitter" },
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

  const [navVisibility, setNavVisibility] = useState(false);
  const [active, setActive] = useState("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar__logo_container}>
          <a href="/">
            <Image src="/logo.png" alt="logo" width={200} height={60} />
          </a>
        </div>

        <div className={styles.navbar__navlinks_container}>
          <ul>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className={styles.navbar__navlinks_link}>
                  <Link
                    style={
                      router.pathname === (link === "home" ? "/" : `/${link}`)
                        ? { fontWeight: "bold" }
                        : {}
                    }
                    href={link === "home" ? "/" : `/${link}`}
                  >
                    {link}
                  </Link>
                  <div className={styles.circle}></div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.icons}>
          {navVisibility === true ? (
            <FaTimes onClick={() => setNavVisibility(false)} />
          ) : (
            <FaBars onClick={() => setNavVisibility(true)} />
          )}
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

      <div
        style={
          navVisibility === true ? { display: "block" } : { display: "none" }
        }
        className={styles.navbar__miniNavBar}
      >
        <div className={styles.links_container}>
          <ul>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className={styles.navbar__miniNavBar_links}>
                  <Link href={link === "home" ? "/" : `/${link}`}>
                    {link.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr color="#5f2c01" />
          <div className={styles.navbar__socialMedia_container}>
            <ul>
              {socialIcons.map((item, index) => {
                return (
                  <li key={index} className={styles.navbar__socialMedia_link}>
                    <Link href={item.link}>
                      {item.icon} &nbsp; {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
