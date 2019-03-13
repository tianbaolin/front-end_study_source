// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9,5,6,4,5,6,4]
// a.forEach((item, index, arr) => {
//   console.log(this, item, index, arr)
// })
// a.reduce((acc,curr,index)=>{
//   console.log(acc,curr,index)
//   return acc + curr
// })
// a = [[1,2],[3,4]]
// let res = a.reduce((acc,curr,index)=>{
//   // return acc.concat(curr)
//   return [...acc,...curr]
// })
// res = a.reduce((acc,curr,index)=>{
//   if(curr === 5){
//     return acc+1
//   }else{
//     return acc
//   }
// },0)

// res = a.reduce((acc,curr,index)=>{
//   // console.log(acc,curr)
//   if(curr in acc){
//      acc[curr]++
//   }else{
//      acc[curr] = 1
//   }
//   return acc
// },{})

// res = a.reduce((arr,item,index)=>{
//   if(item in arr){
//   }else{
//     arr.push(item)
//   }
//   return arr
// },[])
// console.log(res)

// let reg = /tianbaolin/g
// let str = '1tianbaolinbaolintianbaolinbaolibtianbaolin'
// let count = 0
// let item = null
// // while(item = str.search(reg)){
// //   console.log(item.index,reg.lastIndex)
// //   count++
// // }
// // reg.exec(str)
// console.log(count)
'use strict'
function a(){
  console.log(this)
}
a()
debugger