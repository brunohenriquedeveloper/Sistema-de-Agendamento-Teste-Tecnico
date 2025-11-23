import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./AppointmentItem.module.css";

export default function AppointmentItem({ appointment, onDelete, onEdit }) {
  if (!appointment) return null;

  const { _id, name, service, appointmentDate, appointmentTime, status } = appointment;

  const formattedDate = appointmentDate
    ? new Date(appointmentDate + "T00:00:00").toLocaleDateString("pt-BR")
    : "";
  const formattedTime = appointmentTime || "";

  const statusColors = {
    feito: "#22c55e",     
    pendente: "#eab308",   
    cancelado: "#ef4444", 
  };

  return (
    <div
      style={{
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: 8,
        marginBottom: 12,
        background: "#fafafa",
        borderRight: "8px solid #1F2937",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h3 style={{ margin: 0 }}>{service}</h3>

      <p style={{ margin: "6px 0" }}>
        <strong>Usuário:</strong> {name}
      </p>

      <p style={{ margin: "6px 0" }}>
        <strong>Data:</strong> {formattedDate}
      </p>

      <p style={{ margin: "6px 0" }}>
        <strong>Hora:</strong> {formattedTime}
      </p>

      <p style={{ margin: "6px 0", display: "flex", alignItems: "center", gap: "6px" }}>
        <strong>Status:</strong>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: statusColors[status] || "gray",
            display: "inline-block",
            order: 1,
            marginBottom: "-.2em",
          }}
        ></span>
        {status}
      </p>

      <div style={{ marginTop: 10, display: "flex", gap: "8px" }}>
        <button onClick={() => onDelete(_id)} className={styles.deleteButton}>
          <FaTrash className={styles.icon} size={12} />
          Excluir
        </button>

        <button onClick={() => onEdit(appointment)} className={styles.editButton}>
          <FaEdit className={styles.icon} size={13} />
          Editar
        </button>
      </div>
    </div>
  );
}
