const Intern = require("../lib/Intern");

test("Intern can set name",()=>{
    const name = "Aditya";
    const testObj = new Intern(name);
    expect(testObj.name).toBe(name);

});
test("Intern can set id",()=>{
    const id = 3;
    const testObj = new Intern("Aditya",id);
    expect(testObj.id).toBe(id);

});

test("Intern can set email",()=>{
    const email = "Aditya@fakeemail.com";
    const testObj = new Intern("Aditya",12,email);
    expect(testObj.email).toBe(email);

});
test("Intern is a object",()=>{
    const testObj = new Intern("Aditya",12,"Aditya@fakeemail.com");
    expect(typeof(testObj)).toBe("object");

});
test("Intern getRole() return Intern ",()=>{
    const testObj = new Intern("Aditya",12,"Aditya@fakeemail.com");
    expect(testObj.getRole()).toBe("Intern");

});