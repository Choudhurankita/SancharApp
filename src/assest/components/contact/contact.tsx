import React, { useState } from "react";

const Contact: React.FC = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "ae6308a5-a75f-4a0d-a5b2-dfdc5ea56397");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.currentTarget.reset();
    } else {
      setResult("Something went wrong!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Contact Us
      </h2>

      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        <p className="text-sm text-gray-600">{result}</p>

      </form>

    </div>
  );
};

export default Contact;