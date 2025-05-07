import React, { useState } from "react";

const ContactForm = () => {
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
      "https://script.google.com/macros/s/AKfycbwBQBBuZk7vSBbVAlPfhVv-yhl3SDtnoZlaBzd_HoHRyS4imdECVOBahv1FTgHKgCKfpg/exec"; // Replace with your actual URL

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setFormData({ name: "", mobile: "", remark: "" });
      } else {
        alert("Submission failed!");
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md w-11/12 mx-auto mt-10 p-10 shadow-lg bg-white md:w-1/3 rounded-lg"
    >
      <div className="font-extralight text-lg">Request a Callback</div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <textarea
        name="remark"
        placeholder="What you want to talk about?"
        value={formData.remark}
        onChange={handleChange}
        required
        className="p-2 border rounded"
        rows="3"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
