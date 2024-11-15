"use client";

import emailjs from "@emailjs/browser";
import { SyntheticEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [firstName, setNameFirstName] = useState("");
  const [lastName, setNameLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    // Form data collection
    const formData = new FormData(form.current!);
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Log form data
    console.log("Form Data:", data);

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_TEMPLATE_ID"
        )
        .then(
          (result) => {
            toast("Email send successfully");
          },
          (error) => {
            // console.log(error.text);
            toast("The email service account is invalid");
          }
        );
    }
    // Clear form input values after successful submission
    setNameFirstName("");
    setNameLastName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full bg-[rgba(188,231,12,.1)] border border-stroct-1 my-rounded-20 p-32px">
      <h2 className="my-text-18 text-primary-1 md:text-left text-center gap-mb-16">
        CONTACT INFO
      </h2>
      <h2 className="section-title md:text-left text-center gap-mb-32">
        Get Meeting With us
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="bg-[rgba(255,255,255)] bg-opacity-[0.08] border border-stroct-1 my-rounded-20 p-24px grid sm:gap-4 gap-3 gap-mb-32">
          <div className=" grid md:grid-cols-2 grid-cols-1 sm:gap-4 gap-3 ">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setNameFirstName(e.target.value)}
              className="common-input bg-[rgba(255,255,255,.08)] border-stroct-1 text-white"
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setNameLastName(e.target.value)}
              className="common-input bg-[rgba(255,255,255,.08)] border-stroct-1 text-white"
              required
            />

            <input
              type="number"
              id="number"
              placeholder="Your Number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="appearance-none common-input bg-[rgba(255,255,255,.08)] border-stroct-1 text-white"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="common-input bg-[rgba(255,255,255,.08)] border-stroct-1 text-white"
              required
            />
          </div>

          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            placeholder="Your Message"
            className="common-input bg-[rgba(255,255,255,.08)] border-stroct-1 text-white lg:pb-[152px] md:pb-[140px] sm:pb-[120px] pb-[100px] p-24px"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary font-semibold sm:w-auto w-full"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
