import React from "react";

const Navbar = ({ currentView, onChangeView }) => {
  return (
    <nav 
      style={{
        background: "#ffffffff",
        padding: "12px 24px",
        display: "flex",
        gap: "16px",
        borderRadius: "8px",
      }}
    >
      <button
        onClick={() => onChangeView("list")}
        style={{
          padding: "8px 16px",
          background: currentView === "list" ? "#0066f6ff" : "#0066f6ff",
          border: "none",
          color: "white",
          cursor: "pointer",
          borderRadius: 6
        }}
      >
        Lista de Agendamentos
      </button>

      <button
        onClick={() => onChangeView("create")}
        style={{
          padding: "8px 16px",
          background: currentView === "create" ? "#0066f6ff" : "#0066f6ff",
          border: "none",
          color: "white",
          cursor: "pointer",
          borderRadius: 6
        }}
      >
        Criar Agendamento
      </button>
    </nav>
  );
};

export default Navbar;
