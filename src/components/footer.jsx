import React from "react";

function footer() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        background: "#333",
        color: "#fff",
      }}
    >
      <p>
        © {new Date().getFullYear()} MERN Stack Developer. All rights reserved.
      </p>
      <div style={{ marginTop: "10px" }}>
        <a
          href="https://github.com/parivaibhav"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#61dafb", textDecoration: "none", margin: "0 10px" }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#61dafb", textDecoration: "none", margin: "0 10px" }}
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/vaibhhav87"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#61dafb", textDecoration: "none", margin: "0 10px" }}
        >
          Instagram
        </a>
      </div>
      <p style={{ marginTop: "10px", fontSize: "12px", color: "#aaa" }}>
        Designed and Developed with ❤️ by MERN Stack Developer
      </p>
    </div>
  );
}

export default footer;
