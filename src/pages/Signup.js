import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Simulate storing user account (Replace with backend API later)
    localStorage.setItem("userAccount", JSON.stringify(formData));

    alert("Account created! Please log in.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Sign Up</h1>

        <form onSubmit={handleSignup}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />

          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" required />

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>

        <p>Already have an account? <a href="/login" className="login-link">Log in here</a></p>
      </div>
    </div>
  );
}

export default Signup;
