


"use client";

import { useState } from "react";
import SignIn from "@/app/components/sign-in";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Add your form submission logic here
    if (formData.firstName && formData.lastName && formData.email && formData.password && formData.confirmPassword) {
      const res = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName, 
          email: formData.email,
          address: formData.address,
          password: formData.password
        })
      })
      if (!res.ok) {
        
      } else {
        setSubmitted(true);
      }
      // After submission, you can redirect the user to the login screen or reset the form
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover backgroundPosition-center"
      style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2019/11/15/13/03/bhutan-4628373_1280.jpg')` }}
    >
      <div className="max-w-md w-full space-y-4 bg-white bg-opacity-30 p-8 rounded-3xl text-black">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black font-italic">
            Sign Up
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        <button
          type="button"
          className="w-full py-2 px-4 border border-solid bg-blue-500 rounded-md shadow-sm text-sm font-medium text-black hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        {submitted && (
          <div className="text-center text-sm text-black mt-2">
            Thank you for signing up! Please return to the{" "}
            <a
              href="/"
              className="font-medium text-black font-bold  hover:underline"
            >
              Login
            </a>{" "}
            page.
          </div>
        )}
      </div>
    </div>
  );
}
