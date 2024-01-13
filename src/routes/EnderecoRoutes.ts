import { Router } from "express"
import { EnderecoController } from "../controllers/EnderecoController";


const enderecoRoutes = Router();
const controller = new EnderecoController();

enderecoRoutes.get("/endereco" , controller.getAll );
enderecoRoutes.get("/endereco/:id" , controller.getById );
enderecoRoutes.post("/endereco" , controller.add)
enderecoRoutes.put("/endereco/:id" , controller.update)
enderecoRoutes.delete("/endereco/:id" , controller.delete)

export {enderecoRoutes}