import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import serverUrl from "../config";
import DynamicForm from "../ui/DynamicForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Add your login logic here
    try {
      const response = await axios.post(
        `${serverUrl}/auth/login`,
        { email, password },
        {
          withCredentials: true, // This option enables sending cookies with cross-origin requests
        },
      );

      // console.log('Logging in with:', { email, password });

      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const fields = [
    {
      name: "Name",
      required: true,
      type: "text",
      label: "Name",
      placeholder: "enter your name here...",
    },
    {
      name: "email",
      required: true,
      type: "email",
      label: "Email",
      placeholder: "enter your email here...",
    },
    {
      name: "password",
      required: true,
      type: "password",
      label: "Password",
      placeholder: "enter your password here...",
    },
  ];

  return <DynamicForm onSubmit={handleLogin} fields={fields} title="Login" />;
};

export default Login;
