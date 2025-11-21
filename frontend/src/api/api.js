const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const fetchAppointments = async () => {
  const res = await fetch(`${API_BASE}/agendamentos`);
  if (!res.ok) throw new Error("Erro ao buscar agendamentos");
  return res.json();
};

export const createAppointment = async (payload) => {
  const res = await fetch(`${API_BASE}/agendamentos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(()=>({message:'Erro'}));
    throw new Error(err.message || "Erro ao criar agendamento");
  }
  return res.json();
};

export const deleteAppointment = async (id) => {
  const res = await fetch(`${API_BASE}/agendamentos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Erro ao deletar agendamento");
  return res.json();
};

export const updateAppointment = async (id, payload) => {
  const res = await fetch(`${API_BASE}/agendamentos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Erro" }));
    throw new Error(err.message || "Erro ao atualizar agendamento");
  }

  return res.json();
};