import React from "react";
import styles from "./MemberCard.module.scss";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaQuoteLeft } from "react-icons/fa";

const MemberCard = ({ member }) => {
  return (
    <div className={`${styles.memberCardContainer}`}>
      <div className={styles.imageContainer}>
        <Image
          src={member.displayPicture}
          alt="User Image"
          width={120}
          height={120}
          priority={true}
        />
      </div>

      <div className={styles.infoContainer}>
        <h1>{member.name}</h1>
        <h4>- {member.title} -</h4>

        <p>
          <i>
            <FaQuoteLeft />
          </i>
          {member.description}
        </p>

        <h3>
          Member Since: <span>{member.doj}</span>
        </h3>
        <h3>
          <FaPhone /> &nbsp; {member.phoneNumber}
        </h3>

        <h3>
          <FaEnvelope /> &nbsp; {member.email}
        </h3>

        <a href={`mailto:${member.email}`}>Contact Me</a>
      </div>
    </div>
  );
};

export default MemberCard;
