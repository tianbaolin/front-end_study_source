// 从数组中查找位置
function indexOfAll(arr,value) {
  return arr.map((item,key)=>{
    return (item === value)?key:null
  }).filter(item=>item!==null)
}
// console.log(indexOfAll([1,2,3,4,3,4,5,2,4,3],4))

function init2DArr(row,col,value) {
  return Array.from({length:row}).map(()=>{
    return Array.from({length:col}).map(()=>value)
  })
}

/**
 * 初始化n维数组
 *
 * @param {String} value 数组填充值
 * @param {Array[Number]} dimensions 数组维度
 * @returns Array||String
 */
function initNDArr( value,...dimensions) {
  if(dimensions.length === 0){
    return value
  }
  return Array.from({
      length: dimensions[0]
    }).map(() => {
      let newDimensions = dimensions.slice(1)
    return initNDArr(value,...newDimensions)
  })
}
console.log(initNDArr(2,3, 4, 5))