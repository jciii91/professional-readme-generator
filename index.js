// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project name.');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter a username.');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter a contact email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
            return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "selections",
        message: "Please select which fields you will provide information for. Anything not selected will be left blank:",
        default: [],
        choices: ["Description","Installation","Usage","License","Contributing","Tests","Questions"]
    }
];

const checkboxQuestions = [
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions for your project.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter license information for your project.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions for your project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter instructions for submitting questions.',
    }
]

const promptUser = () => {
    return inquirer.prompt(questions)
        .then(answers => {
            userSelections = answers.selections;
            userSelections.forEach(element => {
                console.log(element);
            })
        });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
