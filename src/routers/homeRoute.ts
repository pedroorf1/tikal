import express from "express";
const router = express();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Bem vindo a central de notas dos alunos" });
});

export default router;
