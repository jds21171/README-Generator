var fs = require('fs');

fs.writeFile("README.md", process.argv[2], function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Success!");
}) 