import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Scheduling() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    pickupLocation: "",
    dropoffLocation: "",
    dateTime: "",
    contactName: "",
    phone: "",
    email: "",
    paymentMethod: "",
    agreeTerms: false,
    agreeContactPhone: false,
    agreeContactEmail: false,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const userToken = sessionStorage.getItem("userToken");
    if (!userToken) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Prevent selecting past dates & times
  const getMinDateTime = () => {
    const now = new Date();
    const localISOTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    return localISOTime;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      setError("You must agree to the Privacy Policy to continue.");
      return;
    }

    alert("Ride scheduled successfully! (Backend integration needed)");
    navigate("/"); // Redirect to home after scheduling
  };

  return (
    <div className="scheduling-container">
      <h1 className="text-center">Book a Ride</h1>
      <p className="subtitle text-center">Schedule your non-emergency medical transportation in just a few steps.</p>

      {isLoggedIn ? (
        <form className="scheduling-form" onSubmit={handleSubmit}>
          {/* Service Type */}
          <label>Service Type</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="wheelchair">Wheelchair Transport</option>
            <option value="ambulatory">Ambulatory Transport</option>
            <option value="stretcher">Stretcher Transport</option>
            <option value="school">School Transport</option>
          </select>

          {/* Pickup & Dropoff */}
          <label>Pickup Location</label>
          <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="Enter pickup location" required />

          <label>Drop-off Location</label>
          <input type="text" name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} placeholder="Enter drop-off location" required />

          {/* Date & Time */}
          <label>Date & Time</label>
          <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} min={getMinDateTime()} required />

          {/* Contact Details */}
          <label>Contact Name</label>
          <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" required />

          {/* Payment Method */}
          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment Method</option>
            <option value="medicaid">Medicaid</option>
            <option value="insurance">Insurance</option>
            <option value="private">Private Pay</option>
          </select>

          {/* Agreement Checkboxes */}
          <div className="checkbox-group">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
            <label>I have read and agreed to the <a href="/termsconditions" className="privacy-link">Privacy Policy</a></label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" name="agreeContactPhone" checked={formData.agreeContactPhone} onChange={handleChange} />
            <label>I agree to be contacted via phone</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" name="agreeContactEmail" checked={formData.agreeContactEmail} onChange={handleChange} />
            <label>I agree to be contacted via email</label>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn">Schedule Ride</button>
        </form>
      ) : (
        <h3 className="text-center text-danger">Redirecting to Login...</h3>
      )}

      {/* Call to Book */}
      <div className="call-us">
        <p>Need Help? Call us to Book Now:</p>
        <a href="tel:+11234567890" className="call-btn">📞 (123) 456-7890</a>
      </div>
    </div>
  );
}

export default Scheduling;
