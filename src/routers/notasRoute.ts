import express from "express";
const router = express();

import notasController from "../controllers/notasController";

router.get("/:_id?", notasController.listarNotasPorAluno);

export default router;
