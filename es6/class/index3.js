function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Object.assign(People.prototype, {
  say() {
    console.log("people", people);
  },
  walk() {
    console.log("people worlk :", "people wolk");
  }
});
let people = new People("tian baolin", 18, "male");
console.log("people :", people);
// console.log('object', people.__proto__.__proto__ === Object.prototype)
function Student(...params) {
  People.call(this, ...params);
}
Student.prototype = Object.create(People.prototype, {
  constructor: {
    value: Student
  }
});
// Student.prototype.constructor = Student;
let student = new Student("tbl", 20, "female");

console.log("student", student);
console.log("{}", {});
// console.log('studeng.__', student.__proto__.__proto__ === Object.prototype)
