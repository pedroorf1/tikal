import express from "express";
const router = express();

import notasController from "../controllers/notasController";

router.get("/", notasController.listAlunos);
router.get("/notas", notasController.listAlunosAndPoints);
router.post("/", notasController.insertNotas);

export default router;
