import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const { title, description, appointmentDate, appointmentTime, status } = req.body;

    const newAppointment = await Appointment.create({
      title,
      description,
      appointmentDate,
      appointmentTime,
      status,
    });

    return res.status(201).json({
      message: "Agendamento criado com sucesso",
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Erro ao criar agendamento:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ appointmentDate: 1 });

    return res.status(200).json(appointments);
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({ error: "Agendamento não encontrado" });
    }

    return res.status(200).json(appointment);
  } catch (error) {
    console.error("Erro ao buscar agendamento:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ error: "Agendamento não encontrado" });
    }

    return res.status(200).json({
      message: "Agendamento atualizado com sucesso",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error("Erro ao atualizar agendamento:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// Deletar um compromisso
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Appointment.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Agendamento não encontrado" });
    }

    return res.status(200).json({ message: "Agendamento removido com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar agendamento:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};
