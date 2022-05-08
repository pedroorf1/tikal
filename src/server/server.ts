import express from "express";
const server = express();
import cors from "cors";
import dotenv from "dotenv";

server.use(express.json());
server.use(cors());
dotenv.config();
server.use(express.urlencoded({ extended: true }));
import notasRouter from "../routers/notasRoute";

server.use("/professor", notasRouter);
server.get("*", (req, res) => {
  res.status(200).send({ alert: "Erro 404: Pagina não encontrada" });
});

export default server;
