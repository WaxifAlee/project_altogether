import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faMailReply } from "@fortawesome/free-solid-svg-icons";

import { Form, Navbar, Footer } from "../components";
import styles from "./contact.module.scss";
import contactIllustration from "../assets/contactimg.jpg";

const contact = () => {
  const contactCardsData = [
    {
      icon: <FontAwesomeIcon icon={faMobile} />,
      text: "+92 311 549 9873",
    },
    {
      icon: <FontAwesomeIcon icon={faMailReply} />,
      text: "altogethercharity@gmail.com",
    },
    {
      icon: <FaInstagram />,
      text: "instagram.com/altogether/",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in contact with us. You can contact us by either filling out the form or sending an email or message on the given addresses manually."
        />
      </Head>
      <section className={styles.section}>
        <Navbar />

        <motion.div className={styles.pageContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={styles.contactInfoContainer}
          >
            <div>
              <Image
                src={contactIllustration}
                width={520}
                height={520}
                alt="Contact Us"
              />
            </div>

            <div className={styles.text}>
              <h2>- Contact Us -</h2>
              <br />

              {contactCardsData.map((card) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className={styles.contactCard}
                >
                  {card.icon}
                  <p>{card.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className={styles.formContainer}>
            <br />
            <h1>- Fill The Form -</h1>
            <br />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Form />
            </motion.div>
          </div>
        </motion.div>
        <Footer />
      </section>
    </>
  );
};

export default contact;
