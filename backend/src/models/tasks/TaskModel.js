import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "Por favor coloque um título"],
            unique: true,
        },

        description: {
            type: String,
            default: "Sem Descrição"
        },

       appointmentDate: {
            type: Date,
            required: [true, "Por favor coloque a data do seu compromisso"],
        },

        appointmentTime: {
            type: String, 
            required: [true, "Por favor coloque a hora do seu compromisso"],
        },

        status: {
            type: String,
            enum: ["ativo", "inativo"],
            default: "ativo",
        },

        completed: {
           type: Boolean,
           default: false,
        },

        priority: {
            type: String,
            enum: ["baixa", "média", "alta"],
            default: "baixa",
        },

        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required:true,
        },
        
    }, 
     {timestamps: true}
)

const TaskModel = mongoose.model("Task", TaskSchema)

export default TaskModel