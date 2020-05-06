var cli = require('./CLI');
const generateReadme = cli.generateReadme;

var inquirer = require('inquirer');
var fs = require('fs');

var axios = require('axios').default;

// Still working on getting the GitHub API working correctly below.
// inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "What is your GitHub username?",
//             name: "username"
//         },
//         {
//             type: "input",
//             message: "What is your GitHub email?",
//             name: "description"
//         }





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

## Description
${answer.description}

##Table of Contents
${answer.tableOfContents}

## Installation
- ${answer.installation}

## Usage
${answer.usage}

## Liscense
${answer.liscense}

## Contributers
${answer.contributers}

## Tests
${answer.tests}

## Questions
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