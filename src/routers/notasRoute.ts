import express from "express";
const router = express();

import notasController from "../controllers/notasController";

router.get("/", notasController.listAlunos);
router.post(
  "/:alunoId/:nota1/:nota2:/:nota3/:nota4",
  notasController.insertNotas
);

export default router;
