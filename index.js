function Capsule(id, password, email) {
  this.id = id;
  this.password = password;
  this.email = email;
  this.getTotalDataString = function () {
    return `ID: ${this.id}, Password: ${this.password}, Email: ${this.email}`;
  }
}

const capsule = new Capsule('kongukjae', '305', 'kongukjae@example.com');
console.log(capsule.getTotalDataString());






// const capsule = {
//   id: "kongukjae",
//   password: "305",
//   email: "kongukjae@example.com",
//   getTotalDataString: function () {
//     return `ID: ${this.id}, Password: ${this.password}, Email: ${this.email}`;
//   }
// }




// console.log(capsule.getTotalDataString);