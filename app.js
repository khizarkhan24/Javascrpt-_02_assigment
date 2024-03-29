
// Question 1

// // Declare and initialize an empty multidimensional array
// let emptyMultiArray = [[]];

// // Declare and initialize a multidimensional array representing the given matrix
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// console.log("Empty Multidimensional Array:", emptyMultiArray);
// console.log("Matrix:", matrix);



// Question 3

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// Question 4

// let number = prompt("Enter a number to show its multiplication table:");
// let length = prompt("Enter length multiplication table:");

// if (isNaN(number) || isNaN(length)) {
//     console.log("Please enter valid numbers.");
// } else {
//     console.log(`Multiplication Table of ${number} up to ${length}:`);
//     for (let i = 1; i <= length; i++) {
//         console.log(`${number} * ${i} = ${number * i}`);
//     }
// }

// Question 5

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log("Element at index", i, "is", fruits[i]);
// }

// Question 6

// // Function to generate different series
// function generateSeries() {
//     // Counting series
//     let counting = Array.from({length: 16}, (_, i) => i);
    
//     // Reverse counting series
//     let reverseCounting = [...counting].reverse();
    
//     // Even numbers series
//     let even = counting.filter(num => num % 2 === 0);
    
//     // Odd numbers series
//     let odd = counting.filter(num => num % 2 !== 0);
    
//     // Series of multiples of 2k 
//     let twoKSeries = Array.from({length: 10}, (_, i) => (i+1)*2 + 'k');
    
//     console.log('Counting:', counting.join(', '));
//     console.log('Reverse Counting:', reverseCounting.join(', '));
//     console.log('Even:', even.join(', '));
//     console.log('Odd:', odd.join(', '));
//     console.log('Series: ', twoKSeries.join(', '));
// }




