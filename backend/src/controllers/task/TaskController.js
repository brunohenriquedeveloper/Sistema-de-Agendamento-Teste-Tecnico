import asyncHandler from "express-async-handler";
import TaskModel from "../../models/tasks/TaskModel.js";


export const createTask = asyncHandler(async (req, res)=> {
   


    try {
        const {title, description, appointmentDate, appointmentTime, priority, status} = req.body

        if(!title || title.trim() === "") {
            return res.status(400).json({message: "O titulo é obrigatório"})
        }

        if(!description || description.trim() === "") {
           return res.status(400).json({message: "A descrição é obrigatória"})
        }

        const task = new TaskModel({
            title,
            description,
            appointmentDate,
            appointmentTime,
            priority,
            status,
            user: req?.user?._id,
        })

        await task.save()

        return res.status(201).json(task)
    } catch(error){
        console.error("Erro ao criar a tarefa:", error.message)
        res.status(500).json({message: "Erro ao criar a tarefa", error: error.message})
    }
})

export const getTasks = asyncHandler(async (req, res) => {

    try {
        const userId = req?.user?._id

        if(!userId) {
            return res.status(401).json({message: "Usuário não autenticado"})
        }

        const tasks = await TaskModel.find({user: userId})

        return res.status(200).json({
            length: tasks.length,
            tasks,
        })
} catch (error) {
        console.error("Erro ao buscar as tarefas:", error.message)
        res.status(500).json({message: "Erro ao buscar as tarefas", error: error.message})
    }
})

export const getTask = asyncHandler(async (req, res) => {

    try {
        const userId = req?.user?._id

        const {id} = req.params 

        if(!id) {
            return res.status(400).json({message: "Por favor forneça um ID válido para o seu compromisso"})
        }

        const task = await TaskModel.findById(id)

        if(!task) {
            return res.status(404).json({message: "Tarefa não encontrada"})
        }
    
        if(!task.user.equals(userId)) {
            return res.status(403).json({message: "Acesso negado ao compromisso"})
        }

        return res.status(200).json(task)

    } catch (error) {
        console.error("Erro ao buscar a tarefa:", error.message)
        res.status(500).json({message: "Erro ao buscar a tarefa", error: error.message})
    }
})

export const updateTask = asyncHandler(async (req, res) => {
    try {
        const userId = req?.user?._id

        const {id} = req.params
        const {title, description, appointmentDate, appointmentTime, priority, status, completed} = req.body

        if(!id) {
            return res.status(400).json({message: "Por favor forneça um ID válido para o seu compromisso"})
        }
        
        const task = await TaskModel.findById(id)

        if(!task) {
            return res.status(404).json({message: "Compromisso não encontrado"})
        }

        //Cheque só para confirmar se o usuário é o dono do compromisso
        if (!task.user.equals(userId)) {
            return res.status(403).json({message: "Acesso negado ao compromisso"})
        }

        task.title = title || task.title
        task.description = description || task.description
        task.appointmentDate = appointmentDate || task.appointmentDate
        task.appointmentTime = appointmentTime || task.appointmentTime
        task.priority = priority || task.priority
        task.status = status || task.status
        task.completed = completed !== undefined ? completed : task.completed

        await task.save()
        return res.status(200).json(task)
    } catch (error) {
        console.error("Erro ao atualizar a tarefa:", error.message)
        res.status(500).json({message: "Erro ao atualizar a tarefa", error: error.message})
    }
})