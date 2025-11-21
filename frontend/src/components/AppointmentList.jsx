import React, { useEffect, useState } from "react";
import { fetchAppointments, deleteAppointment } from "../api/api";
import AppointmentItem from "./AppointmentItem";
import ConfirmModal from "./ui/ConfirmModal";
import styles from "./AppointmentList.module.css";

export default function AppointmentList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // estados para modal
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAppointments();
      setList(data);
    } catch (err) {
      setError(err.message || "Erro ao carregar agendamentos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // abrir modal de confirmação
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

  // confirmar exclusão
  const handleConfirm = async () => {
    try {
      await deleteAppointment(selectedId);
      setList((prev) => prev.filter((a) => a._id !== selectedId));
    } catch (err) {
      alert(err.message || "Erro ao deletar");
    } finally {
      setConfirmOpen(false);
      setSelectedId(null);
    }
  };

  // cancelar exclusão
  const handleCancel = () => {
    setConfirmOpen(false);
    setSelectedId(null);
  };

  if (loading) return <p>Carregando agendamentos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={styles.appointmentContainer}>
      <h1>Lista de Agendamentos</h1>
      <div className={styles.appointmentList}>
        {list.length === 0 && <p>Nenhum agendamento encontrado</p>}
        {list.map((a) => (
          <AppointmentItem
            key={a._id}
            appointment={a}
            onDelete={() => handleDeleteClick(a._id)}
          />
        ))}
      </div>

      {/* Modal de confirmação */}
      <ConfirmModal
        open={confirmOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        message="Deseja realmente excluir este agendamento?"
      />
    </div>
  );
}
