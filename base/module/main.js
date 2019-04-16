// 📁 main.mjs
// import {repeat, shout} from './lib.mjs';
// console.log(repeat('hello'));
// // → 'hello hello'
// console.log(shout('Modules in action'));
// console.log(_)
// → 'MODULES IN ACTION!'
// (async () => {
//   const moduleSpecifier = './lib.mjs';
//   const {repeat, shout} = await import(moduleSpecifier);
//   repeat('hello');
//   // → 'hello hello'
//   shout('Dynamic import in action');
//   // → 'DYNAMIC IMPORT IN ACTION!'
// })();

let pro = import('./lib.mjs')
pro.then(res=>{
  let result = res.shout('tianbaolin')
  console.log(result)
})
