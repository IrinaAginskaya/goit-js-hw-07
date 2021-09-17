const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createFood = document.querySelector("#ingredients")
const elements = ingredients.map(element => {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  return listItem;
})
console.log(elements);

createFood.append(...elements)

