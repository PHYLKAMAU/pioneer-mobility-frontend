import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Scheduling from "./pages/Scheduling";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import InsurancePayment from "./pages/InsurancePayment";
import Confirmation from "./pages/Confirmation";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/InsurancePayment" element={<InsurancePayment />} />
        <Route path="/Confirmation" element ={<Confirmation/>} />
        <Route path="/Signup" element ={<Signup/>} />
        <Route path="/Login" element ={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
