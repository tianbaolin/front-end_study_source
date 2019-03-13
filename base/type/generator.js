// let peo = {name:'tianbaolin',age:18,sex:'male'}
// peo.constructor.prototype[Symbol.iterator] = getName
// function* getName(params) {
//   for(let key in this){
//     yield [key,this[key]]
//   }
// }

// let a = peo[Symbol.iterator]()
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// for(let [key,value] of peo){
//   console.log(key,value)
// }
// function* name(){
//   console.log('helo')
//   yield 1
//   console.log('helo2')
//   yield 2
// }
// let a = name()
// a.next()
// a.next()
// console.log([...peo])
function* name(params) {
  let c = 0
  c = yield c
  console.log(c)
  // c = yield c
  // console.log(a)
  // a = yield a
  // console.log(a)

  //  for(let i = 1;i>=1;i++){
  //    console.log(a)
  //   //  a = yield a
  //    console.log(yield a)
  //  }
}
let b = name()
console.log(b.next('1'))
console.log(b.next('2'))
// console.log(a.next('c'))
// console.log(a.next('d'))
