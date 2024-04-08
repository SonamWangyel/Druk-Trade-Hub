'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const Router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [loginError, setLoginError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Redirect to dashboard upon successful login
      Router.push("/pages/dashboard");
    } catch (error) {
      setLoginError("Invalid email or password");
      console.error("Error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-black-300 rounded-md py-2 px-7 focus:outline-none focus:ring-2 focus:ring-black text-center  hover:bg-green-200"
      />
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"} // Toggle password visibility
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setLoginError('')
            setPassword(e.target.value)
          }}
          className="border border-black-300 rounded-md py-2 px-10 focus:outline-none focus:ring-2 text-center  focus:ring-black hover:bg-green-200"
        />
        {/* Password visibility toggle */}
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-black-400 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.6 16.6A8 8 0 006 12a8 8 0 1111.6 4.6z"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="text-center">{loginError && <p className="text-black text-bold">{loginError}</p>}</div>
      <div className="flex flex-col flex items-center justify-center">
        </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-32 rounded-md hover:bg-blue-600 transition-colors items-center justify-center flex flex-col"
        >
          Login
        </button>
      </div>
      <p className="text-center font-semibold text-white">
        Are you new?{" "}
        <a href="/pages/signUp" className="text-indigo-600 hover:underline">
          Create an Account
        </a>
      </p>
    
    </form>
  );
};

export default LoginForm;


