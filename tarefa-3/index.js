const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const ocurrences = {};

function countOccurrences() {
  while (fruits.length > 0) {
    const fruta = fruits[0].valueOf();
    let index = fruta.indexOf(fruta);
    let count = 0;

    while (index != -1) {
      count++;
      fruits.splice(index, 1);
      index = fruits.indexOf(fruta, index + 1);
    }

    ocurrences[fruta] = count;
  }
  return ocurrences;
}

console.log(countOccurrences());
