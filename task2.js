const student = {
  name: "Aarav",
  age: 20,
  course: "Computer Science",
  displayInfo() {
    console.log(`Student: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
};

student.displayInfo(); 
student.age = 21;
console.log("Updated Age:", student.age);


student.grade = "A";
console.log("With Grade:", student);