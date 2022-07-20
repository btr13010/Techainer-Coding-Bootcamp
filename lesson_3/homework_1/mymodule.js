const fs = require('fs');
const path = require('path');

module.exports = function (folder, ext, callback) {
  let filteredFiles= [];
  fs.readdir(folder, function (err, files) {
    if (err) return callback(err);
    ext = '.' + ext;
    files.forEach(function (file) {
      if (path.extname(file) === ext) {
        filteredFiles.push(file);
      }
    })
    callback(null, filteredFiles);
  })
}