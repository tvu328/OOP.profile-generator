const generateHtml = require("./src/generateHTML");
const inquirer = require("inquirer");
const fs = require("fs");
const { create } = require("domain");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

let teamArray = []

function menu() {
    // ask user what to do next
    inquirer.prompt([
        {
            name: "menu",
            type: "list",
            choices: ["Create an Engineer", "Create an Intern", "Create a Manager", "Done"]

        }
    ]).then(answers => {
        const response = answers.menu
        if (response === "Create an Engineer") {
            createEngineer()
        }
        else if (response === "Create an Intern") {
            createIntern()
        }
        else if (response === "Create a Manager") {
            createManager()
        }
        else {
            done()
        }

    })

}

// function createEngineer() {
//     // ask user about engineer(info), push engineer object to team array
//     inquirer.prompt([
//         {
//             message: "What is the name of the employee for this team?",
//             type: "input",
//             name: "name"

//         },
//         {
//             message: "What is the id of the employee for this team?",
//             type: "input",
//             name: "id"

//         },
//         {
//             message: "What is the email of the employee for this team?",
//             type: "input",
//             name: "email"

//         },
//     ]).then(employee => {
//         let newEmployee = new Employee(employee.name, employee.id, employee.email)
//         teamArray.push(newEmployee)
//     })
// }

function createEngineer() {
    // ask user about engineer(info), push engineer object to team array
    inquirer.prompt([
        {
            message: "What is the name of the engineer for this team?",
            type: "input",
            name: "name"

        },
        {
            message: "What is the id of the engineer for this team?",
            type: "input",
            name: "id"

        },
        {
            message: "What is the email of the engineer for this team?",
            type: "input",
            name: "email"

        },
        {
            message: "What is the GitHub of the engineer for this team?",
            type: "input",
            name: "github"

        },
    ]).then(engineer => {
        let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
        teamArray.push(newEngineer)
        menu()
    })
}

function createIntern() {
    // ask user about intern info, push intern object to team array
    inquirer.prompt([
        {
            message: "What is the name of the intern for this team?",
            type: "input",
            name: "name"

        },
        {
            message: "What is the id of the intern for this team?",
            type: "input",
            name: "id"

        },
        {
            message: "What is the email of the intern for this team?",
            type: "input",
            name: "email"

        },
        {
            message: "What is the school name of the intern for this team?",
            type: "input",
            name: "school"
        },
    ]).then(intern => {
        let newIntern = new Intern(intern.name, intern.id, intern.email, intern.school)
        teamArray.push(newIntern)
        menu()
    })
}

function createManager() {
    // ask user about manager info, push manager object to team array 
    inquirer.prompt([
        {
            message: "What is the name of the manager for this team?",
            type: "input",
            name: "name"
        },
        {
            message: "What is the id of the manager for this team?",
            type: "input",
            name: "id"
        },
        {
            message: "What is the email of the manager for this team?",
            type: "input",
            name: "email"
        },
        {
            message: "What is the office number of the manager for this team?",
            type: "input",
            name: "officeNumber"
        },
    ]).then(manager => {
        let newManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
        teamArray.push(newManager)
        menu()
    })
}

function done() {
    // takes team array to generate HTML 
    console.log(teamArray)
    fs.writeFile('./dist/team.html', generateHtml(teamArray), err => console.log(err))
}

menu()