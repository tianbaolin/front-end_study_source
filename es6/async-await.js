let newPromise = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      params ? resolve('正确') : reject('错误')
    }, 2000);
  })
}

// let b = newPromise(true).then(res=>{
//   return '123'
// },err=>{

// }).finally(res=>{
//   console.log(res)
//   return Promise.reject('hello')
// }).then(res=>{
//   console.log(res)
//   return '890'
// }).catch(err=>{
// console.log(err)
// return '435'
// })
// b.then(res=>{
//   console.log(res)
// })
async function fun() {
  let a = await newPromise(false).catch(err=>{
    return false
  })
  console.log(a)
  return a
}

let a = fun()
// a.then(res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })