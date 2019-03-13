let _ = require('lodash')
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
console.log((a.filter(item=>item>7).shift()))
