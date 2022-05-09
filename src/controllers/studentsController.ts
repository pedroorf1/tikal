import { Response, Request } from "express";
import SQL from "../database/connectPG";

//class
const Controller = class {
  //cria um aluno
  static async create(req: Request, res: Response) {
    console.info("Body: ", req.body);
    const { name } = req.body;
    if (!name) {
      res.status(403).send({ alert: "Dados inválidos" });
      return;
    }

    const resp = await SQL("INSERT INTO alunos(nome) VALUES('" + name + "')");

    if (resp.error) {
      res.status(400).send({ error: resp.error });
      return;
    }
    res.status(200).send({ message: "Aluno cadastrado" });
    return resp;
  }
  //exclue aluno
  static async delete(req: Request, res: Response) {
    return;
  }

  //verifica se o aluno exist
  static async alunoExists(alunoId: string) {
    const verifyAlunoExists = await SQL(
      "SELECT * FROM alunos WHERE id =" + { alunoId }
    );

    if (verifyAlunoExists) {
      return false;
    }
    return true;
  }
};

export default Controller;
