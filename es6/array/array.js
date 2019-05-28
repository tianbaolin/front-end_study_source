Number.prototype[Symbol.iterator] = function* () {
  for(let i=0;i<=5;i++){
    yield i;
  }
}
console.log([...7])
let a = 7
b = a[Symbol.iterator]();
console.log(b.next());
console.log([...b]);
