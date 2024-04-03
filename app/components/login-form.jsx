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
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black hover:bg-gray-300"
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
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-6 focus:outline-none focus:ring-2 focus:ring-black hover:bg-gray-300"
        />
        {/* Password visibility toggle */}
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
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
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-28 rounded-md hover:bg-blue-600 transition-colors items-center justify-center flex flex-col"
        >
          Login
        </button>
      </div>
      <p className="text-center text-black">
        Are you new?{" "}
        <a href="/pages/signUp" className="text-white font-bold hover:underline">
          Create an Account
        </a>
      </p>
    </form>
  );
};

export default LoginForm;


