import React from "react";

const Loader = () => {
  const loaderStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
    zIndex: "9999",
  };

  const spinnerStyle = {
    width: "70.4px",
    height: "70.4px",
    transformStyle: "preserve-3d",
    animation: "spinner 1.6s infinite ease",
  };

  const boxStyle = {
    backgroundColor: "rgba(247, 197, 159, 0.1)",
    height: "100%",
    position: "absolute",
    width: "100%",
    border: "3.5px solid rgb(247, 197, 159)",
  };

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle} className="spinner">
        <div style={{ ...boxStyle, transform: "translateZ(-35.2px) rotateY(180deg)" }}></div>
        <div style={{ ...boxStyle, transform: "rotateY(-270deg) translateX(50%)", transformOrigin: "top right" }}></div>
        <div style={{ ...boxStyle, transform: "rotateY(270deg) translateX(-50%)", transformOrigin: "center left" }}></div>
        <div style={{ ...boxStyle, transform: "rotateX(90deg) translateY(-50%)", transformOrigin: "top center" }}></div>
        <div style={{ ...boxStyle, transform: "rotateX(-90deg) translateY(50%)", transformOrigin: "bottom center" }}></div>
        <div style={{ ...boxStyle, transform: "translateZ(35.2px)" }}></div>
      </div>
      <style>
        {`
          @keyframes spinner {
            0% {
              transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
            }
            50% {
              transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
            }
            100% {
              transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
