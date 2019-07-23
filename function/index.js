// 计算奖金
// function calculateBounds(baseSalary, level) {
//   const levelMap = {
//     A: 10,
//     B: 7,
//     C: 5,
//     D: 3,
//     E: 1,
//   };
//   return baseSalary * (levelMap[level] || 1);
// }
// const yearBounds = calculateBounds(12, 'B');
// console.log('yearBounds', yearBounds);
// if(true){
//   function say(){
//     console.log(1)
//   }
// }else{
//   function say() {
//     console.log(2)
//   }
// }
// say()
// function a (params) {
//   const var1 = 1
//   return function b(params) {
//     let var2 = var1+1
//     console.log('object :', {object:var2});
//     return function c(params) {
//       let var3 = var2+1
//       return var3
//     }
//   }
// }
// let var4 = 4
// let d = a()()
// console.log({functionc:d})
// let a = 1;
// let d = null
// {
//   let b = a+1;
//   let e = 5
//     d =function (){
//       let c = b+1
//       let f = function(){
//         let g = c+1
//         return g
//       }
//       return f;
//     }
// }
// console.log('d', {d:d()})
// function People(){
//   let name = 'tbl'
//   let say = function (params) {
//     console.log('params', params)
//   }
//   this.fun = function(){
//     say()
//   }
// }
// let people = new People()
// console.log('people', people)
// console.log('people.fun', people.fun)
// function People() {
// }
// (function a() {
//   const name = 'tbl';
//   People.prototype.say = function b() {
//     console.log('name', name);
//   };
// }());
// const people = new People();
// console.log('people', people);

// const a = {
//   fun() {
//     console.log('this', this);
//     const fun1 = () => {
//       console.log('this', this);
//     };
//     fun1();
//   },
// };
// a.fun();

// const multipy = (() => {
//   const cache = {};
//   const calculate = (...params) => {
//     let res = 1;
//     for (let index = 0; index < params.length; index += 1) {
//       res *= params[index];
//     }
//     return res;
//   };
//   return (...params) => {
//     const param = params.join(',');
//     if (param in cache) {
//       console.log('缓存', 'cache');
//       return cache[param];
//     }
//     const res = calculate(...params);
//     cache[param] = res;
//     return res;
//   };
// })();
// multipy(10, 3, 4);
// multipy(10, 3, 2);
// multipy(10, 3, 6);
// console.log('object', { multipy });
// const type = Object.prototype.toString.call(Object.prototype);
// console.log('object', type);
// function calculate(x, y, z) {
//   return x * y * z;
// }
// function currying(fun) {
//   // 原始函数参数个数
//   const { length } = fun;
//   // 参数缓存
//   const params = [];
//   function middleFun(param) {
//     params.push(param);
//     // 参数是否全部就位
//     if (params.length < length) {
//       return middleFun;
//     }
//     return fun(...params);
//   }
//   return middleFun;
// }
// const curry = currying(calculate);
// console.log('object', curry(6)(9)(4));

// const arr = [1, 2, 3, 4];
// console.log('arr', arr);
// arr.shift();
// console.log('object', arr);
// arr.shift();
// console.log('object', arr);
// arr.shift();
// console.log('object', arr);

// const arr = [1, 2, 3, 4];
// Function.prototype.uncurrying = function uncurrying() {
//   // 函数对象
//   const self = this;
//   return function middleFun(...params) {
//     for (const item of params) {
//       self.call(this, item);
//     }
//     return this;
//   };
// };
// arr.uncurry = arr.push.uncurrying();
// arr.uncurry('1', '2', '3', '4');
// console.log('arr :', arr);
// function throttle(fun, time) {
//   let first = true;
//   let timer = null;
//   return function middle(...params) {
//     // 第一次或者已经过了一定时间
//     if (first === true || timer === null) {
//       fun.call(this, ...params);
//       first = false;
//       timer = window.setTimeout(() => {
//         timer = null;
//       }, time);
//     }
//   };
// }
// function handler(event) {
//   console.log('this', this);
//   console.log('event', event);
// }
// document.onmousemove = throttle(handler, 1000);
// window.onclick = function name(event) {
//   console.log('event :', event.currentTarget);
// };

// // 每组大小
// const unit = 100;
// // 组数
// const size = 1000;
// const timeDistance = 10;
// let count = 0;
// const timeChunk = function name() {
//   for (let i = 1; i <= unit; i += 1) {
//     const div = document.createElement('div');
//     div.textContent = `hello${i + count * unit}`;
//     document.body.appendChild(div);
//   }
// };

// const timerId = window.setInterval(() => {
//   if (count < size) {
//     timeChunk();
//     count += 1;
//   } else {
//     window.clearInterval(timerId);
//   }
// }, timeDistance);

// let getPlatform = () => {
//   // 首次计算
//   const { userAgent } = navigator;
//   const res = userAgent.toUpperCase().indexOf('MAC OS');
//   const result = res >= 0;
//   // 后续计算，直接返回结果
//   getPlatform = () => result;
//   return result;
// };
// console.log('object', getPlatform());
// console.log('object', getPlatform());


// function memorize(fun) {
//   const cache = {};
//   return (...params) => {
//     const sign = params.join(',');
//     // console.count(sign);
//     if (sign in cache) {
//       return cache[sign];
//     }
//     const res = fun(...params);
//     cache[sign] = res;
//     return res;
//   };
// }
// const memorizeAdd = memorize((n) => {
//   console.count('fibola');
//   if (n < 2) {
//     return n;
//   }
//   return memorizeAdd(n - 1) + memorizeAdd(n - 2);
// });


// console.log('object', 'start');
// console.log('object', memorizeAdd(44));
// console.log('object', memorizeAdd(44));

// function curry(fun, ...param) {
//   return function middle(...x) {
//     // console.log('x', x);
//     const params = [...param, ...x];
//     if (params.length < fun.length) {
//       return curry(fun, ...params);
//     }
//     return fun(...params);
//   };
// }
// function discountCompute(discount, price) {
//   return discount * price;
// }
// const discountComputeCurry = curry(discountCompute);
// const discountCompute95 = discountComputeCurry(0.95);
// console.log('object', discountCompute95(200));
// console.log('object', discountCompute95(100));
// console.log('object', discountCompute95(300));
// Function.prototype.uncurrying = function () {
//   // 函数本身
//   const self = this;
//   return function _uncurry(obj, ...params) {
//     return self.call(obj, ...params);
//   };
// };

// const a = {
//   say(...param) {
//     console.log('this :', this);
//     return param;
//   },
// };
// const uncurryingA = a.say.uncurrying();
// console.log('object :', uncurryingA({ a: 1, b: 2 }, 1, 2, 3));
// 发布订阅模式
// 发布者

// const publisher = {
//   // 订阅者
//   eventListeners: {},
//   // 订阅方法
//   subscribe(eventType, listener) {
//     if (!this.eventListeners[eventType]) {
//       this.eventListeners[eventType] = [];
//     }
//     // 添加订阅者进缓存
//     this.eventListeners[eventType].push(listener);
//   },
//   // 发布方法
//   dispatchEvent(eventType, eventObject) {
//     this.eventListeners[eventType].map(listener => listener(eventObject));
//   },
// };
// publisher.subscribe('eventType', (res) => {
//   // console.log('this', this);
//   console.log('res', res);
// });
// publisher.dispatchEvent('eventType', { a: 2 });

// // 每个对象添加发布-订阅模式
// function installEvent(obj) {
//   Object.keys(publisher).map(key => obj[key] = publisher[key]);
// }

function Tea(params) {

}
console.log('object', Tea.prototype.constructor === Tea);
