import { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Alert from "./Alert";


import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" }); // Move this inside the component
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const login = (username) => {
    localStorage.setItem("username", username);
    console.log("User logged in:", username);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/Login", {
        name,
        password,
      });
      //alert(response.data.message);
      setAlert({ message: response.data.message, type: "success" });
      if (response.data.success) {
        login(name);
        navigate("/");
      }
    } catch (error) {
      alert("Error logging in: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <Container


      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#4D4D4D",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: "0"
      }}>
        <h1 style={{
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#000",
          textShadow: "0 2px 4px rgba(201, 220, 217, 0.9), 0 4px 8px rgba(138, 116, 116, 0.3)",
          margin: "0",
          paddingTop: "20px"
        }}>
          Enter. Explore. Own.
        </h1>
      </div>

      <div
        style={{
          marginTop: "10px",
          width: "450px",
          background: "rgba(23, 22, 22, 0.5)",
          border: "2px solid rgba(20, 19, 19, 0.2)",
          borderRadius: "12px",
          padding: "30px 40px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 1.0)",
          backdropFilter: "blur(9px)",
          color: "#fff",
        }}
      >


        <form onSubmit={handleLogin}>

          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#000",
              textShadow: "0 2px 4px rgba(201, 220, 217, 0.9), 0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            Login
          </h1>
          <div style={{ position: "relative", width: "100%", height: "50px", margin: "20px 0" }}>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                border: "2px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "40px",
                fontSize: "16px",
                color: "#fff",
                padding: "20px 45px 20px 20px",
              }}
            />
          </div>
          <div style={{ position: "relative", width: "100%", height: "50px", margin: "20px 0" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                border: "2px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "40px",
                fontSize: "16px",
                color: "#fff",
                padding: "20px 45px 20px 20px",
              }}
            />
            {alert.message && <Alert message={alert.message} type={alert.type} />}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14.5px", margin: "-15px 0 15px" }}>
            <label style={{ color: "#fff" }}>
              <input type="checkbox" style={{ marginRight: "3px" }} /> Remember Me
            </label>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              height: "45px",
              background: "#fff",
              border: "none",
              borderRadius: "40px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              fontSize: "16px",
              color: "#333",
              fontWeight: "600",
            }}
          >
            Login
          </button>
          <div style={{ fontSize: "14.5px", textAlign: "center", margin: "20px 0 15px" }}>
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={handleSignUp} style={{ color: "#fff", textDecoration: "none", fontWeight: "600" }}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;