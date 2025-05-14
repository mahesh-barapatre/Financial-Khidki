import React from "react";
import TalkForm from "./Forms/TalkForm";
import CustomerCare from "./CustomerCare";

function CustomerCarewithForm() {
  return (
    <div className=" flex items-center justify center flex-col">
      <TalkForm />
      <div className="font-extrabold text-xl mt-10">OR</div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex bg-white shadow-2xl rounded-md text-center p-5 my-10 flex-col items-center justify-evenly w-3/4 h-1/2 sm:w-1/4">
          <h5 className="my-4">Contact Us</h5>
          <p className="text-sm">
            Our customer executive team is available from Monday to Saturday
            From 10AM to 5PM to assist you with any questions or issues you
            might have.
          </p>
          <div>
            <h6 className="uppercase mt-3">email us</h6>
            <h5 className="text-purple-500">financialkhidkey@gmail.com</h5>
          </div>
          <div>
            <h6 className="uppercase mt-3">call us</h6>
            <a href="tel:9109454147" className="text-purple-500">
              +91 91094 54147
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCarewithForm;
