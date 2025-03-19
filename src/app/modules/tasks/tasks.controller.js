import Task from "./tasks.model.js";
import {
  successResponse,
  validationResponse,
  serverErrorResponse, 
  notFoundResponse,
} from "../../helpers/apiResponse.js";

export const createTask = async (req, res) => {
  try {
    const { name, priority, status, dueDate, createdBy } = req.body;
    if (!name || !priority || !status || !dueDate || !createdBy) {
      return validationResponse(res, "All fields are required");
    }

    const newTask = new Task({ name, priority, status, dueDate, createdBy });
    await newTask.save();
    return successResponse(res, "Task created successfully", newTask);
  } catch (error) {
    return serverErrorResponse(res, error.message);
  }
};

export const getTasks = async (req, res) => {
  try {
    const { search, priority, status } = req.query;
    let query = {};

    if (search) query.name = { $regex: search, $options: "i" };
    if (priority) query.priority = priority;
    if (status) query.status = status;

    const tasks = await Task.find(query);
    return successResponse(res, "Tasks fetched successfully", tasks);
  } catch (error) {
    return serverErrorResponse(res, error.message);
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return notFoundResponse(res, "Task not found");
    return successResponse(res, "Task fetched successfully", task);
  } catch (error) {
    return serverErrorResponse(res, error.message);
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return notFoundResponse(res, "Task not found");
    return successResponse(res, "Task updated successfully", updatedTask);
  } catch (error) {
    return serverErrorResponse(res, error.message);
  }
};
