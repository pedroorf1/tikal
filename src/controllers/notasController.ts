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
    // const data = { rows: resp["rows"] };
    res.status(200).send(resp);
    return resp;
  }
  //INSERIR NOTAS
  static async insertNotas(req: Request, res: Response) {
    const { alunoId, nota1, nota2, nota3, nota4 } = req.body;

    if (!alunoId || !nota1 || !nota2 || !nota3 || !nota4) {
      res.status(403).send({
        message: "Dados invalidos, verifque campos que não foram preenchidos",
      });
      return;
    }

    const verifyAlunoExists = await alunoExists(alunoId);

    if (verifyAlunoExists) {
      res
        .status(403)
        .send({ message: "Aluno não foi encontrado em nosso banco de dados" });
      return;
    }
  }
};

async function alunoExists(alunoId: string) {
  const exists = await SQL("SELECT * FROM alunos WHERE id =" + { alunoId });
  if (exists.rowCount < 1) {
    return false;
  }
  return true;
}

export default Controller;
