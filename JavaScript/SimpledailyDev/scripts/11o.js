// const words = ['hello', 'world', 'search', 'good']

// function findIndex(array, word) {
//   for (let i = 0; i < 5; i++) {
//     if (array[i] === word) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findIndex(['hello', 'world', 'good' , 'search'], 'world'));
// console.log(findIndex(['not', 'found'], 'good'));
// console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
// console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));



// const result = [];
// let count = 0;
// function removeEgg(foods) {
//   for (let i = 0; i < foods.length; i++) {
//     if (count < 2) {
//       if (foods[i] === 'egg') {
//         count++;
//         continue;
//       } 
//     } 
//     result.push(foods[i]);
//   }
//   return result;
// }
// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

/* 11u. */
// const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];

// function removeEgg(foods) {
//   let result = [];
//   let eggsRemoved = 0;
//   let reversedFoods = foods.slice();
//   console.log(reversedFoods);
//   reversedFoods = reversedFoods.reverse();
//   console.log(reversedFoods);
//   for (let i = 0; i < foods.length; i++) {
    
//     if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
//       eggsRemoved++;
//       continue;
//     }
//     result.push(reversedFoods[i]);
    
//   }
//   // console.log(foods);
//   // console.log(result);
//   return result.reverse();
// }

// console.log(removeEgg(foods));
// console.log(foods);

// let array = ['ho', 'ah', 'sd'];
// console.log(array);
// const reversedArray = array.reverse();
// console.log(reversedArray);
// reversedArray.push('oiki');
// console.log(reversedArray);


/* 11v. */


// for (let i = 1; i < 21; i++) {
//   let name = i;
//   if (i % 3 === 0 && i % 5 === 0) {
//     name = 'FizzBuzz';
//     //conosle.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     name = 'Fizz';
//     //conosle.log('Fizz');
//   } else if (i % 5 === 0) {
//     name = 'Buzz';
//     //conosle.log('Buzz');
//   } // else {
//   // conosle.log(i);
//   //}
//   console.log(name);
  
// }



/* 11w. */

function findIndex(array, word) {
    for (let i = 0; i < 5; i++) {
      if (array[i] === word) {
        return i;
      }
    }  
    return -1;
  }
  
  // console.log(findIndex(['hello', 'world', 'good' , 'search'], 'world'));
  // console.log(findIndex(['not', 'found'], 'good'));
  // console.log(findIndex(['green', 'red', 'blue', 'red'], 'blue'));
  // console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));
  
  function unqiue(array) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
      const word = array[i];
      if (findIndex(result, word) === -1) {
        result.push(word);
      } 
    }
    return result;
  }
  console.log(unqiue(['green', 'red', 'blue', 'red']));
  console.log(unqiue(['green', 'red', 'green' ,'red']));


  // const array = ['green', 'red', 'blue', 'red'];
  // array.slice(0, 1);
  // console.log(array);




