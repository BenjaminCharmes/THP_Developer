const { default: test } = require("node:test");

const sbj1list1 = [10, 15, 3, 7];
const sbj1list2 = [1, 8, 10, 21];

const sbj2list1 = [3, 7, 8, 3, 6, 1];
const sbj2list2 = [1, 4, 5, 8];

console.log("")
console.log("⭐️ - ⭐️ - ⭐️ - ⭐️ - ⭐️")
console.log("")

// 1️⃣ - Exerice 1

console.log("1️⃣  - Exercice 1")
console.log("")

function firstExercice(array, k) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      if (array[i] + array[j] === k) {
        return true;
      }
    }    
  }
  return false;
}

console.log("Pour la liste 1: ")
console.log(firstExercice(sbj1list1, 17))
console.log("Pour la liste 2: ")
console.log(firstExercice(sbj1list2, 19))
console.log("")
console.log(" - - - - - ")
console.log("")

// 2️⃣  - Exerice 2

console.log("2️⃣  - Exercice 2")
console.log("")

function secondExercice(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let view = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        view = false
      }
    }
    if (view) {
      result ++;
    }  
  }
  return result
}

const nbAprtsbj2List1 = secondExercice(sbj2list1)
console.log(`Pour la liste 1: il y a ${nbAprtsbj2List1} appartement(s) avec une vue à l'ouest.`)
const nbAprtsbj2List2 = secondExercice(sbj2list2)
console.log(`Pour la liste 2: il y a ${nbAprtsbj2List2} appartement(s) avec une vue à l'ouest.`)
console.log("")
console.log(" - - - - - ")
console.log("")

// 3️⃣  - Exercice 3

console.log("3️⃣  - Exercice 3")
console.log("")

function thirdExerice(array, k) {
  let numIndex = {};
  let difference;
  for (let i = 0; i < array.length; i++) {
    difference = k - array[i];
    if (numIndex[difference] !== undefined) {
      return true;
    } else {
      numIndex[array[i]] = i;
    }
  }
  return false;
}

console.log("Pour la liste 1: ")
console.log(thirdExerice(sbj1list1, 17))
console.log("Pour la liste 2: ")
console.log(thirdExerice(sbj1list2, 19))
console.log("")
console.log(" - - - - - ")
console.log("")

// 4️⃣  - Exercice 4

console.log("4️⃣  - Exercice 4")
console.log("")

function fourthExercice(array, i = array.length - 1) {
  const arr = array.slice();
  if (arr.filter((e, j) => e > arr[i] && j > i).length > 0) {
    arr.splice(i, 1);
  }
  if (i === 0) {
    return arr.length;
  }
  return fourthExercice(arr, i - 1);
}

const nbAprtEx4List1 = fourthExercice(sbj2list1)
console.log(`Pour la liste 1: il y a ${nbAprtEx4List1} appartement(s) avec une vue à l'ouest.`)
const nbAprtEx4List2 = fourthExercice(sbj2list2)
console.log(`Pour la liste 2: il y a ${nbAprtEx4List2} appartement(s) avec une vue à l'ouest.`)
console.log("")
console.log(" - - - - - ")
console.log("")

// 5️⃣  - Exercice 5

console.log("5️⃣  - Exercice 5")
console.log("")

function fifthExercice(array, k) {
  if (array.filter((e) => array.includes(k - e)).length > 1) {
    return true
  } else {
    return false
  }
}

console.log("Pour la liste 1: ")
console.log(fifthExercice(sbj1list1, 17))
console.log("Pour la liste 2: ")
console.log(fifthExercice(sbj1list2, 19))
console.log("")
console.log(" - - - - - ")
console.log("")

// 6️⃣  - Exercice 6

console.log("6️⃣  - Exercice 6")
console.log("")

function sixthExercice(array) {
  let biggest = 0;
  let arr = array.slice();
  return arr.reverse().filter((a) => {
    if (a > biggest) {
      biggest = a;
      return true
    }
  }).length;
}

const nbAprtEx6List1 = sixthExercice(sbj2list1)
console.log(`Pour la liste 1: il y a ${nbAprtEx6List1} appartement(s) avec une vue à l'ouest.`)
const nbAprtEx6List2 = sixthExercice(sbj2list2)
console.log(`Pour la liste 2: il y a ${nbAprtEx6List2} appartement(s) avec une vue à l'ouest.`)
console.log("")
console.log("⭐️ - ⭐️ - ⭐️ - ⭐️ - ⭐️")
console.log("")
