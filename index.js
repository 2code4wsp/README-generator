// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input

const questions = [
    {
        name: 'title',
        message: "What is the title of your project?",
        type: 'input',
    },

    {
        name: 'description',
        message: 'Write a description of your project',
        type: 'input',
        
    },

    {
        name: 'contents',
        message: 'Table of Contents',
        type: 'input',
    },

    {
        name: 'installation',
        message: 'Does this application need any installations?',
        type: 'input',
    },

    {
        name: 'usage',
        message: 'How do you use this application?',
        type: 'input',
    },

    {
        name: 'credit',
        message: 'Were there any collaborators or materials referenced in this project?',
        type: 'input',
    },

    {
        name: 'license',
        message: 'What licenses were applied to this project?',
        type: 'list',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'BSD 3', 'None'],
    },

    {
        name: 'contributions',
        message: 'How to contribute to this project',
        type: 'input',
    },

    {
        name: 'tests',
        message: 'How to test this application',
        type: 'input',
    },

    {
        name: 'username',
        message: 'What is your GitHub username?',
        type: 'input',
    },
    {
        name: 'github',
        message: 'What is your GitHub URL?',
        type: 'input',
    },
    {
        name: 'email',
        message: 'What is your email address?',
        type: 'input',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(__dirname,"/example/",fileName), data, (err) =>
    err? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
  .then((data) => {
    writeToFile('README.md', generateMarkdown (data));  })
}

// Function call to initialize app
init();
