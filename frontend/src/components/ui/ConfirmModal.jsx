import React from "react";

const ConfirmModal = ({ open, onClose, onConfirm, message }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px 30px",
          borderRadius: 12,
          width: "90%",
          maxWidth: 360,
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)"
        }}
      >
        <h3 style={{ marginBottom: 10, fontSize: "1.2rem" }}>Confirmar ação</h3>
        <p style={{ marginBottom: 20 }}>{message}</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "none",
              background: "#d1d5db",
              cursor: "pointer"
            }}
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "none",
              background: "#dc2626",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
