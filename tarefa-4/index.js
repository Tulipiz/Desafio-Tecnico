const items = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
  { name: "broccoli", category: "vegetable" },
];
const categorias = items.reduce((categoria, item) => {
  const key = item.category;
  if (!categoria[key]) {
    categoria[key] = [];
  }
  categoria[key].push(item);
  return categoria;
}, {});
console.log(categorias);
