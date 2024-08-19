const array1 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const array2 = [
  { id: 1, age: 26, email: "alice@example.com" },
  { id: 3, name: "Charlie", age: 22 },
];

function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  arr1.forEach((item) => {
    mergedArray[item.id] = item;
  });
  arr2.forEach((item) => {
    mergedArray[item.id] = item;
  });

  mergedArray = Object.values(mergedArray);
  return mergedArray;
}

console.log(mergeArrays(array1, array2));
