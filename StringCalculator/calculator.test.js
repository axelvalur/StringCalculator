const add = require("./calculator");

//Tests for the first step
it("should return 0 if string is empty", () =>
{
    expect(add("")).toBe(0);
});