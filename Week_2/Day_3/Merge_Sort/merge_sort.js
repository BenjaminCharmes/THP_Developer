// Read list.txt

const { table } = require('console');
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');

const list = process.argv[2];

let tableData = []

try {
  const data = fs.readFileSync(list, 'utf8');
  tableData = data.split(" ").map(function(string) {
    return parseInt(string);
  });
} catch (error) {
  console.error(`${error}`);
}

console.log("")
console.log("ℹ️  - Algorithmes de tri: ")
console.log("")

// 1️⃣ Merge Sort

let mergeSortArray = tableData.slice();

let count = 0;

function merge(left, right) {
  let arr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      count++;
      arr.push(right.splice(0, 1)[0]);
    } else {
      count++;
      arr.push(left.splice(0, 1)[0]);
    }
  }
  return [...arr, ...left, ...right];
};

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const left = mergeSort(array.slice(0, array.length / 2));
  const right = mergeSort(array.slice(array.length / 2));
  return merge(left, right);
};

mergeSort(mergeSortArray)

console.log("1️⃣  - Tri à fusion")
console.log("")
console.log(`Array 1: ${count} comparaisons`)
console.log(mergeSort(mergeSortArray))
console.log("")
