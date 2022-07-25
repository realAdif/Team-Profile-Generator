const Manager = require("../lib/Manager");

test("Manager can set name",()=>{
    const name = "Aditya";
    const testObj = new Manager(name);
    expect(testObj.name).toBe(name);

});
test("Manager can set id",()=>{
    const id = 3;
    const testObj = new Manager("Aditya",id);
    expect(testObj.id).toBe(id);

});

test("Manager can set email",()=>{
    const email = "Aditya@fakeemail.com";
    const testObj = new Manager("Aditya",12,email);
    expect(testObj.email).toBe(email);

});
test("Manager is a object",()=>{
    const testObj = new Manager("Aditya",12,"Aditya@fakeemail.com");
    expect(typeof(testObj)).toBe("object");

});
test("Manager getRole() return Manager ",()=>{
    const testObj = new Manager("Aditya",12,"Aditya@fakeemail.com");
    expect(testObj.getRole()).toBe("Manager");

});