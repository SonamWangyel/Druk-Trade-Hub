"use client";


import React, { useContext, useState } from "react";
import Head from "next/head";
import LoginForm from "./components/login-form";
import { UserContext } from "./state/user-context";

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });



  const handleSubmit = async () => {
    
    setError("");
    
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }
  
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
      const {userData:user} = await res.json();
      if (res.ok) {
        setUser(user);
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
      className="bg-image flex justify-center items-center"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2019/11/15/13/03/bhutan-4628373_1280.jpg')`,
        backgroundSize: "cover",
        minHeight: "100vh"
      }}
    >
      <main className="flex flex-col items-center">
        <div className="mt-10">
          {error && <p className="text-black text-2xl font-italic flex flex-col mt-2 pd-3">{error}</p>}
        </div>
  
        <div className="mx-w-1/3 md:flex  flex flex-col items-center p-8 bg-orange-500/50 rounded-lg">
          {!user && (
            <>
              <LoginForm onSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
              {loading && <p>Loading...</p>}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
