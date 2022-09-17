const listCategories = document.querySelectorAll(".item");
console.log("Number of categories:", listCategories.length);

console.log("Category:", listCategories[0].firstElementChild.textContent);
console.log("Elements:", listCategories[0].lastElementChild.children.length);

console.log("Category:", listCategories[1].firstElementChild.textContent);
console.log("Elements:", listCategories[1].lastElementChild.children.length);

console.log("Category:", listCategories[2].firstElementChild.textContent);
console.log("Elements:", listCategories[2].lastElementChild.children.length);
