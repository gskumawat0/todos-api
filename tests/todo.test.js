const app = require("../app");
const request = require("supertest");

describe("GET /api/todos", () => {
  it("responds with a json message", async () => {
    const response = await request(app).get("/api/todos");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual([]);
  });
});

describe("POST /api/todos", () => {
  it("responds with a json message", async () => {
    const response = await request(app)
      .post("/api/todos")
      .send({ name: "test todo" });
    expect(response.statusCode).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.name).toBe("");
  });
});
