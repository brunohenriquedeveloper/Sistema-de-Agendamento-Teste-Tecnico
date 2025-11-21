import React, { useState } from "react";
import CreateAppointment from "../components/CreateAppointment";
import AppointmentList from "../components/AppointmentList";

export default function Dashboard() {
  const [view, setView] = useState("landing"); // landing | list | create | edit
  const [editingAppointment, setEditingAppointment] = useState(null);

  // Quando a edição é concluída, limpa o estado e volta para a lista
  const handleCreatedOrEdited = () => {
    setEditingAppointment(null);
    setView("list");
  };

  // Quando o usuário cancela a edição, volta para a lista
  const handleCancelEdit = () => {
    setEditingAppointment(null);
    setView("list");
  };

  return (
    <div style={{ padding: 20 }}>
      {view === "landing" && (
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setView("list")}>Lista de Agendamentos</button>
          <button
            onClick={() => {
              setEditingAppointment(null);
              setView("create");
            }}
          >
            Criar Agendamento
          </button>
        </div>
      )}

      {view === "list" && (
        <AppointmentList
          onEdit={(appointment) => {
            setEditingAppointment(appointment);
            setView("edit");
          }}
          onBack={() => setView("landing")}
        />
      )}

      {(view === "create" || view === "edit") && (
        <CreateAppointment
          existingAppointment={editingAppointment}
          onCancel={handleCancelEdit}
          onCreated={handleCreatedOrEdited}
        />
      )}
    </div>
  );
}
