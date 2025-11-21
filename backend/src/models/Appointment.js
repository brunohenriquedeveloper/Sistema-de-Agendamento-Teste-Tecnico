import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Por favor, informe um título para o compromisso"],
      trim: true,
      minlength: [3, "O título deve ter pelo menos 3 caracteres"]
    },

    description: {
      type: String,
      default: "Sem descrição",
      trim: true
    },

    appointmentDate: {
      type: Date,
      required: [true, "Por favor, informe a data do compromisso"],
    },

    appointmentTime: {
      type: String,
      required: [true, "Por favor, informe o horário do compromisso"],
      // Ex: "14:30"
      match: [/^\d{2}:\d{2}$/, "Horário inválido, use o formato HH:MM"]
    },

    status: {
      type: String,
      enum: ["pendente", "feito", "cancelado"],
      default: "pendente",
    },


    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
