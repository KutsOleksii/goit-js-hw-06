const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liItems = ingredients.map((item) => {
  let element = document.createElement("li");
  element.textContent = item;
  element.class = "item";
  return element;
});

document.querySelector('ul#ingredients').append(...liItems);
