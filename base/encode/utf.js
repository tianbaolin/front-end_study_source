const chalk = require('chalk')
let a = '𠮷'
let code0 = a.charCodeAt(0)
let code1 = a.charCodeAt(1)
console.log(code0.toString(16))
console.log(code1.toString(16))
console.log('\ud842\udfb7')
let code2 = a.codePointAt(0)
let code3 = a.codePointAt(1)

// 获取字符utf-8编码
console.log(code2.toString(16))
console.log(code3.toString(16))

console.log(code2.toString(16))
console.log('\u{20bb7}')
console.log(a.length)
console.log('\z')
// 八进制
console.log('\172')
//16进制
console.log('\x7A')
console.log('\u007A')
console.log('\u{7A}')
console.log('\u007A\u0000')
console.log('\65')
console.log('z'.charCodeAt(0))
console.log('\'')
console.log('\"')
a = '𠮷𠮷𠮷'
// a = '中中中'
// console.log(a.length)
for(let [item,index] of a){
  // console.log(item,index)
}
// console.log('cvdsv%c4234','color:red')
// console.log('\033[42;30m DONE \033[40;32m Compiled successfully in 19987ms\033[0m')
console.log(chalk.red('\u0041'))
// console.log('中'.charCodeAt(0).toString(16))
// console.log('中 :', '\u4e00');
console.log(a.length)
// console.log(\U+20013)
console.log(String.fromCharCode(0x4e00))
console.log(String.fromCharCode(0x20bb7))
console.log(String.fromCodePoint(0x4e00))
console.log(String.fromCodePoint(0x20bb7))
// console.log(a.split('').map(item=>{
//   return item.charCodeAt(0).toString(16)
// }))
for (let item of a) {
  console.log(item)
}
console.log(a[0],a[1])
a = '𠮷'
console.log(a.codePointAt(0).toString(16))
console.log(a.charCodeAt(0).toString(16),a.charCodeAt(1).toString(16))
console.log('\u{20bb7}' , '\ud842\udfb7')
console.log('\u{20bb7}'.normalize())