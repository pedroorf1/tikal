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

describe("TESTE API NOTAS - STUDENT ROUTES TESTE", () => {
  test("should have a stundents list of points", async () => {
    const response = await supertest(App).get("/aluno/2");
    expect(response.statusCode).toBe(200);
    return;
  });
});

describe("TESTE API NOTAS - STUDENTS ROUTES TESTE", () => {
  test("should have create a status code 401 couse id not passed", async () => {
    const response = await supertest(App).get("/aluno");
    console.info(response.body);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.statusCode).toBe(401);
    return;
  });
});
