// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Description of project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Installation instructions',
            name: 'Installation'
        },
        {
            type: 'input',
            message: 'Usage Information',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Contribution Guidelines',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Test Instructions ',
            name: 'test'
        },
        {
            type: 'input',
            message: 'Choose a license',
            name: 'License'
        },
        {
            type: 'input',
            message: 'Enter your GitHub username',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Enter your email address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter image URL',
            name: 'image'
        },
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
