import Head from "next/head";

import styles from "../styles/Team.module.scss";
import { Navbar, Footer, MemberCard } from "../components";
import pictureEshal from "../assets/eshalejaz.png";
import pictureWasif from "../assets/wasif.jpg";
import pictureBadar from "../assets/badarmushtaq.jpeg";

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
    pictureWasif,
    "Wasif Ali",
    "Founder",
    "My moral belief is that humanity was created to help humanity in the hour of need. If you are born to be a giver, play your role.",
    "May, 2022",
    "+92 311-5499873",
    "wasifali719@yahoo.com"
  );

  const eshal = new Member(
    pictureEshal,
    "Eshal Ejaz",
    "Funds Manager",
    "No one has ever become poor from giving. Spend on others and blessings will continue upon you.",
    "May, 2022",
    "+92 334-7887667",
    "eshalawan012@gmail.com"
  );

  const badar = new Member(
    pictureBadar,
    "Badar Mushtaq",
    "Distr. Manager",
    "No one is useless in this world who lightens the burdens of another. Alone we can do little, together we have no limits.",
    "June, 2022",
    "+92 334-8844423",
    "badar8424@gmail.com"
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
            <div key={index} className={styles.card}>
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default team;
