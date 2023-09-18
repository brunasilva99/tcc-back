import express from "express";
import userRoutes from "./routes/vicios_do_user.js";
import viciosRoutes from "./routes/vicios.js";
import anotacoesRoutes from "./routes/anotacoes.js";
import motivosRoutes from "./routes/motivos.js";
import recaidasRoutes from "./routes/recaidas.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/vicios-usuario", userRoutes);
app.use("/vicios-sistema", viciosRoutes);
app.use("/anotacoes", anotacoesRoutes);
app.use("/motivos", motivosRoutes);
app.use("/recaidas", recaidasRoutes);

app.listen(3000);