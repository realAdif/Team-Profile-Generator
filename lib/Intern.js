const inquirer = require("inquirer");

class Intern{
    constructor(id, name, email, school){
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
    }
    
    getSchool(){
        return this.school;
    }
    getRole(id, name, email, school){
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
        const newIntern = {
            internId: this.id,
            internName: this.name,
            interEmail: this.email,
            interSchool: this.school,
        }
        return newIntern;
    }
   
        
}
module.exports = Intern;