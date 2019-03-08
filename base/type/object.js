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
function People(){
}
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
People.prototype._name = 'tianbaolin'
Object.defineProperty(People.prototype,'name',{
  get: function(){
    console.log('gey')
    return this._name
  },
  set : function(val){
    this._name
  },
  enumerable:true
})
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
let man = new People()
console.log(JSON.stringify(man))
