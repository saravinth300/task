import User from "./user.model.js"
import {
  successResponse,
  serverErrorResponse,
} from "../../helpers/apiResponse.js"

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return successResponse(res, "User created successfully", user);
  } catch (error) {
    return serverErrorResponse(res, error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return successResponse(res, "Users retrieved successfully", users);
  } catch (error) {
    return serverErrorResponse(res, error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return successResponse(res, "User retrieved successfully", user);
  } catch (error) {
    return serverErrorResponse(res, error.message);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return successResponse(res, "User updated successfully", user);
  } catch (error) {
    return serverErrorResponse(res, error.message);
  }
};
