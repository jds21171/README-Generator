var fs = require('fs');
var cli = require('./CLI');
var inquirer = require('inquirer');


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
    .then(results => {
        // fs.writeFile("README.md", function(err) {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     } else {

        //         console.log("Success!");
        //     }
        // });
        console.log("Success!")
    })
    .catch (error => {
        if (error) {
            console.log(error);
        }
    });