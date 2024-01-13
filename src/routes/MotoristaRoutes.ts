import { Router } from "express"
import { MotoristaController } from "../controllers/MotoristaController";


const motoristaRoutes = Router();
const controller = new MotoristaController();

motoristaRoutes.get("/motorista" , controller.getAll );
motoristaRoutes.get("/motorista/:id" , controller.getById );
motoristaRoutes.post("/motorista" , controller.add)
motoristaRoutes.put("/motorista/:id" , controller.update)
motoristaRoutes.delete("/motorista/:id" , controller.delete)

export {motoristaRoutes}