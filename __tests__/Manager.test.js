const Manager = require("../lib/Manager");

test("Employee can set name",()=>{
    const name = "Aditya";
    const testObj = new Employee(name);
    expect(testObj.name).toBe(name);

});