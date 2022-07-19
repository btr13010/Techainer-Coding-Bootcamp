const path = process.argv[2];
const fs = require('fs');

var arr = undefined;
function ReadFile(callback) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        arr = data.split('\n');
        callback();
    })
}

ReadFile(() => console.log(arr.length-1));