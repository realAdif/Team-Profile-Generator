class Employee{
    constructor(id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getRole(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
        const newEmployee = {
            employeeId: this.id,
            employeeName: this.name,
            employeeEmail: this.email
        }
        return newEmployee;
   
    }
   
        
}

module.exports = Employee;