import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js"; 
import appointmentRoutes from "./routes/appointments.js"; 

dotenv.config(); 

connectDB();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "*"
}));
app.use(express.json());

app.use("/agendamentos", appointmentRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
