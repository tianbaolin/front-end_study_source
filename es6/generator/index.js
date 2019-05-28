// function* iterator(params) {
//   let res = params;
//   while (res !== undefined) {
//     res = yield res;
//   }
// }
// let fun = iterator(0);
// // console.log("fun.next()", fun.next());
// // console.log("fun.next()", fun.next(1));
// // console.log("fun.next()", fun.next(2));
// // console.log("fun.next()", fun.next(3));

// function fie(n) {
//   let i = 2;
//   let res0 = 0;
//   let res1 = 1;

//   if (n <= 1) {
//     return n;
//   } else {
//     while (i <= n) {
//       [res1, res0] = [res0 + res1, res1];
//       i++;
//     }
//   }
//   return res1;
// }
// // console.log("fie(5)", fie(5));

// // 0 1 1 2 3 5 8 13
// function* fibona() {
//   let [y1, y0] = [1, 0];
//   while (true) {
//     yield y1;
//     [y0, y1] = [y1, y0 + y1];
//   }
// }
// let rank = fibona();
// // console.log("rank.next() :", rank.next());
// // console.log("rank.next() :", rank.next());
// // console.log("rank.next() :", rank.next());
// // console.log("rank.next() :", rank.next());
// // console.log("rank.next() :", rank.next());
// // console.log("rank.next() :", rank.next());

// // for (const item of rank) {
// // console.log('item :', item)
// // }

// fun = function* fun(params) {
//   yield 1;
//   yield 2;
//   yield* [3, 4, 5, 6];
//   yield 7;
// };

// let res = fun();
// // for (const item of res) {
// //   console.log('item', item)
// // }
// console.log("res", [...res]);
// // 迭代器遍历方法

fun = function* fun(params) {
  // console.log("this :12", this);
  console.log("hello", "hello");
  // this.a = 1;
  let i = 0;
  while (true) {
    i++;
    yield true;
  }
};
let fun2 = fun();
fun2.next();
fun2.next();
fun2.next();

// let fun2 = fun();
// try{
//   fun2.throw(new Error())
// }catch(error){
//   // console.log('object :', error);
// }
// console.log("fun2.next()", fun2.next());
// console.log("fun2.return()", fun2.return());
// console.log("fun2.next()", fun2.next());
// console.log("object :", fun2 instanceof fun);

// function Fun() {
//   // console.log('this :', this);
//   return fun.call(this);
// }
// var funfun = new Fun();
// funfun.next();
// console.log("f.a :", funfun.a);

function* fun3() {
  let res = yield thunk;
  // console.log("res2", res instanceof Error);
  console.log("res", res);
  res = yield thunk;
  console.log("res", res);
  // console.log("res", res.message, res.name);
  res = yield thunk;
  console.log("res", res);
}
function thunk(next) {
  // console.log("params", params);
  let url =
    "http://rap2api.taobao.org/app/mock/165670/nantongsmt/payment/orderList.do";
  fetch(url).then(res=>{
    return res.json()
  }).then(res=>{
    next(res)
  })
}
function run(fn) {
  var gen = fn();
  function next(data = null) {
    let result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }
  next();
}
run(fun3);
// function thunk(...params) {
//   // console.log("params", params);
//   let fun = params.pop();
//   let funfun = fun(...params);
//   let gonon = function(params = null) {
//     let result = funfun.next(params);
//     result.value
//       .then(res => {
//         return res.json();
//       })
//       .then(res => {
//         if (!result.done) {
//           gonon(res);
//         }
//       })
//       .catch(err => {
//         funfun.next(err);
//       });
//   };
//   gonon();
// }

// thunk(
//   "http://rap2api.taobao.org/app/mock/165670/nantongsmt/payment/orderList.do",
//   fun3
// );
