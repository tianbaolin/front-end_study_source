let  obj = require('./obj') 
let f = require('./base2.js')
obj.count()
f.count()
obj.count()

// console.log(obj.sum)
console.log(f.sum)
console.log(obj === f)