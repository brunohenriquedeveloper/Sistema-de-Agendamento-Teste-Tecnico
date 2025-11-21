import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#1f2937",
        color: "#fff",
        padding: "12px 24px",
        textAlign: "center",
        marginTop: "40px"
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} AgenAI — Sistema de Agendamentos
      </p>
    </footer>
  );
};

export default Footer;
