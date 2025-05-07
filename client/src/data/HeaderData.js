export const Calculator = [
  {
    name: "MF Return Calculator",
    url: "/sipcalc",
    // ext_url: "https://groww.in/calculators/mutual-fund-returns-calculator",
  },
  {
    name: "Insurance Premium Calculator",
    url: "",
    ext_url:
      "https://www.uiic.in/CustomerPortalWeb/PremiumCalculator/data/MotorQuote.html#/motorQuote?agentId=",
  },
];

export const RaiseTicket = [
  { name: "Create Ticket", url: "/createticket" },
  { name: "Track Ticket", url: "/track" },
];

export const Products = [
  {
    name: "Motor Insurance",
    submenu: [
      { name: "Bike", url: "/motorform" },
      { name: "Car", url: "/motorform" },
      { name: "Commercial Vechicle", url: "/motorform" },
    ],
  },
  { name: "Health Insurance", url: "/healthform" },
  // { name: "Term Insurance", url: "/settings" },
  { name: "Personal Accident Insurance", url: "/healthform" },
  {
    name: "SME Insurance",
    submenu: [
      { name: "Fire Insurance", url: "/smeform" },
      { name: "Home Insurance", url: "/smeform" },
      { name: "Specific Marine WorkMen Compensation", url: "/smeform" },
      { name: "CPM", url: "/smeform" },
      { name: "Other", url: "/smeform" },
    ],
  },
  { name: "Travel Insurance", url: "/travelform" },
  { name: "Open Demat", url: "/investmentform" },
  { name: "Mutual Funds", url: "/investmentform" },
  { name: "Fixed Deposit", url: "/investmentform" },
  { name: "Loan", url: "/investmentform" },
];
