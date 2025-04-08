import React, { useState } from "react";

export default function CreateTicketForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    mobile: "",
    reason: "",
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
        "https://script.google.com/macros/s/AKfycbwIik1cj4pkSnMSm4adiQ2qPt3ui905C5VQYs2YzXO5m9z5v1s-vEe8Wh3xF3DjQPx7/exec",
        {
          method: "POST",
          body: form,
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Ticket Created Successfully!");
        setFormData({
          type: "",
          name: "",
          mobile: "",
          reason: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Create Support Ticket</h2>

      <div>
        <label className="block font-medium">Type of Product</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Type</option>
          <option value="Bike">Bike</option>
          <option value="Cars">Cars</option>
          <option value="Commercial Vehicle">Commercial Vehicle</option>
          <option value="Health Insurance">Health Insurance</option>
          <option value="Life Insurance">Life Insurance</option>
          <option value="Personal Accidental">Personal Accidental</option>
          <option value="Term Insurance">Term Insurance</option>
          <option value="SME">SME</option>
          <option value="Travel">Travel</option>
          <option value="Others">Others</option>
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
        <label className="block font-medium">Reason (Issue)</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows="3"
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700"
      >
        Submit Ticket
      </button>
    </form>
  );
}
