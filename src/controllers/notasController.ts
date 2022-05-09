import { Response, Request } from "express";
import SQL from "../database/connectPG";

//class
const Controller = class {
  static async listAlunos(req: Request, res: Response) {
    await SQL("SELECT * FROM alunos", (err, resp) => {
      if (err) {
        res.status(400).send({ error: err });
        return;
      }
      // const data = { rows: resp["rows"] };
      res.status(200).send(resp);
      return resp;
    });
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

    const verifyAlunoExists = await SQL(
      "SELECT * FROM alunos WHERE id =" + { alunoId },
      (err, resp) => {
        if (err) {
          res.status(400).send({ error: err });
          return err;
        }
        console.info("Minha resposta:", resp);
        return resp;
      }
    );

    if (verifyAlunoExists.rowCount < 1) {
      res
        .status(403)
        .send({ message: "Aluno não foi encontrado em nosso banco de dados" });
      return;
    }
    console.info(verifyAlunoExists);
    // const result = await SQL(`INSERT * FROM alunos`);
    // if (result.error) {
    //   res.status(403).send({
    //     message: "Houveram erros na consulta",
    //     err: result.error,
    //   });
    //   return;
    // }
    // res.status(200).send(result);
    return;
  }
};

export default Controller;
