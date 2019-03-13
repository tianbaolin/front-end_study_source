// 'use strict'
// let a ={}
// a = new Object()
// a = {
//   count:0,
//   set name(item){
//     this.count += 1;
//     return item;
//   },
//   get name(){
//     return this.count
//   }
// }
// a.name = 1
// a.name = 2
// a.name = 3
// console.log(a.name)
// console.log(typeof a)

// let key = 'name';
// a={
//   [key]:key
// }

// a = {
//   'name':'name'
// }
// console.log(a['name'])

// 利用对象属性名不可重复数组数字去重
// let arr = [1,22,3,4,5,4,3,2,3,4,5,6,5,7,9,8,33,0]
// let newArr = {}
// for(let item of arr){
//   newArr[item]=item
// }
// let res = Object.keys(newArr).map(item=>Number(item))
// console.log(res)

// 数组去重
// arr = [1,2,3,'1','2','3',1,2,3]
// console.log(Object.keys(arr))
// let A = []
// for(let item of arr){
//   if(A.indexOf(item)=== -1){
//     console.log(item)
//     // A.push(item)
//     A.unshift(item)
//   }
// }
// console.log(A)

//  function * fun (){
//   console.log('hello')
//   yield 1;
//   yield 2;
//   yield 3;
//   console.log('hello1')
// }
// let a = fun()
// for(let item of a){
//   console.log('%c'+item,'color:red');
// }
// console.log(typeof fun())
// let a = Object.create()
// let a = '123'
// b = {
//   [a]:a
// }
// console.log(JSON.stringify(b))
// let a = {name:'tianbaolin'}
// a.__proto__ = null
// let b = {age:18}
// let c = Object.assign(a,b)
// console.log(c)
// console.log(a === c)
// function f(n,a = 0,b=1){
//   if(n===0 || n ===1){
//     return n
//   }else{
//     return f(n-1,b,a+b)
//   }
// }
// function f(n){
//   if(n===0 || n ===1){
//     return n
//   }else{
//     return f(n-1)+f(n-2)
//   }
// }

// console.log(f(20))
// let b = {
//   // _name:"tianbaolin",
//   // set name(param){ this._name = param ;return param},
//   // get name(){return this._name}
//   }
// Object.defineProperty(b,'_name',{
//   value:'hello',
//   enumerable:false
// })
// let a = Object.assign({},b)
// console.log(b)
// function People(x,y){
//   // console.log(this)
//   this.x = x;
//   this.y = y;
// }
// People.prototype.add = function(x,y){
//   this.x = x;
//   this.y = y
//   console.log(this.x + this.y)
// }
// let xiaomin = new People(1,2)
// console.log(xiaomin)
// xiaomin.add(3,4)
// console.log(xiaomin)
// function Man(x,y){
//   People.call(this,x,y)
// }

// Man.prototype = Object.create(People.prototype)
// Man.prototype.constructor = Man
// let xiaomin = new Man(1,2)
// console.log(xiaomin)

// // console.log(xiaomin)
// // console.log(global)
// console.log(xiaomin)
// let a = Object.create(null,{key:{
//   value:'tianbaolin',
//   configurable:true,
//   writable:true,
//   enumerable:true
// }})
// Object.defineProperty(a,'key',{value:'tbl',writable:false})
// a.key = ''
// console.log(a)
// function People(){
//   let _name = null;
//   let count=0;
//   Object.defineProperty(this,'name',{
//     set:function(val){
//       _name = val
//       count++
//     },
//     get:function(){
//       return _name
//     }
//   })
//   this.getCount = function(){
//     return count
//   }
// }

// let man = new People()
// console.log(man)
// man.name = ''
// man.name = ''
// man.name = ''
// console.log(man)

// function People(){
//   // this.constructor.prototype.x = 2
//   let _name = null
//   let __name = ''
//   Object.defineProperty(this.constructor.prototype,'name',{
//     // value: _name
//     set:function(val){
//       console.log('set2')
//       this._name = val
//     },
//     get:function(){
//       return this._name
//     },
//     configurable:true
//   })
  // Object.defineProperty(this,'name',{
  //   value:'',
  //   writable:true
    // set:function(val){
    //   console.log('set1')
    //   __name = val
    // },
    // get:function(){
    //   return __name
    // }
  // })
  // People.prototype.x = 2
  // this.__proto__ = 2
