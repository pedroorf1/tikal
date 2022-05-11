import { Response, Request } from "express";
import SQL from "../database/connectPG";

//class
const Controller = class {
  static async listAlunos(req: Request, res: Response) {
    const resp = await SQL("SELECT * FROM alunos");
    if (resp.error) {
      res.status(400).send({ error: resp.error.message });
      return;
    }
    res.status(200).send(resp);
    return resp;
  }
  //lista de alunos e notas
  static async listAlunosAndPoints(req: Request, res: Response) {
    const resp = await SQL("SELECT * FROM notas");
    if (resp.error) {
      res.status(400).send({ error: resp.error.message });
      return;
    }
    res.status(200).send(resp.rows);
    return resp;
  }
  //INSERIR NOTAS
  static async insertNotas(req: Request, res: Response) {
    const { alunoId, nota1, nota2, nota3, nota4 } = req.body;
    if (!alunoId || !nota1 || !nota2 || !nota3 || !nota4) {
      res.status(401).send({
        message: "Dados invalidos, verifque campos que não foram preenchidos",
      });
      return;
    }
    const verifyNotaExists = await notasExists(alunoId);

    if (!verifyNotaExists) {
      const response = await SQL(
        "INSERT INTO notas VALUES(DEFAULT," +
          alunoId +
          "," +
          nota1 +
          "," +
          nota2 +
          "," +
          nota3 +
          "," +
          nota4 +
          ")"
      );
      res.status(200).send({
        message: "Notas cadastradas para este aluno",
        response,
        verifyNotaExists,
      });
      return;
    }

    //update notas
    const responseUpdateNota = await SQL(
      "UPDATE notas SET nota1=" +
        nota1 +
        ",nota2=" +
        nota2 +
        ",nota3=" +
        nota3 +
        ",nota4=" +
        nota4 +
        " WHERE idaluno ='" +
        alunoId +
        "'"
    );
    res.status(200).send({
      message: "Notas atulizadas para este aluno",
      responseUpdateNota,
    });
  }
};

async function notasExists(alunoId: string) {
  const exists = await SQL(
    "SELECT * FROM notas WHERE idaluno ='" + alunoId + "' LIMIT 1"
  );
  if (exists) {
    return true;
  }
  return false;
}

export default Controller;
