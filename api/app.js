import express from "express";
export const router = express.Router();
import { employeesrouter } from "./employees.js";
//Currently, PATH is /api <---This is set in main app.js file

//PATH is /api/employees
router.use("/employees", employeesrouter);
