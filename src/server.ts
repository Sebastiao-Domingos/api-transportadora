import express from 'express'
import cors from "cors"
import { adminRoutes } from './routes/AdminRoutes'
import { caminhaoRoutes } from './routes/CaminhaoRoutes'
import { pneuRoutes } from './routes/PneiRoutes'
import { motoristaRoutes } from './routes/MotoristaRoutes'
import { enderecoRoutes } from './routes/EnderecoRoutes'
import { viagemRoutes } from './routes/ViagemRoutes'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json());
app.use(adminRoutes);
app.use(caminhaoRoutes);
app.use(pneuRoutes);
app.use(motoristaRoutes)
app.use(enderecoRoutes)
app.use(viagemRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
