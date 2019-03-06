// let a = Symbol('a')
// let b = a.toString()
// b = a.valueOf()
// b = Object.getOwnPropertyNames(a)
// console.log(b)
// class MyClass {
//   static [Symbol.hasInstance](foo) {
//     console.log('12345')
//     return false
//   }
// }
// let c = new MyClass()
// console.log(MyClass[Symbol.hasInstance].toString())
// let c ={
//   [Symbol.hasInstance]:function(){
//     return false
//   }
// }
// console.log(c instanceof MyClass)
// let obj = {

// }
// obj[Symbol.iterator]=   function * (){
// yield 1;
// yield 2;
// yield 3;
// yield 3;
// }
class Obj{
  *[Symbol.iterator](params) {
    console.log(this)
    for(let item of [1,2,3,4]){
      yield item
    }
  }
}
let obj = new Obj()
for(let item of obj){
  console.log(item)
}