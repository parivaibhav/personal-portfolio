import React from "react";

function contactus() {
  return (
    <div
      id="contactus"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-[#1A1A1A]"
    >
      <div className="text-5xl font-['FoundersGrotesk X-cond Bold'] text-center mb-10">
        Contact Us
      </div>
      <div className="text-lg font-light text-center px-10 max-w-2xl mb-10">
        We would love to hear from you! Please reach out to us via email or
        phone.
      </div>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Your Mobile Number"
          className="p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2"
          onChange={(e) => {
            const numberRegex = /^[0-9]{10}$/;
            if (!numberRegex.test(e.target.value)) {
              e.target.style.border = "2px solid red";
            } else {
              e.target.style.border = "1px solid gray";
            }
          }}
        />
        <textarea
          placeholder="Your Query"
          rows="4"
          className="p-3 rounded-md border border-gray-300  bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default contactus;
