import { Response, Request } from "express";
import SQL from "../database/connectPG";

//class
const Controller = class {
  static async listarNotasPorAluno(req: Request, res: Response) {
    const { _id } = req.params;
    if (!_id) {
      res.status(401).send({ message: "Aluno invalido para a busca" });
      return;
    }

    const resp = await SQL(
      "SELECT * FROM notas WHERE idaluno ='" + _id + "' LIMIT 1"
    );
    if (resp.error) {
      res
        .status(403)
        .send({ message: "Aluno não existe em nosso banco de notas" });
      return;
    }
    const rows = resp.rows[0];
        res.status(200).send({ rows });
    return resp;
  }
};

export default Controller;
