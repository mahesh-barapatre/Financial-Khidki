export const healthInsuranceField = [
  {
    name: "type",
    label: "Type",
    type: "select",
    options: [
      { label: "Term Life Insurance", value: "term" },
      { label: "Life Insurance", value: "life" },
      { label: "Accidental Insurance", value: "accidental" },
      { label: "Health Insurance", value: "health" },
    ],
  },
  {
    name: "name",
    required: true,
    type: "text",
    label: "Name",
    placeholder: "enter your name here...",
  },
  {
    name: "mobile_number",
    required: true,
    type: "number",
    label: "Mobile Number",
    placeholder: "enter your mobile number here...",
  },
  {
    name: "dob",
    required: true,
    type: "date",
    label: "Date of Birth",
    placeholder: "enter your dob here...",
  },
  {
    name: "pincode",
    required: true,
    type: "number",
    label: "Pincode",
    placeholder: "enter your picode here...",
  },
  {
    name: "remark",
    required: false,
    type: "textarea",
    label: "Remarks",
    placeholder: "enter your remark here...",
  },
];
