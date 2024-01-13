import { PrismaClient } from "@prisma/client";
import { Router } from "express"
import { AdminController } from "../controllers/AdminController";


const adminRoutes = Router();
const prisma = new PrismaClient();
const controller = new AdminController();

adminRoutes.get("/administrador" , controller.getAll );
adminRoutes.get("/administrador/:id" , controller.getById );
adminRoutes.post("/administrador" , controller.add)
adminRoutes.put("/administrador/:id" , controller.update)
adminRoutes.delete("/administrador/:id" , controller.delete)

export {adminRoutes}