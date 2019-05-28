let a = {
  [Symbol.iterator]() {
    let i = 0,
      done = false;
    return {
      next() {
        if (i === 100) {
          done = true;
        }
        return { value: i++, done };
      }
    };
  }
};
b = a[Symbol.iterator]();
// console.log("b.next", b.next());
// console.log("b.next", b.next());
// console.log("b.next", b.next());
// console.log("b.next", b.next());
for (const item of a) {
  // console.log('item :', item);
}

a = [1, 2, 3, 4, 5];
b = {
  [Symbol.iterator]: Array.prototype[Symbol.iterator].bind(a)
};
for (const item of b) {
  // console.log('item :', item);
}
a.name = 0;
for (const item in a) {
  // console.log('item', item)
}
a = [1, 2, 3, 4];
for (const item of a) {
  // console.log('item', item)
}
b = a.keys();
for (const item of b) {
  // console.log('item', item)
}

function* gen(i) {
  let j = 0;
  while (j <= i) {
    let res = yield j;
    console.log("res", res);
    console.log("j", j);
    j++;
  }
}
const g = gen(20);
console.log("g.next()", g.next('a'));
console.log("g.next()", g.next('b'));
// console.log("g.next()", g.next());
// console.log("g.next()", g.next());
