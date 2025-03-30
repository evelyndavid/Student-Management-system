import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem("username");
        setIsLoggedIn(!!username);
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Navbar
            expand="lg"
            style={{
                background: "#FFFF00",
                padding: "15px 20px",
                zIndex: 1030,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 1.2)",
                borderBottomLeftRadius: "9px",
                borderBottomRightRadius: "9px",
            }}
        >
            <Container>
                <Navbar.Brand
                    href="#"
                    style={{
                        color: "#000",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: "30px",
                    }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "50px", height: "50px", marginRight: "15px" }}
                    />
                    RE PORTAL
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link
                            onClick={() => handleNavigation("/")}
                            className="nav-item"
                            style={{ color: "black", fontWeight: "bold" }}
                        >
                            Home
                        </Nav.Link>
                        {!isLoggedIn ? (
                            <>
                                <Nav.Link
                                    onClick={() => handleNavigation("/SignUp")}
                                    className="nav-item"
                                    style={{ color: "black", fontWeight: "bold" }}
                                >
                                    Sign Up
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => handleNavigation("/Login")}
                                    className="nav-item"
                                    style={{ color: "black", fontWeight: "bold" }}
                                >
                                    Login
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link
                                onClick={() => {
                                    localStorage.removeItem("username");
                                    setIsLoggedIn(false);
                                    handleNavigation("/");
                                }}
                                className="nav-item"
                                style={{ color: "black", fontWeight: "bold" }}
                            >
                                Logout
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
