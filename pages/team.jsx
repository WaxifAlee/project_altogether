import React from "react";
import Head from "next/head";

import styles from "../styles/Team.module.scss";
import { Navbar, Footer, MemberCard } from "../components";

class Member {
  constructor(
    displayPicture,
    name,
    title,
    description,
    doj,
    phoneNumber,
    email
  ) {
    this.displayPicture = displayPicture;
    this.name = name;
    this.title = title;
    this.description = description;
    this.doj = doj;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

const team = () => {
  const wasif = new Member(
    "/../public/assets/wasif.jpg",
    "Wasif Ali",
    "Founder",
    "My moral belief is that humanity was created to help humanity in the hour of need. If you are born to be a giver, play your role.",
    "May, 2022",
    "+92 311-5499873",
    "wasifali719@yahoo.com"
  );

  const eshal = new Member(
    "/../public/assets/eshalejaz.png",
    "Eshal Ejaz",
    "Funds Manager",
    "No one has ever become poor from giving. Spend on others and blessings will continue upon you.",
    "May, 2022",
    "+92 3334-7887667",
    "eshalawan012@gmail.com"
  );

  const badar = new Member(
    "/../public/assets/badarmushtaq.jpeg  ",
    "Badar Mushtaq",
    "Distr. Manager",
    "My moral belief is that humanity was created to help humanity in the hour of need. If you are born to be a giver, play your role.",
    "June, 2022",
    "+92 311-5499873",
    "wasifali719@yahoo.com"
  );

  const members = [wasif, eshal, badar];

  return (
    <div>
      <Head>
        <title>Team Members</title>
        <meta
          name="description"
          content="Team Members of our organization. We work together to bring out the best for our community."
        />
      </Head>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>Our Team</h2>
        </div>

        <div className={styles.cardsContainer}>
          {members.map((member, index) => (
            <div className={styles.card}>
              <MemberCard key={index} member={member} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default team;
