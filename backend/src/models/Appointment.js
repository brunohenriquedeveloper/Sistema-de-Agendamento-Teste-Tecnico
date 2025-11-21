import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Por favor, informe o nome do cliente"],
      trim: true,
      minlength: [3, "O nome deve ter pelo menos 3 caracteres"],
    },

    service: {
      type: String,
      required: [true, "Por favor, informe o serviço"],
      trim: true,
      minlength: [3, "O serviço deve ter pelo menos 3 caracteres"],
    },

    appointmentDate: {
      type: Date,
      required: [true, "Por favor, informe a data do compromisso"],
    },

    appointmentTime: {
      type: String,
      required: [true, "Por favor, informe o horário do compromisso"],
      match: [/^\d{2}:\d{2}$/, "Horário inválido, use o formato HH:MM"],
    },

    status: {
      type: String,
      enum: ["pendente", "feito", "cancelado"],
      default: "pendente",
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
