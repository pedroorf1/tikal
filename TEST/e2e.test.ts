import { expect, test, describe } from "@jest/globals";
import supertest from "supertest";
import App from "../src/server/server";

describe("TESTE API NOTAS - HOME ROUTES TESTE", () => {
  console.clear();
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
});
