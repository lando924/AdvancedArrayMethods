//forEach

// Create an array of names and use forEach to log each name to the console.
// Given an array of numbers, use forEach to double each number and log the result.
// Use forEach to capitalize each word in an array of strings.

const names = ['Derek', 'Chad', 'Michael', 'Brad', 'Pete']

names.forEach(function(val) {
    console.log(val)
})

const numbers = [1,2,3,4,5,6];

numbers.forEach(function(val) {
   console.log(val * 2);
});

const sports = ['basketball','baseball','soccer','football','hockey','volleyball'];

sports.forEach(function(str,index,array) {
    array[index] = str.charAt(0).toUpperCase() + str.slice(1);
});

console.log(sports);

// map

// Convert an array of Celsius temperatures into an array of Fahrenheit temperatures using map.
const temp = [0, 3, 20, 22, 13];

temp.map(function(val) {
    console.log(val * 1.8 + 32);
})


// Given an array of strings, create a new array where each string has an exclamation mark added to the end using map.
const girls = ['Julia', 'Courtney', 'Amanda', 'Katy', 'Lisa'];

const excitedGirls = girls.map(function(val) {
    return val + '!';
});

console.log(excitedGirls);


// Use map to square each number in an array of numbers.
const squareNums = numbers.map(function(val) {
    return val ** 2;
})

console.log(squareNums);


// filter

// Filter an array of numbers to get only even numbers.
const onlyEvens =numbers.filter(function(val) {
    return val % 2 === 0;
})

console.log(onlyEvens);

// Given an array of strings, filter out strings that have fewer than 5 characters.

const fiveOrMOre = sports.filter(function(val) {
    return val.length > 5;
})

console.log(fiveOrMOre);

// Filter an array of objects to get objects where a specific property meets a certain condition.
const dogs = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

const filtDogs = dogs.filter(function(val,index,arr) {
    return val.name.includes('a')
});

console.log(filtDogs);


// some

// Check if an array of numbers contains at least one number greater than 10 using some.
const greaterTen = numbers.some(function(val) {
    return val > 10;
});

console.log(greaterTen);
// Determine if an array of strings contains at least one string with more than 10 characters.
const strTen = sports.some(function(val) {
    return val.length > 10;
});

console.log(strTen);

// Use some to check if there are any true values in an array of boolean values.


// every

// Check if all numbers in an array are positive using every.
// Determine if all strings in an array start with the letter 'A'.
// Use every to check if all elements in an array are greater than 0.



// find

// Find the first even number in an array of numbers using find.
// Given an array of strings, find the first string that starts with the letter 'B'.
// Use find to find the first object in an array of objects with a specific property value.


// findIndex

// Find the index of the first negative number in an array of numbers using findIndex.
// Given an array of strings, find the index of the first string that contains the letter 'o'.
// Use findIndex to find the index of the first object in an array of objects that meets a specific condition.


// reduce

// Calculate the sum of numbers in an array using reduce.
// Concatenate all strings in an array into a single string using reduce.
// Use reduce to find the maximum number in an array of numbers.