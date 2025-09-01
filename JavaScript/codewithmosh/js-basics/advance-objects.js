// Factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(2); // {radius: 1}
const another = new Circle(10);



// let person = { name: "Arceus" };

// for (let key in person) console.log(key);
// console.log(Object.keys(person));
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// console.log(descriptor);

// Object.defineProperty(person, "name", {
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });
// delete person.name;

// console.log(person);
