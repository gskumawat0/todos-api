const app = require("../app");
const request = require("supertest");

describe("GET /", () => {
  it("responds with a json message", async () => {
    const response = await request(app).get("/");
    expect(response.body.message).toBe("hi from express");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });
});

describe("GET /health", () => {
  it("responds with a json message", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });
});
