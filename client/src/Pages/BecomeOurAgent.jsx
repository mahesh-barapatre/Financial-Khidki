import React, { useState } from "react";

export default function BecomePartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    experience: "",
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
        "https://script.google.com/macros/s/AKfycbwGyCdecNlrVNMYtDONV_ekN_asZa2Fp40XgPsQEq7-wxXKzzuKggZsBXV9Q3JDm83d/exec",
        {
          method: "POST",
          body: form,
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Submitted Successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          experience: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 mt-32 bg-white rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Become Our Agent</h2>

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
          className="w-full border p-2 rounded"
          placeholder="10-digit mobile number"
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
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label className="block font-medium">Experience</label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Experience</option>
          <option value="0 year">0 year</option>
          <option value="1 year">1 year</option>
          <option value="2 year">2 year</option>
          <option value="2+ year">2+ year</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
