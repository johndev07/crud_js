let addButton = document.querySelector(".input-container > .add");
let InputText = document.querySelector(".input-container > input");
let InputContainer = document.querySelector(".input-container");
let Ingredients_list = document.querySelector(".ingredients_list");
let errorContainer = document.querySelector(".error");

function update(id) {
  let listId = document.querySelector(`#${id}`);
  console.log(listId);
  let updateButton = document.querySelector(".input-container > .update");
  listId.textContent = InputText.value;
  addButton.style.display = "block";
  InputText.value = "";
  updateButton.remove();
}

function editIngredients(id) {
  let listId = document.querySelector(`#${id}`);
  InputText.value = listId.textContent;
  let updateButton = `<button class="add update"><ion-icon name="arrow-up-circle-outline"></ion-icon></button>`;
  InputContainer.insertAdjacentHTML("beforeend", updateButton);
  let updateButtonselect = document.querySelector(".update");

  updateButtonselect.addEventListener("click", () => update(id));
  addButton.style.display = "none";
}

function deleteIngredients(id) {
  let listId = document.querySelector(`#${id}`);
  listId.remove();
}

let id = 1;
addButton.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = InputText.value;
  errorContainer.textContent = `your Ingredient ${InputText.value} has been added succesfully`;
  errorContainer.style.display = "block";
  setTimeout(() => {
    errorContainer.style.display = "none";
  }, 2000);
  li.setAttribute("id", `id${id}`);
  let editIcon = `<div class="icons"><span class="edit"><ion-icon name="create-outline"></ion-icon></span><span class="delete"><ion-icon name="trash-outline"></ion-icon></span></div>`;

  li.insertAdjacentHTML("beforeend", editIcon);
  let span = li.querySelectorAll(".icons > span");

  span[0].addEventListener("click", (e) =>
    editIngredients(li.getAttribute("id"))
  );
  span[1].addEventListener("click", () =>
    deleteIngredients(li.getAttribute("id"))
  );
  Ingredients_list.append(li);
  InputText.value = "";
  id++;
});
