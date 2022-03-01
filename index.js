// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'proj',
        message: 'What is the name of your project? (Required)',
        validate: projInput => {
            if (projInput) {
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
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['IBM Public License Version 1.0','ISC License (ISC)','The MIT License','Mozilla Public License','Other']
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
            let subQuestions = [];
            userSelections = answers.selections;
            userSelections.forEach(element => {
                switch (element) {
                    case "Description":
                    subQuestions.push(checkboxQuestions[0]);
                    break;
                    case "Installation":
                    subQuestions.push(checkboxQuestions[1]);
                    break;
                    case "Usage":
                    subQuestions.push(checkboxQuestions[2]);
                    break;
                    case "License":
                    subQuestions.push(checkboxQuestions[3]);
                    break;
                    case "Contributing":
                    subQuestions.push(checkboxQuestions[4]);
                    break;
                    case "Tests":
                    subQuestions.push(checkboxQuestions[5]);
                    break;
                    case "Questions":
                    subQuestions.push(checkboxQuestions[6]);
                    break;
                }
            })
            inquirer.prompt(subQuestions)
                .then(data => {
                    user = {
                        proj: answers.proj,
                        github: answers.github,
                        email: answers.email
                    }
                    return generateMarkdown(user,data);
                })
                .then(readme => {
                    writeToFile("./dist/README.md",readme);
                })
        });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
