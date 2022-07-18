const path = process.argv[2];

const fs = require('fs');
let inp = fs.readFileSync(path);
let data = inp.toString(); 

const arr = data.split("\n");
console.log(arr.length-1);