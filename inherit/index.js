// function People(name, age) {
//   this.mane = name;
//   this.age = age;
//   console.log('new', new.target)
// }
// People.prototype.say = function sya(word) {
//   console.log("word :", word);
// };
// let people = new People()
// console.log('people', people)
// function Man(...props) {
//   People.call(this, ...props);
//   this.sex = "male";
// }
// Man.prototype.say2 = function(params) {
//   console.log("params", params);
// };
// Object.setPrototypeOf(Man.prototype, People.prototype);
// function People() {
//   this.name = "tbl";
//   this.age = 26;
// }
// let people = new People('tbl',26);
// console.log("people", people);

// function Man() {
//   this.name = "tian baolin";
//   this.age = 26;
// }
// // // Man.prototype = new People;
// Man.prototype = new People();

// let man = new Man();
// console.log("man", man);
// console.log("man", man instanceof Man);
function People(params) {
  this.name = "tbl";
  this.age = 26;
}
let people = new People();
console.log("People.constructor", People.constructor === Function);
console.log("People.prototype", People.prototype.constructor === People);
console.log(
  "People.prototype.__proto",
  People.prototype.__proto__ === Object.prototype
);
console.log("people.constructor", people.constructor === People);
console.log('people.__proto__', people.__proto__ === People.prototype)
