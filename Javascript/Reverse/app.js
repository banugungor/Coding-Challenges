//todo: 1. Question Reverse String

//*Write a function that takes an array of characters and reverses the letters in place.

//* Examples:

//* reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC

//* reverse("Happy") ➞ yppaH

//First: 
const arrReverse = ["H","a","p","p","y"];
arrReverse.reverse();
console.log(arrReverse);

//Second:
const happyArr = ['Happy']
happyArr.split()

//todo: 2. Question Reverse Words

//* Purpose of the this coding challenge is to write a code that given a string , returns reverse order of words.

//* ·Write a function that takes an array of characters and reverses the words order.

//* ·Please note that, single word should not be reversed!

//*Input : 'Clarusway' => Output : 'Clarusway'

//*Input : 'days. big make things Little' => Output : 'Little things make big days.'


let reversedStringSentence = 'days. big make things Little'
console.log(reversedStringSentence.split(' ').reverse().join(" "));
//-----------------------------------------------------
//-----------------------------------------------------
let reversedStringOpTwo = 'days. big make things Little'
let final=[]
final = reversedStringOpTwo.split(' ').reverse().join(" ")
console.log(final);


