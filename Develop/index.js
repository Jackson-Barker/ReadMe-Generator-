// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = 
   [
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Description of project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Installation instructions',
            name: 'installation'
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
            type: 'list',
            message: 'Choose a license',
            name: 'license', 
            choices: ['Apache', 'MIT', 'IBM', "Mozilla", "No license"]
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
    ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
         console.log("ReadMe Created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();


