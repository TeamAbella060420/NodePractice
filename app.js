// var people = ["Kenneth", "Alena", "Andrew", "Alex", "June", "Treasure"];
// var person = people[3];

// console.log(person)
// var janet;
// janet.prototype = Person("Janet", 18);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }



// console.log(janet)

// var numbers = [5, 2, 18, 35];
// for (var x = 0; x < numbers.length; x++) {
//     console.log(numbers [x] * 5)
// }

// var tree = "Pine";
// var season = "winter";

// function treeTalk(t,s) {
//     var tree = t;
//     season = s;
//     console.log("I love" + tree + "trees in" + season);
// }

// treeTalk(tree,season);
// treeTalk("Palm", "summer");
// treeTalk(tree,season);

// var result = 0;
// var result2 = 0;

// function multiply(num1, num2) {
//     result = num1 * num2;
//     return result;
// }

// result = multiply(2,20);
// result2 = multiply(2,25);

// console.log(result);

// person[age]

    // function Cow() {
    //     this.note = "Moooo";
    // }
    // Cow.prototype.makeNoise = function() {
    //     console.log(this.noise);
    // }

//     var hero = {
//         secret_identity: "Starman",
//         powers: [
//             "flight",
//             "x-ray vision",
//             "bulletproof",
//         ]
//     };

// hero[powers]

function getName(first_name, last_name, shorten) {
    var output = first_name + " ";
    if (shorten) {
        output += last_name[0] + ".";
    }
    else {
        output += last_name;
    }
    return output;
}

var tracy = getName("Tracy","Thomas",false);
var jim = getName("Jim","Simpson",true);

console.log(tracy)