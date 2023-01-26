// Read list.txt

const { table } = require('console');
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');

const list = process.argv[2];
const list2 = process.argv[3];

let tableData = []
let tableData2 = []

try {
  const data = fs.readFileSync(list, 'utf8');
  tableData = data.split(" ").map(function(string) {
    return parseInt(string);
  });
} catch (error) {
  console.error(error.message);
}

try {
  const data2 = fs.readFileSync(list2, 'utf8');
  tableData2 = data2.split(" ").map(function(string) {
    return parseInt(string);
  });
} catch (error) {
  console.error(error.message);
}

// Class to count the number of comparisons

class Comparison {
  constructor (number) {
    this.number = number;
  }
}

console.log("")
console.log("ℹ️  - Algorithmes de tri: ")
console.log("")

// 1️⃣ Bubble Sort

bubbleSortComparison = new Comparison(0)
bubbleSortComparison2 = new Comparison(0)

let bubbleSortArray = tableData.slice();
let bubbleSortArray2 = tableData2.slice();

function bubbleSort(array, count) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      count.number ++;
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(bubbleSortArray, bubbleSortComparison)
bubbleSort(bubbleSortArray2, bubbleSortComparison2)

console.log("1️⃣  - Tri à bulle")
console.log("")
console.log(`Array 1: ${bubbleSortComparison.number} comparaisons`)
console.log(bubbleSortArray)
console.log("")
console.log(`Array 2: ${bubbleSortComparison2.number} comparaisons`)
console.log(bubbleSortArray2)
console.log("")

// 2️⃣ Insertion Sort

insertionSortComparison = new Comparison(0)
insertionSortComparison2 = new Comparison(0)

let insertionSortArray = tableData.slice();
let insertionSortArray2 = tableData2.slice();

function insertionSort(array, count) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
      count.number ++;
    }
    array[j + 1] = current
  }
}

insertionSort(insertionSortArray, insertionSortComparison)
insertionSort(insertionSortArray2, insertionSortComparison2)

console.log("2️⃣  - Tri par insertion")
console.log("")
console.log(`Array 1: ${insertionSortComparison.number} comparaisons`)
console.log(insertionSortArray)
console.log("")
console.log(`Array 2: ${insertionSortComparison2.number} comparaisons`)
console.log(insertionSortArray2)
console.log("")

// 3️⃣ Selection sort

selectionSortComparison = new Comparison(0)
selectionSortComparison2 = new Comparison(0)

let selectionSortArray = tableData.slice();
let selectionSortArray2 = tableData2.slice();

function selectionSort(array, count) {
  for (let i = 0; i < (array.length - 1); i++) {
    let jMin = i
    for (j = i + 1; j < array.length; j++) {
      count.number ++;
      if (array[j] < array[jMin]) {
        jMin = j;
      }
    }
    if (jMin != i) {
      let temp = array[i];
      array[i] = array[jMin];
      array[jMin] = temp;
    }
  }
}

selectionSort(selectionSortArray, selectionSortComparison)
selectionSort(selectionSortArray2, selectionSortComparison2)

console.log("3️⃣  - Tri par sélection")
console.log("")
console.log(`Array 1: ${selectionSortComparison.number} comparaisons`)
console.log(selectionSortArray)
console.log("")
console.log(`Array 2: ${selectionSortComparison2.number} comparaisons`)
console.log(selectionSortArray2)
console.log("")

// 4️⃣ Quick Sort

quickSortComparison = new Comparison(0)
quickSortComparison2 = new Comparison(0)

let quickSortArray = tableData.slice();
let quickSortArray2 = tableData2.slice();

function quickSort(array){
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

quickSort(quickSortArray, quickSortComparison)
quickSort(quickSortArray2, quickSortComparison2)

console.log("4️⃣  - Tri rapide")
console.log("")
console.log(`Array 1: ${quickSortComparison.number} comparaisons`)
console.log(quickSortArray)
console.log("")
console.log(`Array 2: ${quickSortComparison2.number} comparaisons`)
console.log(quickSortArray2)
console.log("")