import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactMe = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (document.querySelector(".contactme-input-name").value === "") {
      document.querySelector(".contactme-input-name").style.borderColor = "red";
      document.querySelector(
        ".name-warning"
      ).innerHTML = `<p class="name-warning" style="color: red">Please enter your name</p>`;
      return;
    }

    if (document.querySelector(".contactme-input-email").value === "") {
      document.querySelector(".contactme-input-email").style.borderColor =
        "red";
      document.querySelector(
        ".email-warning"
      ).innerHTML = `<p class="name-warning" style="color: red">Please enter email</p>`;
      return;
    }

    if (document.querySelector(".contactme-input-message").value === "") {
      document.querySelector(".contactme-input-message").style.borderColor =
        "red";
      document.querySelector(
        ".message-warning"
      ).innerHTML = `<p class="name-warning" style="color: red">Please enter message</p>`;
      return;
    }

    emailjs
      .sendForm(
        "service_pm3gng3",
        "template_9f2o618",
        form.current,
        "NETcqXlKoBtJNOguh"
      )
      .then(
        (result) => {
          setShowPopup(true);
          document.querySelector(".contactme-input-name").value = "";
          document.querySelector(".contactme-input-email").value = "";
          document.querySelector(".contactme-input-message").value = "";
          setTimeout(() => setShowPopup(false), 3000);
        },
        (error) => {
          console.log(error.text);
          document.querySelector(
            ".reCAPTCHA-warning"
          ).innerHTML = `<p className="reCAPTCHA-warning" style="color: red">Something wrong, make sure that "I'm not a robot" is checked.</p>`;
        }
      );
  };

  return (
    <div className="contactme-wrapper">
      <div className="contactme-title-container ">
        <h1 className="font-mono text-2xl font-extrabold">CONTACT ME</h1>
      </div>
      <div className="contactme-form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="contactme-input-name mb-3"
            placeholder="Name"
          />
          <p className="name-warning"></p>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="contactme-input-email mb-3"
            placeholder="Email"
          />
          <p className="email-warning"></p>
          <label>Message</label>
          <textarea
            name="message"
            className="contactme-input-message mb-3"
            placeholder="Message"
          />
          <p className="message-warning"></p>
          <div className="reC-submit-container">
            <ReCAPTCHA
              sitekey="6LfSXBIlAAAAADbT7b6MECS6BxLd3QEZipxpqM9l"
              className="captcha"
            />
            <input
              type="submit"
              value="Send"
              className="contactme-input-submit"
            />
          </div>
          <p className="reCAPTCHA-warning"></p>
        </form>

        {showPopup && (
          <div className="popup-container" onClick={() => setShowPopup(false)}>
            <div className="popup">
              <h3>Message Sent!</h3>
              <p>Thank you for your message.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
