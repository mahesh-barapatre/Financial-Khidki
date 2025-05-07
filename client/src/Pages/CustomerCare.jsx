import React from "react";

function CustomerCare() {
  return (
    <div className="flex flex-col justify-center h-screen items-center bg-gray-100 w-full">
      <div className="flex bg-white shadow-md rounded-md text-center p-5 my-10 flex-col items-center justify-evenly w-3/4 h-1/2 sm:w-1/4">
        <h5>Talk to Expert</h5>
        <p className="text-sm">
          Our customer executive team is available from Monday to Saturday From
          10AM to 5PM to assist you with any questions or issues you might have.
        </p>
        <div>
          <h6 className="uppercase ">email us</h6>
          <h5 className="text-purple-500">financialkhidkey@gmail.com</h5>
        </div>
        <div>
          <h6 className="uppercase ">call us</h6>
          <a href="tel:9109454147" className="text-purple-500">
            +91 91094 54147
          </a>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
