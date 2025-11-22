import React from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";

const Header = ({ currentView, onChangeView }) => {
  return (
    <header
      className={styles.header}
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

      <Navbar currentView={currentView} onChangeView={onChangeView} />
    </header>
  );
};

export default Header;
