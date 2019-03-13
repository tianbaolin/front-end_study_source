// var startTime = Date.now()
// console.log(startTime)
// 同步阻塞
// var endTime = Date.now()
// console.log(endTime - startTime)
// setTimeout(()=> {
//   console.log(Date.now() - startTime)
// }, 5000);
// while(Date.now()-startTime <=5000);
// setTimeout(() => {
//   console.log('hello')
// }, 0);
// function fun1(){
//   new Promise((res,rej)=>{
//     console.log('res')
//     console.log(this)
//     res('ok')
//   }).then(res=>{
//     console.log(this)
//     console.log(res)
//   })
// }
// fun1()
// function fun3(){
// var startTime = Date.now()
// while(Date.now()-startTime <=1000);
// console.log('3')
// }
// fun3()
// console.log('dcs')
// function fun(){
//   console.log('fun')
// }
// fun()
// 'use strict'
// var a = {
//   b:function fun(callback){
//     // let fun2 = callback
//     console.log(this)
//     callback('2')
//     console.log('3')
//   }
// }

// let e = (res)=>{
//   console.log(this)
//   console.log(res)
// }
// var c = {
//   d:function(){
//     a.b(e)
//   }
// }
// c.d()
// var a = {
//   b:function fun (){
//     let c =function (){
//       console.log(this)
//     }
//     c()
//   }
// }
// a.b()
