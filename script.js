var cli = require('./CLI');
const generateReadme = cli.generateReadme;

var inquirer = require('inquirer');
var fs = require('fs');

var axios = require('axios').default;

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      const githubAvitar = res.data.avatar_url;
      console.log(`Your GitHub Avitar: ${githubAvitar}`);
      const githubEmail = res.data.email;
      console.log(`Your GitHub email: ${githubEmail}`);

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
- ${answer.tableOfContents}

## Installation
- ${answer.installation}

## Usage
- ${answer.usage}

## Liscense
- ${answer.liscense}

## Contributers
${answer.contributers}

## Tests
- ${answer.tests}

## Questions
${answer.questions}
- ${githubAvitar}
- ${githubEmail}`;
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
      });
    });

