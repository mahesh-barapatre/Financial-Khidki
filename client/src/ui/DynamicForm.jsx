import React, { useState } from "react";

const DynamicForm = ({
  fields,
  onSubmit,
  title = "Contact Us",
  submitText = "Submit",
}) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit(formData);

    setTimeout(() => {
      setSubmitted(false);
      setFormData(initialState);
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center tracking-tight">
          {title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => {
            const commonProps = {
              id: field.name,
              name: field.name,
              value: formData[field.name],
              onChange: handleChange,
              placeholder: field.placeholder || "",
              required: field.required ?? true,
              className:
                "w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black",
            };

            return (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  {field.label}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    rows={field.rows || 4}
                    {...commonProps}
                    className={`${commonProps.className} resize-none`}
                  />
                ) : field.type === "radio" ? (
                  <div className="flex gap-4">
                    {field.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <input
                          type="radio"
                          name={field.name}
                          value={option.value}
                          checked={formData[field.name] === option.value}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                ) : field.type === "select" ? (
                  <select {...commonProps}>
                    <option value="" disabled>
                      -- Select an option --
                    </option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input type={field.type || "text"} {...commonProps} />
                )}
              </div>
            );
          })}

          <button
            type="submit"
            disabled={submitted}
            className={`w-full py-2 text-sm font-medium text-white tracking-wide transition-colors duration-200 ${
              submitted
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-neutral-800"
            }`}
          >
            {submitted ? "Submitted" : submitText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DynamicForm;
