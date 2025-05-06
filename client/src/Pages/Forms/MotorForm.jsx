import React, { useState } from "react";

export default function MotorForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    mobile: "",
    vehicleNumber: "",
    remark: "",
    rcImage: null,
  });

  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    if (!formData.rcImage) {
      setMessage("Please upload an image or PDF.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1];

      const payload = new URLSearchParams({
        type: formData.type,
        name: formData.name,
        mobile: formData.mobile,
        vehicleNumber: formData.vehicleNumber,
        remark: formData.remark,
        filename: formData.rcImage.name,
        mimeType: formData.rcImage.type,
        file: base64Data,
      });

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwFcwBz5gAvES5gg8NNSuzvmTpoMg-3-UcDKB15pXvF59KLfMDF9ZhmZA5fJzrjywWY/exec",
          {
            method: "POST",
            body: payload,
          },
        );

        const result = await response.json();
        if (result.status === "success") {
          setMessage("");
          alert("Form submitted successfully! Our Team will contact you soon.");
          setFormData({
            type: "",
            name: "",
            mobile: "",
            vehicleNumber: "",
            remark: "",
            rcImage: null,
          });
          setPreview(null);
        } else {
          setMessage("Submission failed: " + result.message);
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("Network error.");
      }
    };

    reader.readAsDataURL(formData.rcImage);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mt-36 mx-auto p-6 bg-white shadow-2xl rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">Vehicle Registration Form</h2>

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      >
        <option value="">Select Type</option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Commercial Vehicle">Commercial Vehicle</option>
      </select>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        pattern="[0-9]{10}"
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="vehicleNumber"
        value={formData.vehicleNumber}
        onChange={handleChange}
        placeholder="Vehicle Number"
        required
        className="w-full border p-2 rounded"
      />
      <div className="text-gray-500">Old Insurance/RC Copy</div>
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={handleImageChange}
        required
        className="w-full"
      />
      {preview && (
        <img
          src={preview}
          alt="RC Preview"
          className="mt-2 h-32 object-contain border rounded"
        />
      )}
      <textarea
        name="remark"
        value={formData.remark}
        onChange={handleChange}
        placeholder="Remark (optional)"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
      >
        Submit
      </button>

      {message && (
        <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
      )}
    </form>
  );
}
