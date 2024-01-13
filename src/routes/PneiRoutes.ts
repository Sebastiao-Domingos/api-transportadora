import { PrismaClient } from "@prisma/client";
import { Router } from "express"
import { PneuController } from "../controllers/PneuController";


const pneuRoutes = Router();
const prisma = new PrismaClient();
const controller = new PneuController();

pneuRoutes.get("/pneu" , controller.getAll );
pneuRoutes.get("/pneu/:id" , controller.getById );
pneuRoutes.post("/pneu" , controller.add)
pneuRoutes.put("/pneu/:id" , controller.update)
pneuRoutes.delete("/pneu/:id" , controller.delete)

export {pneuRoutes}