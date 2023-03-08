// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// questions section for user input:
inquirer
    .prompt([

        {
            type: "input",
            message: 'What is the title of the Project?',
            name: 'title',
        },

        {
            type: "input",
            message: 'Enter a description for the project',
            name: 'description',
        },

        {
            type: "input",
            message: 'What installation instructions are needed for project?',
            name: 'installation',
        },

        {
            type: "input",
            message: 'What is the app used for?',
            name: 'usage',
        },

        {
            type: "input",
            message: 'What are the tests required?',
            name: 'test',
        },

        {
            type: "input",
            message: 'Contributor(s) GitHub accounts associated with this project?',
            name: 'contributors',
        },

        {
            type: "list",
            message: 'What license will be used?',
            name: 'license',
            choices:['']
        },


        {
            type: "input",
            message: 'What is your GitHub username?',
            name: 'username',
        },

        {
            type: "input",
            message: 'What is your email?',
            name: 'email',
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init(generateMarkdown);
