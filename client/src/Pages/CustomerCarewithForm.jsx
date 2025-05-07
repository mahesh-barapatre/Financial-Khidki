import React from "react";
import TalkForm from "./Forms/TalkForm";
import CustomerCare from "./CustomerCare";

function CustomerCarewithForm() {
  return (
    <div className=" flex items-center justify center flex-col">
      <TalkForm />
      <div className="font-extrabold text-xl mt-10">OR</div>
      <CustomerCare />
    </div>
  );
}

export default CustomerCarewithForm;
