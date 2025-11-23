import React from "react";
import { AiOutlineHome, AiOutlinePlusCircle, AiOutlineUnorderedList } from "react-icons/ai";

const Navbar = ({ currentView, onChangeView }) => {
  const iconStyle = {
    cursor: "pointer",
    fontSize: "1.6rem",
    transition: "0.2s",
    color: "#fff", 
    opacity: 0.85,
  };

  const activeStyle = {
    color: "#3b82f6", 
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
      <AiOutlineHome
        style={currentView === "list" ? activeStyle : iconStyle}
        onClick={() => onChangeView("list")}
      />

      <AiOutlinePlusCircle
        style={currentView === "create" ? activeStyle : iconStyle}
        onClick={() => onChangeView("create")}
      />

      <AiOutlineUnorderedList
        style={currentView === "list" ? activeStyle : iconStyle}
        onClick={() => onChangeView("list")}
      />
    </nav>
  );
};

export default Navbar;
