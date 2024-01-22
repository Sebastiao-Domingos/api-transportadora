import express from 'express'
import { adminRoutes } from './routes/AdminRoutes'
import { caminhaoRoutes } from './routes/CaminhaoRoutes'
import { pneuRoutes } from './routes/PneiRoutes'
import { motoristaRoutes } from './routes/MotoristaRoutes'
import { enderecoRoutes } from './routes/EnderecoRoutes'
import { viagemRoutes } from './routes/ViagemRoutes'
import bodyParser from 'body-parser'

const app = express()
const port = 3333

app.use(bodyParser.json())

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', `http://localhost:3000`);
//     // res.header('Access-Control-Allow-Headers', "true");
//     // res.header('Access-Control-Allow-Credentials', "true");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });

app.use(express.json());

app.use(adminRoutes);
app.use(caminhaoRoutes);
app.use(pneuRoutes);
app.use(motoristaRoutes)
app.use(enderecoRoutes)
app.use(viagemRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
