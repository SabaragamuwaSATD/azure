// tests/app.test.js
const request = require("supertest");
const app = require("../src/app");

describe("Root Endpoint", () => {
  it("should return welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });
});

describe("Users Endpoints", () => {
  it("should fetch all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Add more tests as needed
});
