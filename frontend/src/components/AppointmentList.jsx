import React, { useEffect, useState } from "react";
import { fetchAppointments, deleteAppointment } from "../api/api";
import AppointmentItem from "./AppointmentItem";
import ConfirmModal from "./ui/ConfirmModal";
import CreateAppointment from "./CreateAppointment"; 
import styles from "./AppointmentList.module.css";

export default function AppointmentList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [editingAppointment, setEditingAppointment] = useState(null);
  const [creating, setCreating] = useState(false);

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

  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
    setCreating(false);
  };

  const handleEditedOrCanceled = () => {
    setEditingAppointment(null);
    setCreating(false);
    load();
  };

if (loading)
  return (
    <p
      style={{
        textAlign: "center",
        marginTop: "8em",
        fontSize: "1.5rem",
        fontWeight: "500",
      }}
    >
      Carregando agendamentos...
    </p>
  );  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const isEditingOrCreating = editingAppointment !== null || creating;

  return (
    <div className={styles.appointmentContainer}>

      {!isEditingOrCreating && list.length > 0 && (
        <div className={styles.header}>
          <h1>Lista de Agendamentos</h1>

          <button
            className={styles.createButton}
            onClick={() => setCreating(true)}
          >
            Criar Agendamento
          </button>
        </div>
      )}

      {isEditingOrCreating ? (
        <CreateAppointment
  existingAppointment={editingAppointment}
  onCreated={handleEditedOrCanceled}  
  onCancel={() => {
    setEditingAppointment(null);
    setCreating(false);
  }}
/>
      ) : list.length === 0 ? (

        <div className={styles.createFirstAppointment}>
          <h1>Organize suas tarefas!</h1>
          <h2>Você ainda não tem nenhum agendamento</h2>
          <p>Crie seu primeiro agendamento agora!</p>

          <button onClick={() => setCreating(true)}>
            Criar Seu Primeiro Agendamento
          </button>
        </div>

      ) : (
        <div className={styles.appointmentList}>
          {list.map((a) => (
            <AppointmentItem
              key={a._id}
              appointment={{
                ...a,
                appointmentDate: a.appointmentDate
                  ? new Date(a.appointmentDate).toISOString().slice(0, 10)
                  : "",
              }}
              onDelete={() => handleDeleteClick(a._id)}
              onEdit={() => handleEdit(a)}
            />
          ))}
        </div>
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
