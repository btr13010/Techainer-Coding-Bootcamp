// const { sum } = require('./util.js');

// console.log(sum(5,9));

// const fs = require('fs');
// const data = fs.readFileSync('data.json', 'utf-8');
// const dataOj = JSON.parse(data);


// const http = require('http');
// http.createServer( (req,res) => {
//     res.writeHead(200, { 'Content-type': 'text/plain'});
//     res.end('Hello, hello');
// }).listen( 3000, () => {
//     console.log("Listen port 3000...");
// })

require('dotenv').config()
console.log(process.env.EXAMPLES);