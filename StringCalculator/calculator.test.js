const add = require("./calculator");

//Tests for the first step

//Testing empty string
it("should return 0 if string is empty", () =>
{
    expect(add("")).toBe(0);
});

it("Should return mumber if the string only contains one number", () => 
{
    expect(add("1")).toBe(1);
});