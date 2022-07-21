const url = process.argv[2];
const http = require('http');

function receive() {
  http.get(url, (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => {
      console.log(`${data}`);
    })
    response.on('error', console.error)
  }).on('error', console.error);
}

receive();