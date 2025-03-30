import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "./Alert";

const SignUp = ({ setPage, onSignUp }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  const isValidPassword = (password) => password.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setAlert({ message: "Please fill all fields.", type: "danger" });
      return;
    }
    if (password !== confirmPassword) {
      setAlert({ message: "Passwords do not match!", type: "danger" });
      return;
    }
    if (!isValidEmail(email)) {
      setAlert({ message: "Please enter a valid Gmail address.", type: "danger" });
      return;
    }
    if (!isValidPassword(password)) {
      setAlert({ message: "Password must be at least 6 characters long and contain a special character.", type: "danger" });
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
      });
      setAlert({ message: response.data.message, type: "success" });
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setAlert({ message: `Error: ${error.response?.data?.error || error.message}`, type: "danger" });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Your Key to Home.</h1>
        <h1 style={styles.heading}>SignUp</h1>
        

        {alert.message && <Alert message={alert.message} type={alert.type} />}

        <form onSubmit={handleSignUp}>
          <div style={styles.inputBox}>
            <input style={styles.input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div style={styles.inputBox}>
            <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div style={styles.inputBox}>
            <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div style={styles.inputBox}>
            <input style={styles.input} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button style={styles.button} type="submit">Sign Up</button>
        </form>

        <p style={styles.registerLink}>
          Already have an account? <span style={styles.link} onClick={() => navigate("/login")}>Log in</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',  
    minWidth: '100vw',  
    backgroundColor: '#4D4D4D',
    margin: 0,
  },
  wrapper: {
    marginTop: '50px',
    marginBottom: '100px',
    width: '450px',
    height: '100%',
    alignItems: 'center',
    background: 'rgba(10, 10, 10, 0.5)',
    border: '2px solid rgba(20, 19, 19, 0.2)',
    borderRadius: '12px',
    padding: '30px 40px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 1.0)',
    backdropFilter: 'blur(9px)',
    color: '#fff',
  },
  heading: {
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputBox: {
    width: '100%',
    height: '50px',
    margin: '20px 0',
  },
  input: {
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
  },
  button: {
    width: '100%',
    height: '45px',
    background: '#fff',
    border: 'none',
    outline: 'none',
    borderRadius: '40px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    transition: 'box-shadow 0.3s',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#333',
    fontWeight: '600',
  },
  registerLink: {
    fontSize: '14.5px',
    textAlign: 'center',
    margin: '20px 0 15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default SignUp;
