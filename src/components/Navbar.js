import { Link } from "react-router-dom";
import "../pages/styles.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/images/logo1.png" 
            alt="Pioneer Mobility Logo"
            style={{ height: "80px", width: "120px" }}
            className="me-3"
          />
      
        </Link>

        {/* Mobile Menu Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-dark" to="/">HOME</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/about">ABOUT</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/services">SERVICES</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/blog">BLOG</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/contact">CONTACT US</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/InsurancePayment">INSURANCE</Link></li>
          </ul>

          {/* "Book a Ride" Button */}
          <Link className="btn btn-success ms-3" to="/scheduling">Book a Ride</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
