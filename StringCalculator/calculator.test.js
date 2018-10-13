const add = require("./calculator");

//Tests for the first step

//Testing empty string
it("should return 0 if string is empty", () =>
{
    expect(add("")).toBe(0);
});

//Testing adding one number
it("Should return number if the string only contains one number", () => 
{
    expect(add("1")).toBe(1);
});

//Testing adding two numbers
it("Should return sum of two numbers", () => 
{
    expect(add("1,2")).toBe(3);
});

//Tests for the second step

//Testing adding 3 numbers
it("Should return the sum of 3 numbers", () => 
{
    expect(add("1,2,3")).toBe(6);
});

//Testing adding 5 numbers
it("Should return the sum of 5 numbers", () => 
{
    expect(add("1,2,3,4,5")).toBe(15);
});

//Tests for the third step

//Testing if it recognizes \n as a delimiter
it("Should return the sum of 3 numbers", () => 
{
    expect(add("1,2\n3")).toBe(6);
});