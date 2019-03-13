let a = [1,23,4,5,4,4,3,21,1,2]
let b = [1,2,3,4,3,2,1,2]
// 交集
let aSet = new Set(a)
let bSet = new Set(b)
let c = []
aSet.forEach(item=>{
  if(bSet.has(item)){
    c.push(item)
  }
})
console.log(c)
//并集
let d = [...new Set([...aSet,...bSet])]
console.log(d)