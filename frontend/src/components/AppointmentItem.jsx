import React from "react";

export default function AppointmentItem({ appointment, onDelete, onEdit }) {
  if (!appointment) return null;

  const { _id, name, service, appointmentDate, appointmentTime, status } = appointment;

  // formatar data corretamente ignorando fuso horário
  const formattedDate = appointmentDate
    ? new Date(appointmentDate + "T00:00:00").toLocaleDateString("pt-BR")
    : "";
  const formattedTime = appointmentTime || "";

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
      <h3 style={{ margin: 0 }}>{service}</h3>
      <p style={{ margin: "6px 0" }}>
        <strong>Cliente:</strong> {name}
      </p>
      <p style={{ margin: "6px 0" }}>
        <strong>Data:</strong> {formattedDate}
      </p>
      <p style={{ margin: "6px 0" }}>
        <strong>Hora:</strong> {formattedTime}
      </p>
      <p style={{ margin: "6px 0" }}>
        <strong>Status:</strong> {status}
      </p>

      <div style={{ marginTop: 10, display: "flex", gap: "8px" }}>
        <button
          onClick={() => onDelete(_id)}
          style={{
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
        <button
          onClick={() => onEdit(appointment)}
          style={{
            background: "#1d4ed8",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Editar
        </button>
      </div>
    </div>
  );
}
