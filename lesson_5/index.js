const fs = require("fs");

class DataLoader {
  data;

  readFile(path) {
    const read = fs.readFileSync(path);
    this.data = JSON.parse(read);
    return this.data;
  }

  printData() {
    console.log(this.data);
  }
}

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
    const marks = [this.diemToan, this.diemLy, this.diemHoa, this.diemAnh];
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

class Calculation {
  constructor(studentList, courseList) {
    this.studentList = studentList;
    this.courseList = courseList;
  }

  gpaPrint() {
    this.studentList.forEach((student) => {
      console.log(`Diem trung binh mon cua ${student.tenSV}: ${student.gpa}`);
    })
  }

  courseStudent(course) {
    let students = [];
    this.studentList.forEach((student) => {
      if (student.lop === course) {
        students.push(student);
      }
    })
    return students;
  }

  highestGPA(course) {
    if (this.courseList.includes(course)) {
      const students = this.courseStudent(course);
      let highest = 0.00;
      let person = '';
      students.forEach((student) => {
        if (student.gpa >= highest) {
          highest = student.gpa;
          person = student.tenSV;
        }
      })
      console.log(`Sinh vien co diem trung binh cao nhat lop ${course}: ${person}`)
    } else {
      console.error("Couldn't find this course.");
    }
  }

  lowestGPA(course) {
    if (this.courseList.includes(course)) {
      const students = this.courseStudent(course);
      let lowest = 10.00;
      let person = '';
      students.forEach((student) => {
        if (student.gpa <= lowest) {
          lowest = student.gpa;
          person = student.tenSV;
        }
      })
      console.log(`Sinh vien co diem trung binh thap nhat lop ${course}: ${person}`)
    } else {
      console.error("Couldn't find this course.");
    }
  }

  allClassesAnalysis() {
    this.courseList.forEach((course) => {
      this.highestGPA(course);
      this.lowestGPA(course);
    })
  }

  classPassingCheck() {
    let passed = [];
    this.studentList.forEach((student) => {
      if (student.passingCheck() === true) {
        passed.push(student.tenSV);
      }
    })
    console.log(`Cac sinh vien qua mon: ${passed}`);
  }

  classLetterGrade() {
    this.studentList.forEach((student) => {
      console.log(`Diem chu cua sinh vien ${student.tenSV}: ${student.letterGrade()}`)
    })
  }
}

const dataReader = new DataLoader();
const data = dataReader.readFile('./students.json');
let courseList = []
let studentList = [];
data.forEach((item) => {
  if (!(courseList.includes(item.lop))) {
    courseList.push(item.lop);
  }
  studentList.push( new Student(item.maSV, item.tenSV, item.tuoi, item.gioiTinh, item.ngaySinh, item.diemToan, item.diemLy, item.diemHoa, item.diemAnh, item.lop) );
})
const analysis = new Calculation(studentList, courseList);
analysis.gpaPrint();
analysis.classLetterGrade();
analysis.classPassingCheck();
analysis.allClassesAnalysis();