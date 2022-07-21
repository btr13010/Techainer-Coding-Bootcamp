const urls = process.argv.slice(2,5);
const http = require('http');
const bl = require('bl');
let result = [];
let count = 0;

urls.forEach((url) => {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        console.error(err);
      }

      result.push(data.toString());
      count++; 

      if (count === 3) {
        result.forEach((item) => {
          console.log(item);
        })
      }
    }))
  })
})
