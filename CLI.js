var fs = require('fs');

module.exports = {
    generateReadme: () => {
        fs.writeFile("README.md",'', function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Success!");
        }
        });
    }
};