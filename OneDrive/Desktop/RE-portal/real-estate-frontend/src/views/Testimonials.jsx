import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <h2>Customer Reviews</h2>
      <p>Read reviews from our happy clients.</p>
      <Link to="/add-review" className="btn">Add a Review</Link>
    </div>
  );
};

export default Testimonials;
