const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager name?",
        
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager id?",
        
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager email?",
        
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager office number?",
        
    },
    {
        type: "list",
        name: "choices",
        message: "Which type of team member would you like to add?",
        choices: [ 'Engineer','Intern','Employee']
    }



])
.then(({choices}) =>{
     if(choices === "Intern")
    {
        const newIntern = new Intern();
        newIntern.getRole();
        console.log("This works");
    }
    console.log(choices)
})

function internGetPrompt(){

}
