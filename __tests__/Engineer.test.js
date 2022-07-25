const Engineer = require("../lib/Engineer");

test("Engineer can set name",()=>{
    const name = "Aditya";
    const testObj = new Engineer(name);
    expect(testObj.name).toBe(name);

});
test("Engineer can set id",()=>{
    const id = 3;
    const testObj = new Engineer("Aditya",id);
    expect(testObj.id).toBe(id);

});

test("Engineer can set email",()=>{
    const email = "Aditya@fakeemail.com";
    const testObj = new Engineer("Aditya",12,email);
    expect(testObj.email).toBe(email);

});
test("Engineer is a object",()=>{
    const testObj = new Engineer("Aditya",12,"Aditya@fakeemail.com");
    expect(typeof(testObj)).toBe("object");

});
test("Engineer getRole() return Engineer ",()=>{
    const testObj = new Engineer("Aditya",12,"Aditya@fakeemail.com");
    expect(testObj.getRole()).toBe("Engineer");

});