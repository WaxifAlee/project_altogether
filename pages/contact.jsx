import Head from "next/head";
import Image from "next/image";

import logo from "../public/logo.png";

import { Form, Navbar, Footer } from "../components";
import styles from "./contact.module.scss";

const contact = () => {
  return (
    <>
      <Head>
        <title>Team Members</title>
        <meta
          name="description"
          content="Team Members of our organization. We work together to bring out the best for our community."
        />
      </Head>
      <Navbar />
      <section className={styles.contactPage}>
        <h2 className={styles.pageTitle}> Contact Us </h2>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <Form />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default contact;
