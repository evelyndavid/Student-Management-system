import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './views/Header';
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import SellingPro from "./views/SellingPro";
import LuxuryApartment from "./views/LuxuryApartment";
import ModernVilla from "./views/ModernVilla";
import CozyTownhouse from "./views/CozyTownhouse";
import Loader from "./views/Loader";

const App = () => {
  const [loading, setLoading] = useState(true); // Start with loading as true
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    setLoading(true); // Show loader on route change
    const timer = setTimeout(() => setLoading(false), 2000); // Wait for 3 seconds

    return () => clearTimeout(timer); // Cleanup to avoid memory leaks
  }, [location.pathname]); // Runs on every page change

  return (
    <>
      {loading ? (
        <Loader /> // Show loader
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selling_pro" element={<SellingPro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/luxury-apartment" element={<LuxuryApartment />} />
          <Route path="/modern-villa" element={<ModernVilla />} />
          <Route path="/cozy-townhouse" element={<CozyTownhouse />} />
          <Route path="/buy" element={<h2>Buy Property Page</h2>} />
          <Route path="/sell" element={<h2>Sell Property Page</h2>} />
        </Routes>
      )}
    </>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
