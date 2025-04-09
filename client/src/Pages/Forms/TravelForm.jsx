import React, { useState } from "react";

export default function TravelInsuranceForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    mobile: "",
    tripFromDate: "",
    tripToDate: "",
    tripFromLocation: "",
    tripToLocation: "",
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
        "https://script.google.com/macros/s/AKfycbxiVyrf2z2mfe_DQPaCCh0P9MvsTVBVTLkMxCQMMOtV6YI1vwivCBh6nWcDmsTXKa6G8Q/exec",
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
          tripFromDate: "",
          tripToDate: "",
          tripFromLocation: "",
          tripToLocation: "",
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
      className="max-w-xl mt-36 mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">
        Travel Insurance Form
      </h2>

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
          <option value="Personal">Personal</option>
          <option value="Group">Group</option>
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
          placeholder="10-digit mobile number"
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Trip From Date</label>
          <input
            type="date"
            name="tripFromDate"
            value={formData.tripFromDate}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Trip To Date</label>
          <input
            type="date"
            name="tripToDate"
            value={formData.tripToDate}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">From Location</label>
          <input
            type="text"
            name="tripFromLocation"
            value={formData.tripFromLocation}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">To Location</label>
          <input
            type="text"
            name="tripToLocation"
            value={formData.tripToLocation}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
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
