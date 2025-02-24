import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user details (Later this will come from the backend)
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // Redirect if not logged in
    }
  }, [navigate]);

  return (
    <div className="profile-container">
      <h1>User Profile</h1>

      {user ? (
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || "Not Provided"}</p>

          <button className="btn btn-primary mt-3">Edit Details</button>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default Profile;
