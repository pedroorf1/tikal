import express from "express";
const router = express();

import studentsController from "../controllers/studentsController";

router.post("/", studentsController.create);
export default router;
