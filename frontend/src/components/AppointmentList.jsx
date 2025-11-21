import React, { useEffect, useState } from "react";
import { fetchAppointments, deleteAppointment } from "../api/api";
import AppointmentItem from "./AppointmentItem";
import ConfirmModal from "./ui/ConfirmModal";
import CreateAppointment from "./CreateAppointment"; // formulário reutilizado
import styles from "./AppointmentList.module.css";

export default function AppointmentList({ onBack }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // modal de exclusão
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // edição
  const [editingAppointment, setEditingAppointment] = useState(null);

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

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

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

  const handleCancel = () => {
    setConfirmOpen(false);
    setSelectedId(null);
  };

  // abrir formulário de edição
  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
  };

  // quando edição for concluída ou cancelada
  const handleEditedOrCanceled = () => {
    setEditingAppointment(null);
    load(); // recarrega a lista atualizada
  };

  if (loading) return <p>Carregando agendamentos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={styles.appointmentContainer}>
      <h1>Lista de Agendamentos</h1>

      {editingAppointment ? (
        <CreateAppointment
          existingAppointment={editingAppointment}
          onCreated={handleEditedOrCanceled}
          onCancel={handleEditedOrCanceled} // botão Cancelar volta para a lista
        />
      ) : (
        <>
          <div className={styles.appointmentList}>
            {list.length === 0 && <p>Nenhum agendamento encontrado</p>}
            {list.map((a) => (
              <AppointmentItem
                key={a._id}
                appointment={a}
                onDelete={() => handleDeleteClick(a._id)}
                onEdit={() => handleEdit(a)}
              />
            ))}
          </div>
        </>
      )}

      <ConfirmModal
        open={confirmOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        message="Deseja realmente excluir este agendamento?"
      />
    </div>
  );
}
