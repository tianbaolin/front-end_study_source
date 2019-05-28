import {hello} from './index.js'
export  let count = 0;

export function add(...params) {
  return params.reduce((res, cur) => {
    count++;
    return res + cur;
  }, 0);
}

export function multiply(...params) {
  return params.reduce((res, cur) => {
    return res * cur;
  }, 1);
}
console.log('object', hello())
console.log("add.js", this);
