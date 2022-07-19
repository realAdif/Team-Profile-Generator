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
    getRole(){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the team intern name?",
                
            },
            {
                type: "input",
                name: "internId",
                message: "What is the team intern id?",
                
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the team intern email?",
                
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the team intern School name?",
                
            },
        ])
        .then(({internName, internId, internEmail,internSchool}) =>{
            return console.log(`Name: ${internName} Id: ${internId}`);
        })
    }
   
        
}
module.exports = Intern;