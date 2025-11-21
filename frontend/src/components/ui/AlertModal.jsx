import React from "react";

const AlertModal = ({ open, onClose, message }) => {
  if (!open) return null;

  const backdropStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999
  };

  const modalStyle = {
    background: "white",
    padding: "20px 30px",
    borderRadius: 12,
    width: "90%",
    maxWidth: 360,
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)"
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: 6,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    marginTop: 12
  };

  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <p>{message}</p>
        <button onClick={onClose} style={buttonStyle}>OK</button>
      </div>
    </div>
  );
};

export default AlertModal;
