function People(name, age) {
  this.name = name;
  this.age = age;

  if (typeof this.say !== 'function') {
    this.say = function say() {
      console.log('object :', 'hello');
    };
  }
}
const people = new People('tian baolin', 27);
console.log('people', people);
