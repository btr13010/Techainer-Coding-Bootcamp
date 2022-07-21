const fs = require("fs");
const data = fs.readFileSync('./homework_2/students.json');
const students = JSON.parse(data);
students.forEach((student) => {
  console.log(typeof(student));
})