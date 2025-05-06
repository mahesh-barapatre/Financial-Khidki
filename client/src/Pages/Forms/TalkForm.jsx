import React, { useState } from "react";

const TalkForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    remark: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx89HHvcCyqlM1FN7c7GGBUxONmlMYroOjiKZ8L8T6cEnoXZnuIqa3e8u6WYxx8w7E6Wg/exec"; // Replace with your Apps Script URL

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      alert("Thank You! Our Team Will contact you soon.");
      setFormData({ name: "", mobile: "", remark: "" });
    } catch (error) {
      alert("Error submitting form!");
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 mt-40  shadow-md rounded-xl bg-white"
    >
      <h2 className="text-xl font-semibold mb-4">Let's Talk</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <textarea
        name="remark"
        placeholder="What you want to talk about?"
        value={formData.remark}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
        rows={4}
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default TalkForm;
