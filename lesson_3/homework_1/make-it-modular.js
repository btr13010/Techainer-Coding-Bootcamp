const mymodule = require('./mymodule.js');
    
const folder = process.argv[2];
const ext = process.argv[3];

function dest(err, filteredFiles=[]) {
  if (err) {
    console.error(err);
  }
  filteredFiles.forEach((file) => console.log(file));
}

mymodule(folder, ext, dest);