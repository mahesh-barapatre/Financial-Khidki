import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../ui/InputField";

const RaiseTicket = () => {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [policyNo, setPolicyNo] = useState("");
  const [Query, setQuery] = useState("");
  1;
  //   const handleLogin = async() => {
  //     // Add your login logic here
  //     try {
  //       const response = await axios.post(`${serverUrl}/auth/login`, { email, password },
  //       {
  //     withCredentials: true,  // This option enables sending cookies with cross-origin requests
  //         })

  //       // console.log('Logging in with:', { email, password });

  //       console.log(response)
  //       navigate('/');

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 relative rounded shadow-md w-10/12 sm:w-1/4 bg-purple-50">
        <h2 className="text-2xl font-bold mb-6 text-purple-500">
          Raise Ticket
        </h2>
        <InputField field={name} setField={setName} name={"Name"} />
        <InputField
          field={contactNo}
          setField={setContactNo}
          name={"Contact NUmber"}
        />
        <InputField
          field={policyNo}
          setField={setPolicyNo}
          name={"Policy Number"}
        />

        <InputField field={Query} setField={setQuery} name={"Query"} />

        {/* button? */}
        <button
          //   onClick={}
          className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RaiseTicket;
