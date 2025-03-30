import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header"; // Importing the separate header
import buyImage from "../assets/buy.jpg";
import sellImage from "../assets/sell.jpg";
import featured1 from "../assets/sell.jpg";
import featured2 from "../assets/buy.jpg";
import featured3 from "../assets/sell.jpg";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  const navigate = useNavigate();

  const styles = {
    body: {
      margin: 0,
      fontFamily: "Times New Roman, serif",
      backgroundColor: "#111",
      color: "white",
      textAlign: "center",
    },
    hero: {
      padding: "100px 20px",
    },
    heroTitle: {
      fontSize: "36px",
      color: "yellow",
      marginBottom: "20px",
    },
    paragraph: {
      textAlign: "center",
      fontSize: "18px",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    searchBar: {
      width: "60%",
      padding: "10px",
      fontSize: "18px",
      border: "none",
      borderRadius: "5px",
    },
    listingContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    listingCard: {
      background: "#222",
      padding: "15px",
      borderRadius: "10px",
      textAlign: "center",
    },
    listingImage: {
      width: "100%",
      height: "200px",
      borderRadius: "10px",
    },
    callToAction: {
      background: "yellow",
      color: "black",
      padding: "50px 20px",
    },
    ctaButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    ctaBtn: {
      background: "black",
      color: "yellow",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
      fontWeight: "bold",
    },
    footer: {
      background: "black",
      padding: "20px",
      color: "yellow",
      fontSize: "14px",
      fontFamily: "Times New Roman, serif",
    },
  };

  return (
    <div style={styles.body}>
      {/* Header (Navbar) */}
      <Header />

      {/* Hero Section */}
      <header style={styles.hero}>
        <h2 style={styles.heroTitle} data-aos="zoom-in">DREAM.INVEST.THRIVE</h2>
        <p style={styles.paragraph}>This real estate portal connects buyers and sellers, offering a seamless platform to explore, list, and purchase properties. With an intuitive UI, interactive property previews, and detailed listings, users can easily find their dream home or sell their property hassle-free. 🏡</p>
      </header>

       {/* Featured Listings */}
      
      <section>
        <h2 data-aos="fade-up">Featured Listings</h2>
        <div style={styles.listingContainer}>
          <div 
            style={styles.listingCard} 
            data-aos="fade-up" 
            onClick={() => navigate("/luxury-apartment")}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0px 5px 15px rgba(255, 255, 255, 0.6)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <img src={featured1} alt="Luxury Apartment" style={styles.listingImage} />
            <h3>Luxury Apartment</h3>
            <p>Rs 500,000</p>
          </div>
          <div 
            style={styles.listingCard} 
            data-aos="fade-up" 
            onClick={() => navigate("/modern-villa")}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0px 5px 15px rgba(255, 255, 255, 0.6)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <img src={featured2} alt="Modern Villa" style={styles.listingImage} />
            <h3>Modern Villa</h3>
            <p>Rs 850,000</p>
          </div>
          <div 
            style={styles.listingCard} 
            data-aos="fade-up" 
            onClick={() => navigate("/cozy-townhouse")}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0px 5px 15px rgba(255, 255, 255, 0.6)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <img src={featured3} alt="Cozy Townhouse" style={styles.listingImage} />
            <h3>Cozy Townhouse</h3>
            <p>Rs 300,000</p>
          </div>
        </div>
      </section>

      

      {/* Selling Section */}
      <section style={{ padding: "50px 20px" }}>
        <h2 data-aos="zoom-in" style={{ color: "yellow" }}>Want to Sell Your Property?</h2>
        <button 
          onClick={() => navigate("/selling_pro")} 
          style={{
            background: "yellow", color: "black", padding: "15px 30px", border: "none", fontSize: "18px",
            fontWeight: "bold", borderRadius: "10px", cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s"
          }}
          onMouseEnter={(e) => { e.target.style.transform = "scale(1.1)"; e.target.style.boxShadow = "0px 5px 15px rgba(255, 255, 0, 0.6)"; }}
          onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}
          data-aos="fade-up"
        >
          Start Selling
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer} data-aos="fade-up">
        <p style={styles.paragraph}>Real Estate Owner: Job&Judah</p>
        <p style={styles.paragraph}>Address: 123 Street, Madurai, Tamilnadu, India</p>
        <p style={styles.paragraph}>Email: job@gmail.com</p>
      </footer>
    </div>
  );
};

export default HomePage;
