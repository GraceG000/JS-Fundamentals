#!/usr/bin/node

const arr = ["C is fun", "Python is cool", "JavaScript is amazing"];
let result = "";

for (let i = 0; i < arr.length; i++) {
  result += arr[i];
  if (i < arr.length - 1) result += "\n";
}

console.log(result);
