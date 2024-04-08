

"use client";

import React, { useState } from "react";
import Head from "next/head";
import LoginForm from "./components/login-form";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    // Reset error message
    setError("");
    // Validate form data
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }
    // Perform login request
    setLoading(true);
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const userData = await res.json();
      if (res.ok) {
        setUser(userData);
        setLoading(false);
      } else {
        setError("Invalid email or password");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2019/11/15/13/03/bhutan-4628373_1280.jpg')`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundColor: "#cbd5e0",
        backgroundPosition: "center"
      }}
    >
      <Head>
        <title>DRUK TRADE HUB - Home</title>
        <meta name="description" content="An online marketplace for local products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="mt-10">
          {error && <p className="text-black text-2xl font-italic flex flex-col mt-2 pd-3">{error}</p>}
        </div>
        <h1 className="text-3xl font-bold mb-8 text-stone-800 font-serif ">DRUK TRADE HUB</h1>
        <div className="md:w-1/4 md:flex md:mx-auto flex flex-col items-center rounded-3xl p-8 bg-gray-100 text-black bg-orange-500/40 border:ring-black">
          {!user ? (
            <>
              <LoginForm onSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
              {loading && <img src="/Search" alt="Loading..." />}
            </>
          ) : (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Welcome, {user.email}!</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;


