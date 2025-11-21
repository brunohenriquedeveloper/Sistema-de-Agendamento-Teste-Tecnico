import React, { useState } from "react";
import { createAppointment } from "../api/api";
import AlertModal from "./ui/AlertModal"; // ✅ seu modal de aviso
import styles from "./CreateAppointment.module.css";

export default function CreateAppointment({ onCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [loading, setLoading] = useState(false);

  // estados do AlertModal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    // validação dos campos obrigatórios
    if (!title || !appointmentDate || !appointmentTime) {
      setModalMessage("Preencha título, data e hora");
      setModalOpen(true);
      return;
    }

    setLoading(true);
    try {
      await createAppointment({
        title,
        description: description || "Sem descrição",
        appointmentDate,
        appointmentTime,
        status: "pendente",
      });

      // resetando campos
      setTitle("");
      setDescription("");
      setAppointmentDate("");
      setAppointmentTime("");

      if (onCreated) onCreated();
    } catch (err) {
      setModalMessage(err.message || "Erro ao criar");
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submit} className={styles.form}>
        <h2>Criar Agendamento</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Descrição (opcional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Criar Agendamento"}
        </button>
      </form>

      {/* Modal de aviso */}
      <AlertModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
      />
    </div>
  );
}
