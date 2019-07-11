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
// function fun(params) {
//   switch (params) {
//     case 1:
//       console.log(1)
//       break;
//     case 2:
//       console.log(2)
//       break;
//     case 3:
//       console.log(3)
//       break;
//     default:
//       console.log(4)
//       break;
//   }
// }
// fun(1)
// let a = {};
// let b = null
// function fun(arg){
//   console.log('object :', b = arguments[0]);
//   console.log('arg', arg === a)
// }
// fun(a)
// a.b = 3
// console.log('object :', b);
// function curry(fun, oldCache = []) {
//   // 原始函数参数个数
//   const { length } = fun;
//   return (...newCache) => {
//     // 参数拼接
//     const _cache = [...oldCache, ...newCache];
//     // 参数是否全部就位
//     if (_cache.length < length) {
//       return curry(fun, _cache);
//     }
//     return fun(..._cache);
//   };
// }

// function calculate(x, y, z) {
//   return x * y * z;
// }
// const calculateCurry = curry(calculate);
// console.log('curry', calculateCurry);
// console.log('object', calculateCurry(5)(6)(9));
// console.log('object', calculateCurry(1)(2)(4));
// console.log('object', calculateCurry(8, 2)(2));
// console.log('object', calculateCurry(8, 2, 6));

// 计算奖金

// const levelCoefficientMap = {
//   A: 9,
//   B: 7,
//   C: 5,
//   D: 3,
//   E: 1,
// };
// const getCalculateBounds = function name(levelMap) {
//   return (baseSalary, level) => baseSalary * (levelMap[level] || 1);
// };
// const calculateBounds = getCalculateBounds(levelCoefficientMap);
// const yearBounds = calculateBounds(12, 'B');
// console.log('yearBounds', yearBounds);
// const StrategyA = function strategyA() {

// };
// StrategyA.prototype.calculate = function calculate(salary) {
//   return salary * 9;
// };
// const strategyA = new StrategyA();

// const StrategyB = function strategyB() {
// };
// StrategyB.prototype.calculate = function calculate(salary) {
//   return salary * 7;
// };
// const strategyB = new StrategyB();

// function Bounds(salary, strategy) {
//   this.salary = salary;
//   this.strategy = strategy;
// }
// Bounds.prototype.getBounds = function getBounds() {
//   return this.strategy.calculate(this.salary);
// };
// let bounds = new Bounds(12, strategyA);
// console.log('object', bounds.getBounds());
// bounds = new Bounds(12, strategyB);
// console.log('object', bounds.getBounds());


const B = {
  sendFlower: function _a() {
    // const { sendFlower } = B;
    console.log('object', _a.caller);
  },
};
const A = {
  sendFlower0() {
    B.sendFlower();
  },
};
A.sendFlower0();
