import Task from "../models/Task.js";


export const createTask = async (req, res) => {
  try {
    const { name, priority, status, dueDate, createdBy } = req.body;
    const newTask = new Task({ name, priority, status, dueDate, createdBy });
    await newTask.save();
    res.status(201).json({ success: true, message: "Task created successfully", task: newTask });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getTasks = async (req, res) => {
  try {
    const { search, priority, status } = req.query;
    let query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
    if (priority) {
      query.priority = priority;
    }
    if (status) {
      query.status = status;
    }

    const tasks = await Task.find(query);
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ success: false, message: "Task not found" });

    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ success: false, message: "Task not found" });

    res.status(200).json({ success: true, message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
