function People(name, age) {
  this.name = name;
  this.age = age;
  if (typeof People.prototype.say !== 'function') {
    // console.log('object', 'once1');
    Object.assign(People.prototype, {
      say() {
        console.log('object', 'hello');
      },
    });
  }
}

const people = new People('tian baolin', 18);
// const people2 = new People('tian baolin', 18);

console.log('people', people);

function Man(name, age) {
  People.call(this, name, age);
  this.sex = 'male';

  if (typeof Man.prototype.say2 !== 'function') {
    // console.log('object :', 'once2');
    Object.assign(Man.prototype, {
      say2() {
        console.log('object', 'world');
      },
    });
  }

  if (!(Man.prototype instanceof People)) {
    // console.log('object', 'man once3');
    Object.setPrototypeOf(Man.prototype, People.prototype);
  }
}
const man = new Man('tbl', 24);
// const man1 = new Man('tbl', 24);
// const man2 = new Man('tbl', 24);


console.log('man', man);
