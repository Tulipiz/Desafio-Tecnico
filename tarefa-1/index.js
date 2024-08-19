const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 30, isActive: false },
  { id: 3, name: "Charlie", age: 22, isActive: true },
  { id: 4, name: "Aghata", age: 22, isActive: true },
  { id: 5, name: "Tiago", age: 22, isActive: true },
  { id: 6, name: "Bernardo", age: 22, isActive: true },
  { id: 7, name: "Jose", age: 22, isActive: true },
];
users.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

let newArray = [];
users.forEach((user) => {
  if (user.isActive) {
    newArray.push({ id: user.id, name: user.name });
  }
});

console.log(newArray);
