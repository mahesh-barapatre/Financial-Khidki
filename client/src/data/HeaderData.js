export const Calculator = [
  { name: "MF Return Calculator", url: "/profile" },
  { name: "Insurance Premium Calculator", url: "/settings" },
];

export const Products = [
  { name: "Mutual Fund", url: "/profile" },
  { name: "Fixed Deposit", url: "/settings" },
  { name: "Demat", url: "/settings" },
  { name: "Loan", url: "/settings" },
  {
    name: "Motor Insurance",
    submenu: [
      { name: "Car", url: "/sub1" },
      { name: "Bike", url: "/sub2" },
      { name: "Commercial Vechicle", url: "/sub2" },
    ],
  },
  {
    name: "SME Insurance",
    submenu: [{ name: "Refer Insurance", url: "/sub1" }],
  },
  { name: "Health Insurance", url: "/settings" },
  { name: "Life Insurance", url: "/settings" },
  { name: "Travel Insurance", url: "/settings" },
  { name: "Personal Accident Insurance", url: "/settings" },
];
