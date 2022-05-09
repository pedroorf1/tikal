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

    await SQL(
      "INSERT INTO alunos(nome) VALUES('" + name + "')",
      (err, resp) => {
        if (err) {
          console.info("Erro:", err);
          res.status(400).send({ error: err });
          return;
        }
        res.status(200).send({ message: "Aluno cadastrado" });
        return resp;
      }
    );
  }
  //exclue aluno
  static async delete(req: Request, res: Response) {
    return;
  }

  //verifica se o aluno exist
  static async alunoExists(alunoId: string) {
    const verifyAlunoExists = await SQL(
      "SELECT * FROM alunos WHERE id =" + { alunoId },
      null
    );

    if (verifyAlunoExists.rowCount < 1) {
      return false;
    }
    return true;
  }
};

export default Controller;
