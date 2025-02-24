import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate backend authentication (This will change once backend is added)
    if (email === "test@example.com" && password === "password123") {
      sessionStorage.setItem("userToken", "loggedIn"); // Store user session
      sessionStorage.setItem("user", JSON.stringify({ name: "John Doe", email })); // Store user details

      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/scheduling"); // Redirect to Scheduling Page after successful login
      }, 1500);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />

          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
            required 
          />

          <button type="submit" className="submit-btn">Login</button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <p><a href="/forgot-password" className="forgot-password">Forgot Password?</a></p>
        <p>Don't have an account? <a href="/signup" className="signup-link">Sign up here</a></p>
      </div>
    </div>
  );
}

export default Login;
