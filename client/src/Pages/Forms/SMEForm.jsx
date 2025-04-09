import React, { useState } from "react";

export default function SMEInsuranceForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    mobile: "",
    pincode: "",
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
        "https://script.google.com/macros/s/AKfycbx4Km29-UGlkXK5TIVA9z1gpL0Sxi-67yOk3BaZ6lWG6Y6i6jpBMECz9L03JoHhOUGdXQ/exec",
        {
          method: "POST",
          body: form,
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setFormData({
          type: "",
          name: "",
          mobile: "",
          pincode: "",
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
      className="max-w-lg mt-36 mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">SME Insurance Form</h2>

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
          <option value="Fire Insurance">Fire Insurance</option>
          <option value="Home Insurance">Home Insurance</option>
          <option value="Specific Marine">Specific Marine</option>
          <option value="CPM">CPM</option>
          <option value="Other">Other</option>
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
        <label className="block font-medium">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
          pattern="[0-9]{6}"
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
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
