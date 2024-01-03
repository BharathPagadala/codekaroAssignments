/*  DAY-1, Assignment-1 - Array Operations
    Description - Practice adding, removing, and updating values in an arrays */


let fruits = [];

//adding elements to the array
fruits.push("apple", "banana", "orange");

//removing first element from the array using pre-defined function called "shift()" in arrays
fruits.shift();

//adding element to end of the array
fruits.push("grape");

//updating second element
fruits.splice(1, 1, "pear");
console.log(fruits);
