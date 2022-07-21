const fs = require("fs");
const file = fs.readFileSync('./homework_2/students.json');
const data = JSON.parse(file);

class Student {
  constructor(maSV, tenSV, tuoi, gioiTinh, ngaySinh, diemToan, diemLy, diemHoa, diemAnh, lop) {
    this.maSV = maSV;
    this.tenSV = tenSV;
    this.tuoi = tuoi;
    this.gioiTinh = gioiTinh;
    this.ngaySinh = ngaySinh;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemAnh = diemAnh;
    this.lop = lop;
    this.gpa = ((this.diemToan + this.diemLy + this.diemHoa + this.diemAnh) / 4).toFixed(2);
  }

  passingCheck() {
    const marks = new Array(this.diemToan, this.diemLy, this.diemHoa, this.diemAnh);
    let passed = true;
    marks.forEach((mark) => {
      if (mark < 4.00) {
        passed = false;
      }
    })
    return passed;
  }

  letterGrade() {
    if (this.gpa >= 8.50) {
      return 'A';
    } else if(this.gpa >= 7.00) {
      return 'B';
    } else if(this.gpa >= 5.50) {
      return 'C';
    } else if(this.gpa >= 5.00) {
      return 'D+';
    } else if(this.gpa >= 4.00) {
      return 'D';
    } else {
      return 'F';
    }
  }
}

let courseList = []
let studentList = [];
data.forEach((item) => {
  if (!(courseList.includes(item.lop))) {
    courseList.push(item.lop);
  }
  studentList.push( new Student(item.maSV, item.tenSV, item.tuoi, item.gioiTinh, item.ngaySinh, item.diemToan, item.diemLy, item.diemHoa, item.diemAnh, item.lop) );
})

function gpa() {

}

function highestGPA() {

}

function lowestGPA() {

}