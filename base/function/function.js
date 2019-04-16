// var arg = null
// function fun(...arr){
//   arg = arguments
//   // console.log(arguments.callee)
//   // console.log(arguments.caller)
//   console.log(fun.caller)

//   // console.log(arguments)
// }
  
// fun(1,2,3,4,5)
// console.log(arg)
// var x = 1
// function fun(){
//   let x = 2
//   var y = 3
//   let fun2 = function(){
//     return x
//   }
//   fun2()
//   // return fun2
// }
// console.log(fun())
// let a = 1;
// out:{
//   break out
//   console.log('hello')
// }
// class Stu{

// }
function fun(params) {
  switch (params) {
    case 1:
      console.log(1)
      break;
    case 2:
      console.log(2)
      break;
    case 3:
      console.log(3)
      break;
    default:
      console.log(4)
      break;
  }
}
fun(1)