// console.log(this)
// function a(){
//   console.log(this)
// }
// a()
// a = {
//   name:()=>{
//     console.log(this)
//   }
// }
// a.name()
// a = {
//   b:()=>{
//     console.log(this)
//     function c(){
//       this = 'a'
//       console.log(this)
//     }
//     c()
//   }
// }
// a.b()
// var a = {
//   name:'tianbaolin'
// }
// delete a.name
// delete a

// let a = 1;
// let b = {
//   a:2
// }
// with(b){
//   // console.log(a)
//   let a = 3
//   console.log(a)
// }
// eval = 123
// arguments = 123
// console.log(argument)
// 'use strict'
// console.log(this)
// let a = true
// if(a){
//   console.log(a)
//   console.log(b)
// function b(){
//   return this;
// }
// }
// for(let i=0,j =10;i<=10;i++,j--){
//   console.log(i,j)
// }
// let count = 0
// function a(){
//   if(count <=10){
//     count++
//     a()
//   }
// }
// a()
// function fun(para){
//   if(para === 0||para === 1){
//     return para
//   }else{
//     console.trace(para)
//     console.count()

//     return fun(para-1)+fun(para-2)
//   }
// }
// function fun(n, a = 0, b = 1) {
//   if (n === 0) return a
//     console.trace(n)
//     console.count()
//   return fun(n - 1, b, a + b)
// }
// console.log(fun(10))
// let b = a.apply(3)
// function fun(n) {
//   let a = {
//     0:0,
//     1:1
//   }
//   for (let i = 0; i <= n; i++) {
//     if (i >= 2) {
//       a[i] = a[i - 1] + a[i - 2]
//       // 删除历史计算数据，节省空间
//       delete a[i-2]
//     }
//     // console.log(a)
//   }
//   return a[n]
// }
// console.log(fun(1000))
// debugger
// var a ={
//   b:function(){
//     let c=()=>{
//       return this
//     }
//     return c
//   }
// }
// let d = a.b
// let e = d()
// console.log(e())

// function fun(n){
//   let tempOb={
//     0:0,1:1
//   }
//   for(let i = 0;i<=n;i++){
//     if(i>=2){
//       tempOb[i] = tempOb[i-1]+tempOb[i-2]
//       delete tempOb[i-2]
//     }
//   }
//   console.log(tempOb)
//   return tempOb[n]
// }
// console.log(fun(100))

// function fun(arr, x) {
//   let a = arr;
//   let i = x;
//   let m = Math.ceil(a.length / i);
//   let n = [];
//   for (let j = 0; j < m; j++) {
//     n.push(a.slice(j * i, (j + 1) * i));
//   }
//   return n;
// }
// console.log(fun([1, 2, 3, 4, 5, 54, 5, 4, 3, 2], 4));
// function fun(arr, f) {
//   let a = arr;
//   return a.reduce(
//     (acc, item) => {
//       let i = f(item)? 0 : 1;
//       acc[i].push(item)
//       return acc;
//     },
//     [[], []]
//   )
// }
// let  d = fun([1,2,3,4,5,6],(item)=>item>5)
// console.log(d)
// let a = [1,0,'',"",false,undefined,null,NaN]
// console.log(a.filter(item=>item))
// function fun(arr){
//   return arr.filter(Boolean)
// }
// console.log(fun(a))
// a = [1,2,3,4,5,6,4,53,2,21,2,4,5,6,4,3,2,1,4,3]
// let b = a.reduce((acc,item,index)=>{
//   acc[item] = (acc[item]||0)+1
//   return acc
// },{})
// console.log(b)