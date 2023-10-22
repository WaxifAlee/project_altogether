"use client";

import style from "./Form.module.scss";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const [messageLength, setMessageLength] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation of inputs (for now only email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(form.current.from_email.value);

    const TEMP_ID = "template_eqe4q61";
    const PUBLIC_ID = "61cUvsJKRNNtUVYhE";
    const SERVICE_ID = "service_qmm9t5p";

    if (isEmailValid && messageLength < 300) {
      emailjs.sendForm(SERVICE_ID, TEMP_ID, form.current, PUBLIC_ID).then(
        (result) => {
          if (result.text === "OK") alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Some error occoured, please try again later!");
        }
      );
    } else {
      alert("Invalid Email or Message Is Too Long! ⚠ ");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.form}>
      <div>
        <label htmlFor="from_name">
          Name <sup>*</sup>
        </label>
        <input
          placeholder="Muhammad Ali"
          required
          type="text"
          name="from_name"
        />
      </div>

      <div>
        <label htmlFor="from_email">
          E-mail <sup>*</sup>
        </label>
        <input
          placeholder="muhammad.ali@example.com"
          required
          type="text"
          name="from_email"
        />
      </div>

      <div>
        <label htmlFor="subject">
          Subject <sup>*</sup>
        </label>
        <input
          placeholder="I want to donate"
          required
          type="text"
          name="subject"
        />
      </div>

      <div>
        <label htmlFor="from_phone">Phone Number</label>
        <input placeholder="+92312456789" type="number" name="from_phone" />
      </div>

      <label htmlFor="message">
        Message <sup>*</sup>
      </label>
      <textarea
        onChange={(e) => {
          e.preventDefault();
          setMessageLength(e.target.value.length);
        }}
        required
        name="message"
        placeholder="Message"
      />
      <p className={messageLength >= 300 ? style.textRed : style.textGreen}>
        {messageLength}/300
      </p>
      <input
        placeholder=""
        type="submit"
        value="Send Message"
        className={style.submit}
      />
      <br />
      <br />
    </form>
  );
};

export default Form;
