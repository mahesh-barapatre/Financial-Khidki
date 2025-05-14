import React from "react";

function TrackTicket() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-md text-center p-5 flex-col items-center justify-evenly w-3/4 h-1/2 sm:w-1/4">
        <h5>Track your Ticket</h5>
        <p className="text-sm">
          Contact to our team for tracking your ticket status
        </p>
        <div>
          <h6 className="uppercase ">email us</h6>
          <h5 className="text-purple-500">financialkhidkey@gmail.com</h5>
        </div>
        <div>
          <h6 className="uppercase ">call us</h6>
          <h5 className="text-purple-500">+91 91094 54147</h5>
        </div>
      </div>
    </div>
  );
}

export default TrackTicket;
