import React, { useState } from "react";

export default function VehicleForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    mobile: "",
    vehicleNumber: "",
    rcImage: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.rcImage) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64File = reader.result.split(",")[1];

      const payload = {
        type: formData.type,
        name: formData.name,
        mobile: formData.mobile,
        vehicleNumber: formData.vehicleNumber,
        filename: formData.rcImage.name,
        mimeType: formData.rcImage.type,
        file: base64File,
      };

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzDBcvro94YCLCVmiLd1ej6JBo_eQkDyYVlRN10TnHUtl3pEGc8IQ4EMOzvgfL-a3MYdQ/exec",
          {
            method: "POST",
            body: new URLSearchParams(payload),
          },
        );

        const result = await response.json();
        console.log(result);

        if (result.status === "success") {
          alert("Form submitted successfully!");
          setFormData({
            type: "",
            name: "",
            mobile: "",
            vehicleNumber: "",
            rcImage: null,
          });
          setPreview(null);
        } else {
          alert("Error: " + result.message);
        }
      } catch (err) {
        console.error("Upload error:", err);
      }
    };

    reader.readAsDataURL(formData.rcImage);
  };

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, rcImage: file }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form submitted:", formData);
  //     // Handle backend upload here
  //   };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-6 sm:mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">Vehicle Registration Form</h2>

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
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Truck">Truck</option>
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
          required
          pattern="[0-9]{10}"
          placeholder="10-digit mobile number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Vehicle Number</label>
        <input
          type="text"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
          className="w-full mt-1 border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Upload RC Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full mt-1"
          required
        />
        {preview && (
          <img
            src={preview}
            alt="RC Preview"
            className="mt-2 h-32 object-contain border rounded"
          />
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
