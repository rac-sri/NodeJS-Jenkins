const request = require("supertest");
let server;

describe("Stage 2", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(() => {
    server.close();
  });

  it("status should be 200", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });
});
