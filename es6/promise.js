let axios = require('axios') ;
let newPromise = (params) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      params ? resolve('正确') : reject('错误')
    }, 2000);

  }).then(res=>{
    // console.log(res)
    return res
  },err=>{
    // console.log(err)
    // return Promise.reject(err)
    return err
  }).catch(err=>{
    // console.log(err)
  }).then(res=>{
    // console.log(res)
  })
}
newPromise(false)
//  Promise.all([newPromise(false),newPromise(true),newPromise(true)]).then(res=>{
//    console.log(res)
//  },err=>{
//    console.log(err)
//  })
// newPromise(true).then((value) => {
//   console.log('success',value)
//   return Promise.reject('拒绝了')
//   // return newPromise(true)
// }
// // ,msg=>{
// //   console.log(msg)
// //   throw new Error('犯错误了')
// // }
// ).then((message)=>{
//   console.log(message)
//   // return newPromise(false)
// }
// ,msg=>{
//   console.log(msg)
//   return Promise.resolve('成功了')
// }
// ).then(msg=>{
//   console.log(msg)
// }).catch((message)=>{
//   console.log(message)
// }).then(msg=>{
//   console.log(msg)
// }).finally(msg=>{
//   console.log(msg)
// })

// Promise.race([newPromise(false),newPromise(true)]).then(msg=>{
//   console.log(msg)
// },msg=>{
//   console.log(msg)
// })
// axios.get('./data/a.json').then((message)=>{
//   console.log(message)
//   return axios.get('./data/b.json')
// }).then((message)=>{
//   console.log(message)
// }).catch((error)=>{
//   console.log(error.response)
// })


// function resolveAfter2Seconds() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('hello');
//     }, 5000);
//   });
// }
// let result = null
// async function say(params) {
//   console.log(1)
//   result = await resolveAfter2Seconds()
//   console.log(result)
//   return result
// }
// say().then((resolve)=>{
//   console.log(resolve)
// })
// console.log(this)

// let obj = {
//   name:'tianbaolin',
//   getName:function(){
//     // console.log(this)
//   }
// }
// let getName = obj.getName
// getName()
// let d = {
//    fun : ()=>{
//     console.log(this)
//   }
// }
// d.fun()
