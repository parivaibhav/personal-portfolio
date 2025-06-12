import React from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile);
  const validateMessage = (message) => message.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailInput = form.elements.email;
    const mobileInput = form.elements.mobileNumber;
    const queryInput = form.elements.query;

    if (!validateEmail(emailInput.value)) {
      toast.error("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    if (!validateMobile(mobileInput.value)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      mobileInput.focus();
      return;
    }

    if (!validateMessage(queryInput.value)) {
      toast.error("Please enter your query.");
      queryInput.focus();
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_au65o8k", // Your EmailJS service ID
        "template_g15s0mf", // Your EmailJS template ID
        {
          to_email: emailInput.value, // dynamic receiver email from form
          mobile: mobileInput.value,
          query: queryInput.value,
          name: emailInput.value.split("@")[0],
          time: new Date().toLocaleString(),
        },
        "eVeaNHbIWBKSG7gOs" // Your EmailJS public key
      )
      .then(() => {
        toast.success("Your query has been submitted successfully!");
        form.reset(); // Clear form
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div
      id="contactus"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
    >
      <div className="text-5xl font-['FoundersGrotesk X-cond Bold'] text-center mb-10">
        Contact Us
      </div>
      <div className="text-lg font-light text-center px-10 max-w-2xl mb-10">
        We would love to hear from you! Please reach out to us via email or
        phone.
      </div>
      <form
        className="flex flex-col gap-4 w-full max-w-md md:px-10 px-5 py-10 bg-gray-800 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Your Mobile Number"
          required
          className="p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2"
        />
        <textarea
          name="query"
          placeholder="Your Query"
          rows="4"
          required
          className="p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default ContactUs;
