// Performing a task
function greet(name, age) { // Parameter
    console.log('Hello ' + name);
    console.log('You are ' + age + ' years old. ');
}

// Calculating a value
function square(number) {
    // One way
    // let times = number * number;
    // console.log('square of ' + number + ' is ' + times);

    // 2nd way
    return number * number;
}

greet('Noman', 19); // Arguments are value supplied to parameter / variable

// One way 
// square(2);
let number = square(2); // Now this returns a value so well save that value into a variable
console.log(number); 




























// Primitive types
// let name = 'Noman'; // String literal
// let age = 19; // Number literal
// let isStudying = true; // Boolean literal
// let firstName; // Undefined
// let lastName = null; // (To clear the value of a variable)




// // Object literal (have keys / properties in it,--
// // -- like we have here name and age keys)
// let person = {
    //     name: 'Noman',
    //     age: 19
    // }; 
    
// // Dot Notation
// person.name = 'Alex';

// // Bracket Notation (usually used when we don't know--  
// // -- what user will enter till end time)
// person['name'] = 'Arceus';

// console.log(person.name);





// // Arrays - list of objects
// let selectedColor = ['red', 'blue', 1]; // Array literal
// selectedColor[3] = 2;
// console.log(selectedColor.length);

