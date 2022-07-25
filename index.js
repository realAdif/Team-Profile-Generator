const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/template')

const managerArrays = [];
const internArrays = [];
const engineerArrays = [];

inquirer.prompt([
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager id?",
        
    },
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager name?",
        
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
.then(({managerId,managerName,managerEmail,managerOfficeNumber}) =>{
 
    const newManager = new Manager(managerName,managerId,managerEmail,managerOfficeNumber);
    console.log(newManager);
    managerArrays.push(newManager);
    managerChoice();
    
})

function managerChoice(){
    inquirer.prompt([{
        type: "list",
        name: "choices",
        message: "Which type of team member would you like to add?",
        choices: [ 'Engineer','Intern','No More Emplyees']
    }])
    .then(({choices}) =>{

        if(choices === "Engineer"){
            engineerGetPrompt();
            
        }else if(choices === "Intern"){
            internGetPrompt();
           
        }else{
            createFile();
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
        const newIntern = new Intern(internName,internId,internEmail,internSchool);
        internArrays.push(newIntern);
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
        const newEngineer = new Engineer(engineerName,engineerId,engineerEmail,engineerGithub);
        engineerArrays.push(newEngineer);
        managerChoice();
    })
}


function createFile(){
    let data = template(managerArrays,engineerArrays,internArrays);
    fs.writeFile("dist/index.html", data, err =>{
        if(err){
            console.log(err);
        }
    })
    console.log("\x1b[33m%s\x1b[0m", "Check The Output Folder To Get Your HTML File");
}