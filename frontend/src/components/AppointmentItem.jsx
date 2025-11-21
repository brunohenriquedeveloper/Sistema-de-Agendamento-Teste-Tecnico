import React from "react";

export default function AppointmentItem({ appointment, onDelete }) {
  if (!appointment) return null;

  const { _id, title, description, appointmentDate, appointmentTime, status } = appointment;

  return (
    <div
      style={{
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: 8,
        marginBottom: 12,
        background: "#fafafa",
      }}
    >
      <h3 style={{ margin: 0 }}>{title}</h3>

      <p style={{ margin: "6px 0" }}>
        <strong>Descrição:</strong> {description}
      </p>

      <p style={{ margin: "6px 0" }}>
        <strong>Data:</strong> {new Date(appointmentDate).toLocaleDateString("pt-BR")}
      </p>

      <p style={{ margin: "6px 0" }}>
        <strong>Hora:</strong> {appointmentTime}
      </p>

      <p style={{ margin: "6px 0" }}>
        <strong>Status:</strong> {status}
      </p>

      <button
        onClick={() => onDelete(_id)}
        style={{
          marginTop: 10,
          background: "#e63946",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Excluir
      </button>
    </div>
  );
}
