import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellingPro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: "",
    aadhaarNumber: "",
    propertyAddress: "",
    landTitle: "",
    landImage: null,
    landVideo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Property details submitted successfully!");
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#111",
      color: "white",
      textAlign: "center",
      padding: "20px",
    }}>
      <h2 style={{ color: "yellow" }}>Sell Your Property</h2>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "15px",
      }}>
        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          value={formData.ownerName}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px" }}
        />
        <input
          type="text"
          name="aadhaarNumber"
          placeholder="Aadhaar Number (12-digit)"
          value={formData.aadhaarNumber}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px" }}
        />
        <input
          type="text"
          name="propertyAddress"
          placeholder="Property Address"
          value={formData.propertyAddress}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px" }}
        />
        <input
          type="text"
          name="landTitle"
          placeholder="Land Title"
          value={formData.landTitle}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px" }}
        />
        <label style={{ color: "yellow" }}>Upload Land Image:</label>
        <input type="file" name="landImage" accept="image/*" onChange={handleFileChange} required />
        <label style={{ color: "yellow" }}>Upload Land Video:</label>
        <input type="file" name="landVideo" accept="video/*" onChange={handleFileChange} required />
        <button type="submit" style={{
          padding: "10px",
          backgroundColor: "yellow",
          color: "black",
          fontWeight: "bold",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Submit Property
        </button>
      </form>
    </div>
  );
};

export default SellingPro;
