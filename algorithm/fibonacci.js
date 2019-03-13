// 循环实现
// function fibonacci(a){
//   if(a<2){
//     return a
//   }else{
//     return fibonacci(a-1)+fibonacci(a-2) 
//   }
// }
// let start = Date.now()
// console.log(fibonacci(40))
// console.log(Date.now()-start)
// let c = 1;
// var b = 2;
var d = 'fsdvdvdv'
function fibo(a){
  let temp = {}
  for(let i=0;i<=a;i++){
    if(i<2){
      temp[i] = i
      console.log(b)
      console.log(c)
    }else{
      temp[i] = temp[i-1] + temp[i-2]
      delete temp[i-2]
    }
  }
  return temp[a]
}
// let start2 = Date.now()
// console.log(fibo(1000))
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Date.now()-start2)