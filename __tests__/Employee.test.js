const Employee = require("../lib/Employee");

test("Employee can set name",()=>{
    const name = "Aditya";
    const testObj = new Employee(name);
    expect(testObj.name).toBe(name);

});

test("Employee can set id",()=>{
    const id = 3;
    const testObj = new Employee("Aditya",id);
    expect(testObj.id).toBe(id);

});

test("Employee can set email",()=>{
    const email = "Aditya@fakeemail.com";
    const testObj = new Employee("Aditya",12,email);
    expect(testObj.email).toBe(email);

});

test("Employee is a object",()=>{
    const testObj = new Employee("Aditya",12,"Aditya@fakeemail.com");
    expect(typeof(testObj)).toBe("object");

});
test("Employee getRole() return Employee ",()=>{
    const testObj = new Employee("Aditya",12,"Aditya@fakeemail.com");
    expect(testObj.getRole()).toBe("Employee");

});