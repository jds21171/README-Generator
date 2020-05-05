var fs = require('fs');
var cli = require('./CLI')



fs.writeFile("README.md", process.argv[2], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Success!");
    }
});