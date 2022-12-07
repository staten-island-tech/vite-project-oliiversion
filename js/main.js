import { menu } from "";
const d = new Date();
var day = "";

switch (d.getDay()) {
  case 0:
    day = "monday";
    break;
}

const menuDiv = document.querySelector("#menu");
display(menu);

document.querySelector("#all").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  display(menu);
});
document.querySelector("#beef").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.meat === "beef");
  display(filtered);
});
document.querySelector("#pescatarian").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.meat === "fish");
  display(filtered);
});
document.querySelector("#vegetarian").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.meat === "none");
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
