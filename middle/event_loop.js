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
// const init = new Date().getTime();
// function a1() {
//   // 1
//   console.log('1');
// }
// function a2() {
//   // 8
//   console.log('2');
// }
// function a3() {
//   // 11
//   console.log('3');
// }
// function a4() {
//   // 12
//   console.log('4');
// }
// function a5() {
//   // 10
//   console.log('5');
// }
// function a6() {
//   // 6
//   console.log('6');
// }
// function a7() {
//   // 4
//   console.log('7');
// }
// function a8() {
//   // 5
//   console.log('8');
// }
// function a9() {
//   // 2
//   console.log('9');
// }
// function a10() {
//   // 3
//   for (let i = 1; i < 10000; i++) {}
//   console.log('10');
// }

// a1();
// setTimeout(() => {
//   a2();
//   // 9
//   console.log(new Date().getTime() - init);
//   Promise.resolve().then(() => {
//     a3();
//   }).then(() => {
//     a4();
//   });
//   a5();
// }, 1000);
// setTimeout(() => {
//   a6();
//   // 7
//   console.log(new Date().getTime() - init);
// }, 0);

// Promise.resolve().then(() => {
//   a7();
// }).then(() => {
//   a8();
// });

// a9();
// a10();
setTimeout(() => console.log(4));

new Promise((resolve) => {
  // 同步代码
  resolve();
  console.log(1);
}).then((_) => {
  console.log(3);
});

console.log(2);
