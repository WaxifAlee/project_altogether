import Head from "next/head";
import Image from "next/image";

import { Navbar, Hero, Footer } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Al-Together Community</title>
        <meta
          name="description"
          content="Home Page Of The Al-Together Foundation."
        />
      </Head>

      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
