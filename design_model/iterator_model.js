// 自定义迭代器
const iterator = (() => {
  let n = 0;
  return {
    next() {
      if (n < 10) {
        n += 1;
        return {
          value: n - 1,
          done: false,
        };
      }
      return {
        value: n,
        done: true,
      };
    },
  };
})();

console.log('iterator :', iterator);
console.log('iterator :', iterator.next());
console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());
// console.log('iterator :', iterator.next());

// 生成器函数
function* generator(n) {
  for (let i = 0; i < n; i += 1) {
    const y = yield i;
    console.log('y :', y);
  }
}
const gen = generator(5);
// for (let i of gem) {
//   console.log('i', i);
// }
console.log('object', gen.next(1));
console.log('object', gen.next(2));
// console.log('object', gen.next(3));
// console.log('object', gen.next(4));
// console.log('object', gen.next(5));
// console.log('object', gen.next(6));
