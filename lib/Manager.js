const Employee = require ("./Employee");

class Manager extends Employee{
    
    constructor(name,id, email,officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
        // const newManager ={
        //     id: this.id,
        //     name: this.name,
        //     email: this.email,
        //     officeNumber: this.officeNumber,
        // }
        // return newManager;
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;