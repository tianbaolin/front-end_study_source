let stu = {
  name: "tian baolin",
  age: 18
};

let stuProxy = new Proxy(stu, {
  get: function(target, property, receiver) {
    console.log(target, property, receiver);
    handler(target, property, receiver);
    return Reflect.get(target, property, receiver);
  }
});
let handler = function(target, property, receiver) {
  console.log("调用", property);
};
// console.log("stuProxy.name :", stuProxy.name);
stu = {
  _name: "",
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  }
};
console.log("stu.name :", stu.name);
stu.name = 'tbl'
console.log('stu.name :', stu.name);