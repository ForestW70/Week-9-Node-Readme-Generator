// TODO: Include packages needed for this application
const inquire = require("inquirer");
const generator = require("./utils/generateMarkdown")
const fs = require("fs");


inquire
    .prompt([
        {
            type: 'input',
            message: "What is your gitHub username?",
            name: "gitHubName",
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: "email",
        },
        {
            type: 'input',
            message: "What is your project's name?",
            name: "projTitle",
        },
        {
            type: 'confirm',
            message: "Will this project be used for evil purposes?",
            name: "isEvil",
        },
        {
            type: 'input',
            message: "Please input a short description for your project.",
            name: "projDesc",
        },
        // table of contents
        {
            type: 'input',
            message: "Please list all of the installation steps required to run this project.",
            name: "installation",
        },
        {
            type: 'input',
            message: "what is the recomended usage for this project?",
            name: "usage",
        },
        {
            type: 'list',
            message: "What licence would you like to set?",
            name: "licence",
            choices: [
                'Creative Commons (CC)',
                'CC 4.0 ShareAlike',
                'CC 4.0 NonCommercial',
                'CC 4.0 NoDivatives',
                'Eclipse Public License',
                'Attribution License (BY)',
                'Open Database License (ODbL)',
                'Public Domain Dedication and License (PDDL)',
                'IBM',
                'MIT',
                'The Unlicense',
                'The Do What the Fuck You Want to Public License',
            ]
        },
        {
            type: 'confirm',
            message: "Would you like to use the default contribution guidelines?",
            name: "contributeIsDefault",
        },
    ]) 
    .then(response => {
        const fileName = `${response.projTitle.toLowerCase().split(' ').join('')}.json`;
        writeToFile(fileName, JSON.stringify(response))
    })









// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
