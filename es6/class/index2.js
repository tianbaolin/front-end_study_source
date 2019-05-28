class People extends Object {
  constructor(props) {
    super(props);
    // this.length = 6;
  }
  getLength() {}
  get length() {
    return 10;
  }
  set length(length) {
    return length;
  }
}
let peo = new People();
console.log("peo", peo);
console.log("peo", peo.__proto__.hasOwnProperty("length"));
let superValueOf = null;
class Stu extends People {
  constructor(props) {
    super(props);
    superValueOf = super.valueOf();
    console.log("object", superValueOf === this);
  }
}
let stu = new Stu();
console.log("stu", stu === superValueOf);
