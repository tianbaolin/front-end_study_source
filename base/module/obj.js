function Fun (){
  this.sum = 0;
  this.count=function(){
    this.sum++
  }
}
let a = new Fun()
console.log('321')
module.exports = a