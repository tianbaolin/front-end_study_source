function People(){
  console.log(this)
  this.name = 'tianbaolin'
  this.constructor.prototype.name = 'tbl'
}
let man = new People()
// console.log(typeof x)
//  var x = 100
// console.log(typeof x)
// console.log(typeof y)
// let y = 100
// console.log(typeof y)