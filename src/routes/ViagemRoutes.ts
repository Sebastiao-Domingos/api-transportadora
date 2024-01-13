import { Router } from "express"
import { ViagemController } from "../controllers/ViagemController";


const viagemRoutes = Router();
const controller = new ViagemController();

viagemRoutes.get("/viagem" , controller.getAll );
viagemRoutes.get("/viagem/:id" , controller.getById );
viagemRoutes.post("/viagem" , controller.add)
viagemRoutes.put("/viagem/:id" , controller.update)
viagemRoutes.delete("/viagem/:id" , controller.delete)

export {viagemRoutes}