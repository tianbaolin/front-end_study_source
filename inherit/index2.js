function People(name,age){
  this.name = name;
  this.age = age;

  if(typeof this.say !== 'function'){
    this.say = function(){
      console.log('object :', 'hello');
    }
  }
}
let people = new People('tian baolin',27)
console.log('people', people)