Car = {
  [Symbol.hasInstance]: function(car) {
    console.log("goin :", car);
    return car;
  }
};
car = {};
// console.log("car", car instanceof Car);
// console.log('ok', [][Symbol.isConcatSpreadable])
let a = [1, 2, 3];
// console.log("a", a[Symbol.isConcatSpreadable]);
Object.defineProperty(a, Symbol.isConcatSpreadable, {
  value: false
});
// console.log("a", [4, 5, 6].concat(a));
class Stu extends Array {
  // static get [Symbol.species](){
  //   console.log('here :', 'here');
  // }
}
let stu1 = new Stu("tian baolin");
let stu2 = stu1.map(x => x);
// console.log('instance :', stu1 instanceof Stu);
// console.log('instance2', stu2.constructor === Stu)
a = {
  [Symbol.toPrimitive]() {
    return "ok";
  }
};
// console.log('a :', String(a));
// console.log('object :', a.valueOf());
// console.log('[object] :', {}.toString());
a = new Set([1, 2, 3, 4, 5, 6]);
b = new Set([2, 3, 4, 5, 7]);
// 并集
// console.log("res :", [...a, ...b]);
//交集
function intersection(a, b) {
  return [...a].filter(item => b.has(item));
}
// console.log('intersection :', intersection(a,b));
// new Set({length:1,0:1})

a = { name: "tbl" };
b = Object.entries(a);
// console.log(new Map(b))
// a = {name:'tbl'}
// b = new WeakMap()
// c = {a:12}
// b.set(a,c)
// console.log('b :', b);
a = { name: "tbl", count: 0 };
b = new Proxy(a, {
  get: function(target, key, recevier) {
    console.log("target :", target);
    console.log("key :", key);
    // console.log('recevier :', recevier);
    if (key === "name") {
      return "get";
    } else {
      return this[key];
    }
  },
  set: function(target, key, value, recevier) {
    console.log("target1 :", target);
    console.log("key1 :", key);
    console.log("value1 :", value);
    if (key === "name") {
      this.count = this.count + 1;
    } else {
      this[key] = value;
    }
    // console.log("recevier1 :", recevier);
  }
});
// console.log(b.name);
b.name = "tt";
b.name = "tt";
b.name = "tt";
b.name = "tt";
console.log("count", b.count);
