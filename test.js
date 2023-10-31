function Person(name, age) {
  this.saja = name;
  this.horangi = age;
  this.greeting = function () {
    return `나는 ${this.saja}이고 ${this.horangi}입니다.`
  }
}

const person1 = new Person('kimhyun', 37)
// // console.log(new Person('yoonjunhyun', '28').greeting())
console.log(person1.greeting())

// const saseum = {
//   one : 1,
//   two : 2,
// }
// console.log(saseum.one)