// }
// People.prototype.a = '213'
// let a = new People()
// let b = new People()
// console.log(a.name,b.name)
// function People(){
// }
// People.prototype = {
//   _name:'123',
//   set name(val){
//     console.log('4324')
//     this._name = val
//   },
//   get name(){
//     console.log('get')
//     return this._name
//   }
// }
// People.prototype._name = 'tianbaolin'
// Object.defineProperty(People.prototype,'name',{
//   get: function(){
//     console.log('gey')
//     return this._name
//   },
//   set : function(val){
//     this._name
//   },
//   enumerable:true
// })
// let name = '54354354'
// People.prototype = {
//   get name(){
//     console.log('get')
//     return name
//   },
//   set name(val){
//     console.log('set')
//     name = val
//   }
// }
// let man = new People()
// console.log(JSON.stringify(man))
// function People(){
//   // return function(){}
// }
// let man = new People()
// console.log(man)
// function creatObject(x,y){
//   let obj = Object.create({
//     '__proto__':Object.prototype,
//     constructor:creatObject
//   })
//   this = obj
//   this.x = x;
//   this.y = y
//   return this
// }

// let obj = creatObject(x,y)
// console.log(obj)
// console.log(this)
//  a = {
//   say:function(){
//     console.log(this)
//   },
//   c:{
//     say(){
//       console.log(this === b)
//     }
//   },
//   d:{
//     say:()=>{
//       console.log(this === window)
//     }
//   },
//   e:{
//     say(){
//       setTimeout(function(){
//         console.log(this)
//       },1000)
//     },
//     say2(){
//       setTimeout(()=>{
//         console.log(this)

//       },1000)
//     },
//     say3:()=>{
//       console.log(this)
//     }
//   }
// }
// b = {
//   say:a.d.say
// }
// a.e.say3()
// a = {
//   say:function(callback){
//     let that = this
//     callback(that)
//   }
// }
// b={
//   say:function(that){
//     console.log(1,that)
//     console.log(2,this)
//   }
// }
// a.say(b.say)
// (function(){console.log(this === global)})()
// function a(){
// console.log(this === global)
// }
// a()
// a = {
//   say:function(callback){
//     console.log(this === b)
//     callback()
//   }
// }
// b = {
//   say:a.say
// }
// c = {
//   say:function(){
//     console.log(1,this === window)
//     let say2 = function(){
//       console.log(2,this === global)
//     }
//     say2()
//   }
// }
// b.say(c.say)
// c.say()
// let a = {a:1,b:2,c:3,d:4}
// console.log(a)
// let arr = Object.entries(a)
// console.log(arr)
// let map = new Map(arr)
// Object.freeze(a)
// Object.isFrozen(a)
// 深冻结函数.
// function deepFreeze(obj) {

//   // 取回定义在obj上的属性名
//   var propNames = Object.getOwnPropertyNames(obj);
//   console.log(propNames)
//   // 在冻结自身之前冻结属性
//   propNames.forEach(function(name) {
//     var prop = obj[name];

//     // 如果prop是个对象，冻结它
//     if (typeof prop == 'object' && prop !== null)
//       deepFreeze(prop);
//   });

//   // 冻结自身(no-op if already frozen)
//   return Object.freeze(obj);
// }
// let a ={}
// deepFreeze(a)
// Object.is(NaN,NaN)
// console.log(Object.is(NaN,NaN))
// console.log(Object.is(0,-0))
// let a = {
//   a:1,
//   b:2,
//   c:3
// }
// let b = Object.getOwnPropertyDescriptor(a,'a')
// b = Object.getPrototypeOf(a)
// b = Object.getPrototypeOf(Function)
// b = Object.values(a)
// console.log(b)
// let a ={
//   name:'tianbaolin'
// }
// b = {
//   d:a
// }
// console.log(a)
// let fun = new Function("console.log('hello')")
// let a = {
//   name:'tianbaolibn'
// }
// let a = 2;
//  function fun (){
//    let a = 1;
  //  return function fun2 (){
  //    return a;
  //  }
  //  return new Function(a,"return a;")
  // console.log(x,y,z)
  // console.log(this)
  // console.log(fun.caller)
// }
// let fun3 = fun()
// fun3(3)
// fun(1,2,3)
// fun2 = function(x,y,z){
//   console.log(arguments)
//   fun.call(a,...arguments)
// }
// fun2(1,2,3)
// Object.getOwnPropertyNames(fun2)
// Object.getOwnPropertyDescriptor(fun2,'length')
// fun(1,2,3)
// let fun2 = fun.bind(a,1,2)
// fun2(3)
// fun2(1,2,3)
// fun.call(a,1,2,3)
// fun.apply(a,[1,2,3])
// for(var i=0 ;i<5;i++){
//   // console.log(i)
//   setTimeout(()=>{
//     console.log(i)
//   },5000)
// }
// debugger;
fun()
function fun(){
  console.log(this)
  function fun2(){
    console.log(this)
  }
  fun2() 
}

