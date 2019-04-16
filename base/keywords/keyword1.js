// console.log(fun,fun2)
// function fun(){
// }
// var fun2 = fun
// let fun3 = fun
// console.log(a)
// function a(){
//     console.log('hello')
// }
// const b = 'world'
// let a = function hello (){
//     console.log(this === global)
//     console.log(hello.name)
// }
// a()
// debugger
// let c = '5'
// var d = '2'
// function a(){
//     console.log(c,d)
//     console.log('hello')
// }
// a()
// class People{
//     constructor(x = 0,y = 0){
//         this.x = x;
//         this.y = y;
//         this.say = function(){
//             return this
//         }
//     }

//     get name(){
//         return this.x
//     }
//     set name(name){
//         console.log(this)
//         this.x = name
//         return this.x
//     }
//     say2(){
//         return this
//     }
//     static say3(){
//         return this === People
//     }
// }
// let people = new People(3,3)
// console.log(people)

// function* fun(params) {
//     // console.log(params)
//     let res = null;
//     for(let i = 0;i<=params;i++){
//         res = yield i+res || i
//     }
//     return 'end'
// }
// let ff = fun(8)
// for( i of ff){
// console.log(i)
// }
// console.log(ff.next('start'))
// console.log(ff.next('a'))
// console.log(ff.next('b'))
// console.log(ff.next('c'))
// console.log(ff.next('d'))
// console.log(ff.next('e'))
// console.log(ff.next('f'))
// console.log(ff.next('g'))
// console.log(ff.next('h'))
// console.log(ff.next('i'))
// 无限生成器，传参终止
// function* gen(params) {
//     let a = yield 'start'
//     while(a){
//         a = yield a
//     }
//     return 'end'
// }
// let ff = gen()
// console.log(ff.next('start'))
// console.log(ff.next('a'))
// console.log(ff.next('b'))
// console.log(ff.next('c'))
// console.log(ff.next('d'))
// console.log(ff.next('e'))
// console.log(ff.next('f'))
// console.log(ff.next('g'))
// console.log(ff.next('h'))
// console.log(ff.next('i'))
// console.log(ff.next(0))
// let say2 = function(params){
//     return new Promise((res,rej)=>{
//         res('params')
//     })
// }
// async function say(params) {
//     let res =  await say2(params);
//     console.log(res)
//     let res2 =  await say2(params);
//     return res+res2
// }
// let result = say('hello')
// console.log(result)
// result.then(res=>{
//     console.log(res)
// })
// let a = {
//     name:'tianbaolin'
// }
// function People(){
//     console.assert(new.target === this.constructor)
//     this.x = 1;
//     this.y = 2;
// }
// let c = new People()
// console.log(c)
// let a = [1,2,3,4]
// function fun([x,y,z]=a){
//     console.log(x,y,z)
// }
// fun(a)
// function fun2(x,y,z){
//     console.log(x,y,z)
// }
// fun2(...a)
// function fun3(...a){
//     console.log(a)
// }
// fun2(...a)
//  var a = 1;
//  let d = 4
// var b = function(){
//     var b = 2
//     console.log(this)
//     // console.log(a)
//     console.log(b)
//     let a = function(){
//         let c = 3
//         console.log(c)

//     }
//     console.log(b)
//     a()
// }
// b()
// var tmp = new Date();

// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = 'hello world';
//   }
// }
// f(); 
// function a(){
//     console.log(b)
//     if(false){
//         function b(){

//         }
//     }
// }
// a()
// var a = 3;
// let a = a;
let a = {
  b:function B(){

  },
  c:function C(){
    function D(){
      console.log(this)
    }
    D()
    console.log(this.b)
  }
}
a.c()
