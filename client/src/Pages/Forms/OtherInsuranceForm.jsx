import React, { useState } from "react";

export default function OtherInsuranceForm() {
  const [formData, setFormData] = useState({
    insuranceName: "",
    name: "",
    mobile: "",
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
        "https://script.google.com/macros/s/AKfycby6GI0xo1ORYbfxBixUZQRmMncCalZ-X64gQltzpYyaQYnqCJyBZMlGG4-isqukOrT0yQ/exec", // replace with your deployed URL
        {
          method: "POST",
          body: form,
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully! Our Team will contact you soon.");
        setFormData({
          insuranceName: "",
          name: "",
          mobile: "",
          remark: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mt-36 mx-auto p-6 bg-white rounded-lg shadow-2xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Other Insurance Form</h2>

      <div>
        <label className="block font-medium">Name of Insurance</label>
        <input
          type="text"
          name="insuranceName"
          value={formData.insuranceName}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
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
          pattern="[0-9]{10}"
          required
          className="w-full border p-2 rounded"
          placeholder="10-digit mobile number"
        />
      </div>

      <div>
        <label className="block font-medium">Remark</label>
        <textarea
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={3}
          placeholder="Any additional comments"
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
