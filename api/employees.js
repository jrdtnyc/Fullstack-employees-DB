import express from "express";
export const employeesrouter = express.Router();

// TODO: this file!
import {
  createEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
} from "../db/queries/employees.js";

//Get a list of all employees - /api/employees
employeesrouter.get("/", async (req, res, next) => {
  res.send(await getEmployees());
});

//Create new employee - /api/employees
employeesrouter.post("/", async (req, res, next) => {
  if (!req.body) {
    return res.status(400);
  }
  res.send(await createEmployee(req.body));
  res.status(201).send("Created New Employee");
});

//Get employee by ID - /api/employees/:id
employeesrouter.get("/:id", async (req, res, next) => {
  if (!req.body) {
    return res.status(400);
  }
  const { id } = req.params;
  res.send(await createEmployee(id));
});

//Delete employee by ID -
employeesrouter.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  await deleteEmployee(id);
  res.status(204).send("Deleted");
});
