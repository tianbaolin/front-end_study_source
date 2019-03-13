// let a = {}
// b = {name:'tianbaolin'}
// a[b] = 'tbl'
// console.log(a)
// debugger
let people = {name:'tianbaolin',age:18}
people.constructor.prototype[Symbol.iterator] = function(){
  let keys = Object.keys(this)
  let length = keys.length;
  let i = 0
  let res = null
  function next(){
    if(i<length){
      res = {
        value:[this[keys[i]],keys[i]],
        done:false
      }
      ++i
    }else{
      res = {
        value:undefined,
        done:true
      }
    }
    return res
  }
  return {
    next:next.bind(this)
  }
}
// let it = people[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
for(let [item,key] of people){
  console.log(item,key)
}
