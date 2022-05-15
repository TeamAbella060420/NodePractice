// var people = ["Kenneth", "Alena", "Andrew", "Alex", "June", "Treasure"];
// var person = people[3];

// console.log(person)
var janet;
janet.prototype = Person("Janet", 18);

function Person(name, age) {
    this.name = name;
    this.age = age;
}



console.log(janet)