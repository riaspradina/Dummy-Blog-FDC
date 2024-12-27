import Link from "next/link";
import Layout from "../layout/layout";
import classes from "./contact-form.module.css";
import { useState } from "react";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <section className={classes.contact}>
        <h2>You Have a Question? Contact Us</h2>
        <form className={classes.form} onSubmit={sendMessageHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                required
                value={enteredEmail}
                onChange={(event) => setEnteredEmail(event.target.value)}
              ></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={enteredName}
                onChange={(event) => setEnteredName(event.target.value)}
              ></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="message">Your Question</label>
              <textarea
                id="message"
                rows="5"
                required
                value={enteredMessage}
                onChange={(event) => setEnteredMessage(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={classes.actions}>
            <button>Send Question</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
