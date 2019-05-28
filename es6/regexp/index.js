let a = 'tianbaolin'
console.log(a.search(/a/g))
console.log(a.match(/a/))
console.log(a.replace(/a/g,'A'))
console.log(a.split(/a|b/))
console.log(/a/.test(a))
let b = /a/g
console.log(b.exec(a))
console.log(b.exec(a))
console.log(b.exec(a))


