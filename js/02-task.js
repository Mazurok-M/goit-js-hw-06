const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navIngredients = document.querySelector("ul#ingredients");

const makeNavIngredients = (listIngredients) => {
  return listIngredients.map((ingredient) => {
    const tegLi = document.createElement("li");
    tegLi.textContent = ingredient;
    tegLi.classList.add("item");

    return tegLi;
  });
};

const elements = makeNavIngredients(ingredients);
navIngredients.append(...elements);
