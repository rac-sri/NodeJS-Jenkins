const checkTheUnitTest = require("../../utils");

describe("stage 1", () => {
  it("Unit Tests", () => {
    console.log(checkTheUnitTest);
    const value = checkTheUnitTest();
    expect(value).toMatch("Yes");
  });

  afterAll(async (done) => {
    done();
  });
});
