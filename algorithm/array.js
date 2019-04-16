// let _ = require('lodash')
// 查找元素出现次数
// let a = [1,2,3,4,54,3,2,21,4];
function fun1(arr, x) {
  return arr.reduce((acc, item) => {
    if (item === x) {
      ++acc
    }
    return acc
  }, 0)
}
// console.log(fun(a,1))
// 斐波那契数列
function fun2(n) {
  if (n === 0 || n === 1) {
    return n
  } else {
    // console.trace(n)
    return fun(n - 1) + fun(n - 2)
  }
}
// console.log(fun(40))
function fun3(n) {
  let temp = {
    0: 0,
    1: 1
  }
  for (let i = 0; i <= n; i++) {
    if (i >= 2) {
      temp[i] = temp[i - 1] + temp[i - 2]
      delete temp[i - 2]
    }
  }
  console.log(temp)
  return temp[n]
}
// console.log(fun3(60))
// 数组降维

function fun7(a) {
  let b = []
  let fun6 = x => {
    x.forEach(item => {
      if (Array.isArray(item)) {
        fun6(item)
      } else {
        b.push(item)
      }
    })
  }
  fun6(a)
  return b
}
// console.log(fun7(a))
let a = [1, [2, 3],
  [2, 3, 4],
  [3, 2, 4],
  [3, 4, [5, 6]]
]
// 数组降维
function fun4(arr) {
  // let res = [].concat(...arr)
  // let len = res.some(item => Array.isArray(item))
  // return len ? fun4(res) : res
  return [].concat(...arr.map(item => {
    if (Array.isArray(item)) {
      return fun4(item)
    } else {
      return item
    }
  }))
}
// 两个数组差 a-b
a = [1,2,3,4,5,1,2,3,4,7,8,9];
b = [2,3,4,5,6,3,4,2,1];
function fun5(a,b){
  let A = [...new Set(a)]
  let B = new Set(b)
  return A.filter(item=>!(B.has(item)))
}
// 没有重复的元素
a = [1,2,3,4,5,1,2,3,4,7,8,9];
function fun8(){
  return a.filter(item=>{
    return a.indexOf(item) === a.lastIndexOf(item)
  })
}
// console.log(fun8(a))
// 第一个满足条件
// console.log((a.filter(item=>item>7).shift()))
a = [1,2,3,4,5,4,3,2,1,3,4,5,6,7,3,2]
let sum = 6
function fun9(a,sum){
let newA = [...new Set(a)]
let res = []
newA.map((item,index,current)=>{
  let newCurrent = current.slice(index)
  newCurrent.map((item2,index2)=>{
    if(item+item2 === sum){
      res.push([item,item2])
    }
  })
})
return res
}
function fun10(a,sum){
  let res = []
  a = [...new Set(a)]
  a.map((item,index)=>{
    let s = sum - item
    if(a.includes(s,index) ){
      res.push([item,s])
    }
  })
  return res
}
// console.log(fun10(a,sum))

a = [1, [2, 3],
  [2, 3, 4,[5,7,[8,9,[1,3]]]],
  [3, 2, 4],
  [3, 4, [5, 6,[6,7]]]
]

// b = [].concat(...a)
// b.some(item=>{
//   return Array.isArray(item)
// })
function fun11(a){
  let b = a
  do{
    b = [].concat(...b)
  }while(b.some(item=>{
    return Array.isArray(item)
  }))
  return b

}
// console.log(fun11(a))
function fun12(item){
  // console.log(arguments.callee.caller)
  return [].concat(...item.map(item2=>{
  // console.log(arguments.callee)
    return Array.isArray(item2)?fun12(item2):item2
  }))
}
// console.log(fun12(a))
// 数组降维
a = [1,2,3,[4,5,6,[7,8,9,[0]]],1,2,3]
let res = []
function fun13(param){
  param.forEach((item)=>{
    if(Array.isArray(item)){
      fun13(item)
    }else{
      res.push(item)
    }
  })
}
function fun14(a){
  return a.reduce((acc,item,index)=>{
    return acc.concat(Array.isArray(item)?fun14(item):item)
    // if(Array.isArray(item)){
    //   return acc.concat(fun14(item))
    // }else{
    //   return acc.concat(item)
    // }
  },[])
}
// console.log(fun14(a))
// console.log(res)
// 排序
a = [1.6,2.4,4.8,3.5,5.3,7.8,6.7,9.3,7.6,8.3,0]
// res = a.sort((x,y)=>{return x - y})
// console.log(res)
// {4: [4.2], 6: [6.1, 6.3]}
// groupBy([6.1, 4.2, 6.3], Math.floor);
function groupBy(a) {
  let res = {}
  a.map(item=>{
    let key = Math.round(item)
    console.log(key)
    if(res[key]){
      res[key].push(item)
    }else{
      res[key]=[item]
    }
    // return item
  })
  return res
}
// console.log(groupBy(a))
function groupBy2(param) {
  return param.reduce((acc,item,params)=> {
    let key = Math.round(item)
    acc[key] = (acc[key] || []).concat([item])
    return acc
  },{})
}
// console.log(groupBy2(a))
