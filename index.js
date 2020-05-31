const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    message: "Enter the project title",
    name: "title",
  },
  {
    type: "input",
    message: "Project description",
    name: "description",
  },
  {
    type: "input",
    message: "How to install dependencies?",
    name: "installation",
  },

  {
    type: "input",
    message: "Usage",
    name: "usage",
  },

  {
    type: "list",
    messasge: "Please select the project license:",
    name: "license",
    choices: ["MIT", "Apache", "None"],
  },
  {
    type: "input",
    message: "Project contribution",
    name: "contribute",
  },

  {
    type: "input",
    message: "Command Tests",
    name: "test",
  },

  {
    type: "input",
    message: "What's your email?",
    name: "email",
  },

  {
    type: "input",
    message: "Add a profile picture",
    name: "profilePicture",
  },
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data));
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("./Readme.md", answers);
  });
}

init();
