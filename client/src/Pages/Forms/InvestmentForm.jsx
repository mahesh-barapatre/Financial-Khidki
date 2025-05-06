import React, { useState } from "react";

export default function InvestmentForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    mobile: "",
    email: "",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwcX_eCVzkYFsoQ5A58BXQdBakShyCLkn8OIVa9CfCjMNIBV9VhUAHDqMMcO7Faf4pW/exec",
        {
          method: "POST",
          body: form,
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully! Our Team will contact you soon.");
        setFormData({
          type: "",
          name: "",
          mobile: "",
          email: "",
          remark: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mt-36 mx-auto p-6 bg-white shadow-2xl rounded-lg space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Investment Form</h2>

      <div>
        <label className="block font-medium">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Type</option>
          <option value="Open Demat">Open Demat</option>
          <option value="Mutual Fund">Mutual Fund</option>
          <option value="Fixed Deposit">Fixed Deposit</option>
          <option value="Loan">Loan</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          placeholder="10-digit number"
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Remark</label>
        <textarea
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          rows="3"
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  );
}
