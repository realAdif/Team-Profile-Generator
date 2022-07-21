const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/template')

const managerArrays = [];
const internArrays = [];
const engineerArrays = [];

const team = []; //main array for all team memebrs


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
    console.log("line 42",typeof(newManager),newManager, newManager.name);
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


// Need to start on this function by tomorrow :O
function createFile(){
    let data = template(managerArrays);
    console.log(data);
    fileName =`<p>This works<p>`
    fs.writeFile("dist/index.html", fileName, err =>{
        if(err){
            console.log(err);
        }
    })
    console.log("\x1b[33m%s\x1b[0m", "Check The Output Folder To Get Your HTML File");
}