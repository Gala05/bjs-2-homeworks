"use strict";
let arr1 = [];
let arr2 = [];
function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    } else {
      return false;
    }
  }
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter((filt) => filt.gender === gender).map(year => year.age).reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      debugger;
      return acc / arr.length;
    }
    return acc;
  }, 0);  
  return result;
}