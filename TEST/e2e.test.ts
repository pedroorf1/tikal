import { expect, test, describe } from "@jest/globals";
import supertest from "supertest";
import App from "../src/server/server";

describe("TESTE API NOTAS - HOME ROUTES TESTE", () => {
  console.clear();
  console.log(new Date());
  // jest.setTimeout(10000);
  test("To have a property message", async () => {
    const response = await supertest(App).get("/");
    expect(response.body).toHaveProperty("message");
    return;
  });
  test("Page not found, To have a property alert", async () => {
    const response = await supertest(App).get("/saasrass");
    expect(response.body).toHaveProperty("alert");
    return;
  });
});

describe("TESTE API NOTAS - TEACHER ROUTES TESTE", () => {
  test("should have a list of stundents", async () => {
    const response = await supertest(App).get("/professor");
    expect(response.statusCode).toBe(200);
    return;
  });
});

describe("TESTE API NOTAS - STUDENTS ROUTES TESTE", () => {
  test("should have create a stundent", async () => {
    const response = await supertest(App).post("/alunos").send({
      name: "Raimundo fernando",
    });
    expect(response.body.message).toEqual("Aluno cadastrado");
    expect(response.statusCode).toBe(200);
    return;
  });
  test.only("should have get stundent list and points", async () => {
    const response = await supertest(App).get("/alunos");
    expect(response.body).toBeInstanceOf(Object);
    expect(response.statusCode).toBe(200);
    return;
  });
  test("should have add full notes for student", async () => {
    const response = await supertest(App).post("/professor").send({
      alunoId: 1,
      nota1: 5.5,
      nota2: 5.5,
      nota3: 5.5,
      nota4: 5.5,
    });
    expect(response.body).toHaveProperty("message");
    expect(response.statusCode).toBe(200);
    return;
  });
  test("should have update full notes for student", async () => {
    console.clear();
    console.log("===================\n===================\n");
    const response = await supertest(App).post("/professor").send({
      alunoId: 2,
      nota1: 5.9,
      nota2: 5.5,
      nota3: 7.0,
      nota4: 8.0,
    });
    console.debug("RESPOSTA: ", response.body);
    expect(response.body).toHaveProperty("message");
    expect(response.statusCode).toBe(200);
    return;
  });
  test("should have satus code 401 couse values have undefined", async () => {
    console.clear();
    console.log("===================\n===================\n");
    const response = await supertest(App).post("/professor").send({
      alunoId: 2,
      nota1: undefined,
      nota2: 5.5,
      nota3: 7.0,
      nota4: 8.0,
    });
    console.debug("RESPOSTA: ", response.body);
    expect(response.body).toHaveProperty("message");
    expect(response.statusCode).toBe(401);
    return;
  });
});
