const url = process.argv[2];
const http = require('http');
const bl = require('bl');

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      console.error(err);
    }
    const out = data.toString();
    console.log(out.length);
    console.log(out);
  }))
})
