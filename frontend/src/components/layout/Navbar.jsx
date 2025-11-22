import React from "react";
import { AiOutlineHome, AiOutlinePlusCircle, AiOutlineUnorderedList } from "react-icons/ai";

const Navbar = ({ currentView, onChangeView }) => {
  const iconStyle = {
    cursor: "pointer",
    fontSize: "1.6rem",
    transition: "0.2s",
    color: "#fff", // fica branco no header escuro
    opacity: 0.85,
  };

  const activeStyle = {
    color: "#3b82f6", // azul quando está ativa
    opacity: 1,
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        background: "transparent",
      }}
    >
      {/* Home -> Lista */}
      <AiOutlineHome
        style={currentView === "list" ? activeStyle : iconStyle}
        onClick={() => onChangeView("list")}
      />

      {/* Criar */}
      <AiOutlinePlusCircle
        style={currentView === "create" ? activeStyle : iconStyle}
        onClick={() => onChangeView("create")}
      />

      {/* Lista (redundante, mas caso queira outro ícone) */}
      <AiOutlineUnorderedList
        style={currentView === "list" ? activeStyle : iconStyle}
        onClick={() => onChangeView("list")}
      />
    </nav>
  );
};

export default Navbar;
