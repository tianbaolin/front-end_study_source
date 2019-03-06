// console.log(Math.PI)
// console.log(typeof Math)
// console.log(Number)
// console.log(typeof(Infinity))
let arr = {}
Object.defineProperty(arr,'name',{
  value:'tianbaolin'
})
// console.log(1,arr);
let s = Symbol('hello')
arr[s] = s
console.log('%c'+arr,'color:red;font-size:12px')

// 数组去重
// let a =[1,2,3,2,3,1,5,3,null,null]
// let b = a.filter((value,index,array)=>{
//   let res = true
//   if(a.indexOf(value,index+1) !== -1){
//     res = false
//   }
//   return res
// })
// console.log(b)

// let a = {
//   toString:()=>"abs",
//   repeat:String.prototype.repeat
// }
// let b =a.repeat(2)
// console.log(b)
// let a = "hellohello"
// function toUpper (match){
// console.log(match)
// return match.toUpperCase()
// }
// let b = a.replace(/hello/gs,toUpper)
// console.log(b)