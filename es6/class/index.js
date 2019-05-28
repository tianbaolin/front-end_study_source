class People {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  // say = () => {
  //   console.log("this peopel", this);
  //   console.log("people say :", "hello all");
  // };
  static needParams = () => {
    console.log("this.length :", this.length);
    return ["name", "age", "sex"];
  };
  static a = 1;
}
// console.log("typeof People", typeof People);
// console.log("function", People.prototype.constructor === People);
// console.log("People", People.prototype);
class Man extends People {
  constructor(...props) {
    super(...props, "male");
  }
  say() {
    console.log("this man", this);
    console.log("man say", "hello my girl");
  }
  static needParams() {
    console.log("this.length :", this.length);
    return ["name", "age"];
  }
}

class WoMan extends People {
  constructor(...props) {
    super(...props, "women");
    // this.say = this.say.bind(this)
  }
  say() {
    console.log("this woman", this);
    console.log("woman say", "hello my boy");
  }
}
// let xiaomin = new Man("xiao min", 18);
// let xiaohua = new WoMan("xiao hua", 19);
// console.log("object :", Man.needParams());
// console.log('Man :', Man.__proto__.needParams());
// console.log("People :", Object.getOwnPropertyNames(Man));
// console.log("xiaomin", xiaomin);
// console.log("xiaohua", xiaohua);
// console.log(
//   "compare",
//   xiaohua.__proto__.__proto__ === People.prototype,
//   xiaomin.__proto__.__proto__ === People.prototype
// );
// xiaohua.say()
// let say = xiaohua.say;
// say();
class Stu extends People {
  constructor(...props) {
    super(...props);
    this.grade = 2;
    let _score = 0;
    console.log('new.target', new.target === Stu)
    Object.defineProperty(this, "score", {
      get: function() {
        return _score;
      },
      set: function(value) {
        _score = value;
      }
    });
  }
  // grade = 1;
  say() {
    console.log('new.target', new.target)
    console.log("student:", "hello teacher");
  }
}
let stu = new Stu("stu", 18, "male");
// console.log("stu :", stu);
stu.say();
stu.score = 96;
// console.log('stu :', stu);
// console.log('this.getScore() :', stu.score);

// a = () => {};
// b = a.__proto__;
// console.log("b :", b);
// c = Object.getOwnPropertyNames(b);
// console.log('c', c)
// Object.getOwnPropertyNames(b).map(item => {
//   try{
//     console.log("item", b[item]());
//   }catch(err){

//   }
// });

// function Fruit() {
//   let _count = 1;
//   this.name = "apple";
//   this.color = "red";
//   this.count = function() {
//     let a = 1
//     console.log('a :', a);
//     console.log('_count :', _count);
//     return a;
//   };
// }

// let apple = new Fruit();
// console.log("apple :", apple);
// console.log("apple.count() :", apple.count());
// console.log("apple.count() :", apple.count());
// console.log("apple.count() :", apple.count());
