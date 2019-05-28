// import modules from './modules.js'
// console.log('modules :', modules);
let newPromise = params => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      params ? resolve("正确") : reject("错误");
    }, 2000);
  });
};

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
  let a = await newPromise(false).catch(err => {
    return false;
  });
  // console.log(a)
  return a;
}

let a = fun();
// a.then(res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

let pro = new Promise(function(resolve, reject) {
  // throw new Error()
  // reject('1')
  // setTimeout(() => {
  resolve("ok");
  // }, 1000);
});
pro
  .then(
    res => {
      console.log("res", res);
      // throw new Error()
    },
    err => {
      console.log("1 :", err);
    }
  )
  .catch(err => {
    console.log("2 :", 2);
  });
console.log("1 :", 1);
let res = fetch(
  "http://rap2api.taobao.org/app/mock/165670/nantongsmt/payment/orderList.do"
);
// res
//   .then(res => {
//     console.log("res", res);
//     return res.text();
//   })
//   .then(res => {
//     console.log("res", JSON.parse(res));
//   });

// let fun4 = async () => {
//   let a = 8;
//   let res =  fetch(
//     "http://rap2api.taobao.org/app/mock/165670/nantongsmt/payment/orderList.do"
//   ).then(res => {
//     console.log("7", 7);
//     // console.log("a", a);
//     console.log("a", a);
//     return res.json();
//   });
//   // console.log("res", res);
// };
// fun4();

let fun7 = i => {
  return new Promise((resolve, reject) => {
    resolve(i);
  });
};

function* fun5() {
  let i = 0;
  while (true) {
    if (i >= 10) break;
    yield fun7(i);
    i++;
  }
}

// (async function(){
// for await (const item of fun6) {
//   console.log('item', item)
// }
// })()

(async function() {
  let fun6 = fun5();
  let res = await fun6.next().value;
  // console.log("res :", res);
  res = await fun6.next().value;
  // console.log("res :", res);
  res = await fun6.next().value;
  // console.log("res :", res);
  res = await fun6.next().value;
  // console.log("res :", res);
})();
// console.log('fun6', fun6)
// console.log("object", fun6.next());
// console.log("object", fun6.next());
// console.log("object", fun6.next());
// console.log("object", fun6.next());
async function* fun8() {
  let i = 0;
  while (true) {
    if (i >= 10) break;
    yield i;
    i++;
  }
}
let fun9 = fun8();
// console.log("fun9 :", fun9);
(async function() {
  let res = await fun9.next();
  // console.log("res :", res);
  res = await fun9.next();
  // console.log("res :", res);
  res = await fun9.next();
  // console.log("res :", res);
})();

(async function(params) {
  for await (const item of fun9) {
    // console.log('item', item)
  }
})();

let fun10 = async function(params) {
  return await 1;
  // return Promise.reject(new TypeError())
};
res = fun10();
console.log("res", res);
res
  .then(res => {
    console.log("res", res);
  })
  .catch(err => {
    console.log("err :", err);
  });

let fetchData = function() {
  return fetch(
    "http://rap2api.taobao.org/app/mock/165670/nantongsmt/payment/orderList.do"
  );
};

async function send(params) {
  let res1 = fetchData();
  console.log("res1", res1);
  let res2 = fetchData();
  console.log("res2", res2);
  let res3 = fetchData();
  console.log("res3", res3);
  let res4 = fetchData();
  console.log("res4", res4);
  Promise.all([res1, res2, res3, res4]).then(res => {
    console.log("res", res);
    res.map(async item => {
      console.log("item.json()", await item.json());
    });
  });
}

// send();
function sendAll() {
  let i = 0;
  let arr = [];
  while (i < 100) {
    arr.push(fetchData);
    //   fetchData().then(res=>{
    //     res.json().then(res=>{
    //       console.log('res', res)
    //     })
    //   });
    // fetch("http://127.0.0.1:5500/es6/async/index.html");
    i++;
  }
  return arr;
}
let arr = sendAll();
function sebdProcess(arr) {
  let newArr = [...arr];
  let slice = newArr.splice(0, 10);
  Promise.all(slice.map(res => res())).then(res => {
    res.map(item => {
      item.json().then(res => {
        console.log("res :", res);
      });
    });
    if (newArr.length) {
      // setTimeout(() => {
      sebdProcess(newArr);
      // }, 5000);
    }
  });
  console.log("slice :", slice);
  console.log("newArr :", newArr);
}
// sebdProcess(arr);

async function* gen(params) {
  yield 1;
  yield 2;
  return 3;
}

let ite = gen();
// (async function() {
//   // console.log("ite.next() :", await ite.next());
//   // console.log("ite.next() :", await ite.next());
//   // console.log("ite.next() :", await ite.next());
//   // for await (const item of ite) {
//   //   console.log('ite', item)
//   // }
// })();

fun = async function*() {
  yield* ite;
};
let fun11 = fun();
(async function() {
  console.log("fun11.next()",await fun11.next());
})();
console.log("fun :", fun11);
