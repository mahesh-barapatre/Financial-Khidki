import React from "react";
import DynamicForm from "../../ui/DynamicForm";
import { healthInsuranceField } from "./HealthInsurance";
// import { submitToGoogleScript } from "./submit";

const HealthInsurance = () => {
  // const handleSubmit = (field) => {
  //   console.log("submitted successfully");
  //   submitToGoogleScript(field)
  //     .then((res) => alert("Response: " + res))
  //     .catch((err) => console.error("Error:", err));
  //   console.log(field);
  // };
  const handleFormSubmit = async (data) => {
    const formData = new URLSearchParams();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxJg083rSPWJeIRz1y4QdKSgM1uqJ7WPRKoznhdwg2HrMUeF-ThcsDFSgDo2DGGOGwN/exec",
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <DynamicForm
        fields={healthInsuranceField}
        title="Insurance Form"
        submitText="Submit"
        // onSubmit={handleSubmit}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default HealthInsurance;
