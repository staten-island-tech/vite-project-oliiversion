import { menu } from "";
const d = new Date();
var day = "";

switch (d.getDay()) {
  case 0:
    day = "monday";
    break;
}

const thingsDiv = document.querySelector("#things");
display(things);

document.querySelector("#all").addEventListener("click", function () {
  thingsDiv.innerHTML = "";
  display(things);
});
document.querySelector(specificthing).addEventListener("click", function () {
  thingsDiv.innerHTML = "";
  const filtered = things.filter(
    (item) => item.specificthing === "specificthing"
  );
  display(filtered);
});
document
  .querySelector("#specific2thing")
  .addEventListener("click", function () {
    thingsDiv.innerHTML = "";
    const filtered = things.filter(
      (item) => item.specific2thing === "specific2thing"
    );
    display(filtered);
  });
document
  .querySelector("#specific3thing")
  .addEventListener("click", function () {
    thingsDiv.innerHTML = "";
    const filtered = things.filter((item) => item.specific3thing === "none");
    display(filtered);
  });

document.querySelector("#theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

function display(array) {
  console.log(day);
  const withSales = array.map(sale);
  withSales.forEach((item) => {
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-object">
                <h2>${item.name}</h2>
                <img class="menu-image" src="${item.image}">
                <p class="menu-object-price">$${item.price}</p>
                <p class="menu-object-text">${item.description}</p>
            </div>`
    );
  });
}

function sale(item) {
  if (item.sales.includes(day)) item.price = item.price / 2;
  return item;
}
