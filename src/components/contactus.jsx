import React from "react";
import { ToastContainer, toast } from "react-toastify";

function contactus() {
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
        onSubmit={(e) => {
          e.preventDefault();
          const emailInput = e.target.elements.email;
          const mobileInput = e.target.elements.mobileNumber;
          const queryInput = e.target.elements.query;

          if (!emailInput.validity.valid) {
            const notifyemail = () => {
              toast.error("Please enter a valid email address.");
              notifyemail.onClose = () => {
                emailInput.focus();
              };
            };
            notifyemail();
            return;
          }

          const numberRegex = /^[0-9]{10}$/;
          if (!numberRegex.test(mobileInput.value)) {
            const notifymobile = () => {
              toast.error("Please enter a valid mobile number.");
              notifymobile.onClose = () => {
                emailInput.focus();
              };
            };
            notifymobile();
            return;
          }

          if (queryInput.value.trim() === "") {
            const notifyqurey = () => {
              toast.error("Please enter your query.");
              notifyqurey.onClose = () => {
                emailInput.focus();
              };
            };
            notifyqurey();
            return;
          }
          if (emailInput.value && mobileInput.value && queryInput.value) {
            const notify = () => {
              toast.success("Your query has been submitted successfully!");
              notify.onClose = () => {
                emailInput.value = "";
                mobileInput.value = "";
                queryInput.value = "";
              };
            };
            notify();
          }
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Your Mobile Number"
          className="p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2"
        />
        <textarea
          name="query"
          placeholder="Your Query"
          rows="4"
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

export default contactus;
