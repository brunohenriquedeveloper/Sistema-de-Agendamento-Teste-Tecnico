import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}
      style={{
        background: "#1f2937",
        color: "#fff",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>AgenAI</h1>

      <span style={{ opacity: 0.8 }}>Sistema de Agendamentos</span>
    </header>
  );
};

export default Header;
