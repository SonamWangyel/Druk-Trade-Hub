"use client";

import React from "react";
import LoginForm from  "@/components/login-form";

function App() {
  const handleLogin = ({ email, password }) => {
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
