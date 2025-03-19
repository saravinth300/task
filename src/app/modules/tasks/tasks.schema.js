import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    name: z.string().min(3, "Task name should be at least 3 characters long"),
    priority: z.enum(["high", "medium", "low"], { message: "Invalid priority value" }),
    status: z.enum(["pending", "ongoing", "completed"]).optional(),
    dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    createdBy: z.string().length(24, "Invalid user ID"),
  }),
});

