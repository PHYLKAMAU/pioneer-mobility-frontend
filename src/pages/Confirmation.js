import React from "react";
import "./styles.css";

function Confirmation() {
  return (
    <div className="confirmation-container">
      <h1>Booking Confirmed! 🎉</h1>
      <p>Thank you for scheduling your transport. A confirmation email and SMS have been sent.</p>
      <p>For any inquiries, call <a href="tel:+1234567890" className="call-btn">📞 (123) 456-7890</a></p>
      <a href="/" className="home-btn">Back to Home</a>
    </div>
  );
}

export default Confirmation;
