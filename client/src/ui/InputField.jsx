import React from "react";

const InputField = ({ field, setField, name }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-600"
      >
        {name}
      </label>
      <input
        value={field}
        onChange={(e) => setField(e.target.value)}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default InputField;
