import { PrismaClient } from "@prisma/client";
import { Router } from "express"
import { CaminhaoController } from "../controllers/CaminhaoController";


const caminhaoRoutes = Router();
const prisma = new PrismaClient();
const controller = new CaminhaoController();

caminhaoRoutes.get("/caminhao" , controller.getAll );
caminhaoRoutes.get("/caminhao/:id" , controller.getById );
caminhaoRoutes.post("/caminhao" , controller.add)
caminhaoRoutes.put("/caminhao/:id" , controller.update)
caminhaoRoutes.delete("/caminhao/:id" , controller.delete)

export {caminhaoRoutes}