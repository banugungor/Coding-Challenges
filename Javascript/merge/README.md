<h1>Merge Arrays</h1>
// Merge Arrays
// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

// For example:

// A = [12, 14, 16];

// B = [11, 13, 17];

// expectedOutput = [11, 12, 13, 14, 16, 17];


<b>1. Using the traditional for loop</b>

let A = [12, 14, 16];

let B = [11, 13, 17];

const merge = (A, B) => {

  for (let i = 0; i < B.length; i++) {
  
    A.push(B[i]);
  }
  
  return A;

};

console.log(merge(A, B));

console.log(A); //changes

console.log(B); //doesn't change

<b>2. Using the Spread operator (...)</b>

const first = [12, 14, 16];

const second = [11, 13, 17];

const merged = [...first, ...second];

console.log(merged);

console.log(first); //doesn't change

console.log(second); //doesn't change

<b>3. Using the concat() array method</b>

const arr1 = [12, 14, 16];

const arr2 = [11, 13, 17];

const mergedArr = arr1.concat(arr2);

console.log(mergedArr);

console.log(arr1);

console.log(arr2);

//Like we used the spread operator, the concat method will not change the input arrays. Rather, it creates a new array merging all the input arrays and returns it. So, a better way of writing the concat() method to merge arrays is;

const mergedArrSec = [].concat(arr1, arr2);

console.log(mergedArrSec);

<b>4. Using the push() array method</b>

const Animals = ["cat", "chicken", "fish", "ladybug"];

const blackAnimals = ["wolf", "black panthers", "ratsnake", "king penguen"];

const mergeAnimals = Animals.push(...blackAnimals);

console.log(Animals);

console.log(blackAnimals);

console.log(mergeAnimals);

<b>5. Using the reduce() array method</b>

const arrOne = [7, 9, 11, 13, 17];

const arrTwo = [21, 27, 29];

const mergedArrs = arrTwo.reduce((arr, item) => {
 
 arr.push(item);
 
 return arr;

}, arrOne);

console.log(mergedArrs);
