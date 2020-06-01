import { decorate, observable, action, computed, reaction } from "mobx";
import STUDENTS from "../data/students"

class StudentStore {
  constructor() {
    this.students = STUDENTS;
    this.student;
  }

  addStudent = student => {
    this.students.push(student);
  };

  deleteStudent = (idx) => {
    this.students.splice(idx, 1);
  };

  setStudent = (idx) => {
      this.student = this.students[idx]
  }

}

decorate(StudentStore, {
  students: observable,
  student: observable,
  addStudent: action,
  deleteStudent: action,
  setStudent: action,
});

const studentStore = new StudentStore();

export default studentStore;