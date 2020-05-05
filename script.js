var fs = require('fs');
var cli = require('./CLI');
var inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: "",
            message: "",
            name: ""
        },
        {
            type: "",
            message: "",
            name: ""
        },
        {
            type: "",
            message: "",
            name: ""
        },
        {
            type: "",
            message: "",
            name: ""
        }
    ]);






fs.writeFile("README.md", process.argv[2], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Success!");
    }
});