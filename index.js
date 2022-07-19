const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const internArrays = [];
const engineerArrays = [];
const employeeArrays = [];

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
])
.then(({managerName,managerId,managerEmail,managerOfficeNumber}) =>{
    const managerN = managerName;
    const managerI = managerId;
    const managerE = managerEmail;
    const managerO = managerOfficeNumber;
    
    managerChoice();
    
})

function managerChoice(){
    inquirer.prompt([{
        type: "list",
        name: "choices",
        message: "Which type of team member would you like to add?",
        choices: [ 'Engineer','Intern','Employee','No More Emplyees']
    }])
    .then(({choices}) =>{

        if(choices === "Engineer"){
            engineerGetPrompt();
            
        }else if(choices === "Intern"){
            internGetPrompt();
           
        }else if(choices === "Employee"){
            employeeGetPrompt();
            
        }else{
            return
        }
    })
}

function internGetPrompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "internId",
            message: "What is the team intern id?",
                
        },
        {
            type: "input",
            name: "internName",
            message: "What is the team intern name?",
                
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
    .then(({ internId,internName, internEmail,internSchool}) =>{
        
        const newIntern = new Intern()
        newIntern.getRole(internId, internName, internEmail, internSchool);
        internArrays.push(newIntern);
        console.log(internArrays);
        managerChoice();
    })
}

function engineerGetPrompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerId",
            message: "What is the team engineer id?",
                
        },
        {
            type: "input",
            name: "engineerName",
            message: "What is the team engineer name?",
                
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the team engineer email?",
            
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is the team engineer github username?",
            
        }, 
    ])
    .then(({engineerId,engineerName,engineerEmail,engineerGithub})=>{
        const newEngineer = new Engineer();
        newEngineer.getRole(engineerId,engineerName,engineerEmail,engineerGithub);
        engineerArrays.push(newEngineer);
        console.log(engineerArrays);
        managerChoice();
    })
}

function employeeGetPrompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "employeeId",
            message: "What is the team employee id?",
                
        },
        {
            type: "input",
            name: "employeeName",
            message: "What is the team employee name?",
                
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is the team employee email?",
            
        },

    ])
    .then(({employeeId, employeeName, employeeEmail})=>{
        const newEmployee = new Employee();
        newEmployee.getRole(employeeId, employeeName, employeeEmail);
        employeeArrays.push(newEmployee);
        console.log(employeeArrays);
        managerChoice();
    })
}
// Need to start on this function by tomorrow :O
function createFile(){

}