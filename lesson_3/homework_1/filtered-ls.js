const path = process.argv[2];
const ext = process.argv[3];
const fs = require('fs');


function readFolder(callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log(err)
      return
    };
    listExt=callback(files);
    for (let i=0; i<listExt.length; i++) {
      if (listExt[i] == ext) {
        console.log(files[i]);
      }
    };
  })
}

function getExtension(files) {
  let listExt = [];
  let pos = [];
  for (let i=0; i<files.length; i++) {
    for (let j=0; j<files[i].length; j++) {
      if (files[i][j] == '.') {
        pos.push(j);
        break;
      }
    }
  }
  for (let i=0; i<files.length; i++) {
    listExt.push(files[i].substring(pos[i]+1));
  }
  return listExt;
}

readFolder(getExtension);

// const fs = require('fs');
// const path = require('path');
    
// const folder = process.argv[2];
// const ext = '.' + process.argv[3];
    
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })