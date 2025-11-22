import React, { useState, useEffect } from "react";
import { createAppointment, updateAppointment } from "../api/api";
import AlertModal from "./ui/AlertModal";
import styles from "./CreateAppointment.module.css";

export default function CreateAppointment({ onCreated, existingAppointment, onCancel }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [status, setStatus] = useState("pendente");
  const [loading, setLoading] = useState(false);

  // AlertModal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const isEditing = !!existingAppointment;

  useEffect(() => {
    if (existingAppointment) {
      setName(existingAppointment.name || "");
      setService(existingAppointment.service || "");
      setAppointmentDate(
        existingAppointment.appointmentDate
          ? new Date(existingAppointment.appointmentDate).toISOString().slice(0, 10)
          : ""
      );
      setAppointmentTime(existingAppointment.appointmentTime || "");
      setStatus(existingAppointment.status || "pendente");
    }
  }, [existingAppointment]);

  const submit = async (e) => {
    e.preventDefault();

    // validação obrigatória
    if (!name || !service || !appointmentDate || !appointmentTime) {
      setModalMessage("Preencha nome, serviço, data e hora");
      setModalOpen(true);
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(appointmentDate + "T00:00:00");

    // ***** VALIDAÇÃO DE DATA PASSADA APENAS QUANDO CRIANDO *****
    if (!isEditing && selectedDate < today) {
      setModalMessage("Não é possível agendar em uma data passada");
      setModalOpen(true);
      return;
    }

    // ***** VALIDAÇÃO DE HORÁRIO PASSADO NO MESMO DIA APENAS QUANDO CRIANDO *****
    const now = new Date();
    if (!isEditing && selectedDate.getTime() === today.getTime()) {
      const [h, m] = appointmentTime.split(":").map(Number);
      const selectedDateTime = new Date();
      selectedDateTime.setHours(h, m, 0, 0);

      if (selectedDateTime < now) {
        setModalMessage("O horário escolhido já passou hoje");
        setModalOpen(true);
        return;
      }
    }

    setLoading(true);

    try {
      if (isEditing) {
        await updateAppointment(existingAppointment._id, {
          name,
          service,
          appointmentDate,
          appointmentTime,
          status,
        });
      } else {
        await createAppointment({
          name,
          service,
          appointmentDate,
          appointmentTime,
          status,
        });
      }

      // resetar campos
      setName("");
      setService("");
      setAppointmentDate("");
      setAppointmentTime("");
      setStatus("pendente");

      if (onCreated) onCreated();
    } catch (err) {
      setModalMessage(err?.message || "Erro ao salvar agendamento");
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submit} className={styles.form}>
        <h2>{isEditing ? "Editar Agendamento" : "Criar Agendamento"}</h2>

        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Serviço"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          min={new Date().toISOString().slice(0, 10)}
        />

        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{
            padding: "1em",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            fontSize: "1rem",
            background: "white",
            cursor: "pointer",
          }}
        >
          <option value="pendente">Pendente</option>
          <option value="feito">Feito</option>
          <option value="cancelado">Cancelado</option>
        </select>

        <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
          <button type="submit" disabled={loading} className={styles.submitButton}>
            {loading
              ? "Salvando..."
              : isEditing
              ? "Editar Agendamento"
              : "Criar Agendamento"}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
        </div>
      </form>

      <AlertModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
      />
    </div>
  );
}
