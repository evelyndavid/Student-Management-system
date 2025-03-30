import React from "react";
import "./HomePage.css";

const AddReview = () => {
  return (
    <div className="add-review">
      <h2>Submit Your Review</h2>
      <textarea placeholder="Write your review here..."></textarea>
      <button className="btn">Submit Review</button>
    </div>
  );
};

export default AddReview;
