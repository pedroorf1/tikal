import express from "express";
const server = express();
import cors from "cors";
import dotenv from "dotenv";

server.use(express.json());
server.use(cors());
dotenv.config();
server.use(express.urlencoded({ extended: true }));
import notasRouter from "../routers/notasRoute";
import homeRouter from "../routers/homeRoute";
import studentsRouter from "../routers/studentsRoute";

server.use("/professor", notasRouter);
server.use("/alunos", studentsRouter);
server.use("/", homeRouter);
server.get("*", (req, res) => {
  res.status(200).send({ alert: "Erro 404: Pagina não encontrada" });
});

export default server;
