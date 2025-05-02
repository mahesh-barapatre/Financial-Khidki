import React, { useState } from "react";

export default function InsuranceForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    mobile: "",
    dob: "",
    pincode: "",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbwrK2q4IsTGiCTVs5LEpYVakdLq-u4hBPPUK16B9VSIumYFXp--JlLO2A3gZXUFZGSVmQ/exec"; // Replace with your actual Apps Script URL

    const formBody = new URLSearchParams(formData);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      const result = await res.json();
      if (result.status === "success") {
        alert("Data submitted successfully!");
        setFormData({
          type: "",
          name: "",
          mobile: "",
          dob: "",
          pincode: "",
          remark: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Submission failed: " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mt-36 mx-auto p-6 bg-white shadow-2xl rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">Insurance Form</h2>

      <div>
        <label className="block text-sm font-medium">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full mt-1 border p-2 rounded"
          required
        >
          <option value="">Select Type</option>
          <option value="Health Insurance">Health Insurance</option>
          <option value="Personal Accidental">Personal Accidental</option>
          <option value="Term Insurance">Term Insurance</option>
          <option value="Life Insurance">Life Insurance</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full mt-1 border p-2 rounded"
          pattern="[0-9]{10}"
          placeholder="10-digit mobile number"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full mt-1 border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full mt-1 border p-2 rounded"
          pattern="[0-9]{6}"
          placeholder="6-digit pincode"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Remark</label>
        <input
          type="text"
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          className="w-full mt-1 border p-2 rounded"
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
