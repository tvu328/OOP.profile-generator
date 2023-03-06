// const Engineer = require("../lib/Engineer");
// const Manager = require("../lib/Manager");
// const Intern = require("../lib/Intern");
// const generateHtml = require("./generateHtml");
const inquirer = require("inquirer");
const fs = require("fs");
const { create } = require("domain");

const team = [];

function menu(){
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

function createEngineer(){
    // ask user about engineer(info), push engineer object to team array
}

function createIntern(){
    // ask user about intern info, push intern object to team array
}

function createManager(){
    // ask user about manager info, push manager object to team array 
}

function done(){
    // takes team array to generate HTML 
}

menu()