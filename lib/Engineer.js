const Employee = require ("./Employee");

class Engineer extends Employee{

    getGithub(github){
        return this.github;
    }
    getRole(id, name, email, github){
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
        const newEngineer ={
            internId: this.id,
            internName: this.name,
            interEmail: this.email,
            interGithub: this.github,
        }
        return newEngineer;
    }
   
        
}
module.exports = Engineer;