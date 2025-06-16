const Task = require('../models/task.model');

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title, userId: req.user.id });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

    task.status = task.status === 'pendente' ? 'concluida' : 'pendente';
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar status' });
  }
};