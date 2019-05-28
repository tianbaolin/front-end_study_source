console.log('1', 1)
// @decorator
class People {
  constructor(name, age) {
    console.log('2', 2)
    this.name = name;
    this.age = age;
    this.constructor.count++;
  }
  get a() {
    return 1;
  }
  set a(a) {
    console.log("a", a);
  }
  // static count = 0;
  say() {
    console.log("people", people);
  }
}

function decorator(target) {
  console.log('target', target)
}
// let people = new People("tian baolin", 18);
// // console.log("people", people.hasOwnProperty("a"));
// // console.log("People.count", People.count);
console.log("People", People);
