var cli = require('./CLI');
const generateReadme = cli.generateReadme;

var inquirer = require('inquirer');
var fs = require('fs');

// var axios = require('axios');

inquirer
    .prompt([
        {
            type: "input",
            message: "Input title here.",
            name: "title"
        },
        {
            type: "input",
            message: "Input description here.",
            name: "description"
        },
        {
            type: "input",
            message: "Input table of contents here.",
            name: "tableOfContents"
        },
        {
            type: "input",
            message: "Input installation here.",
            name: "installation"
        },
        {
            type: "input",
            message: "Input usage here.",
            name: "usage"
        },
        {
            type: "input",
            message: "Input liscense here.",
            name: "liscense"
        },
        {
            type: "input",
            message: "Input contributers here.",
            name: "contributers"
        },
        {
            type: "input",
            message: "Input tests here.",
            name: "tests"
        },
        {
            type: "input",
            message: "Input questions here.",
            name: "questions"
        }
    ])
    .then(answer => {
        const readmeContent = 
`# ${answer.title}

${answer.description}

${answer.tableOfContents}

## Installation
- ${answer.installation}

${answer.usage}

${answer.liscense}

${answer.contributers}

${answer.tests}

${answer.questions}`;
        generateReadme();
        fs.appendFile("README.md", readmeContent, function(err) {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("Appended!");
            }
        })
    }).catch(err => {
        if (err) {
            console.log(err);
        }
    });