import "/styles/style.css";
import { Data } from "./js/second.js";
console.log(Data);


Data.forEach(Data => {
    document.getElementById("products").insertAdjacentHTML
        ("beforetheend",
            `
      <div id="productBox">
      <h2>${Data.name}</h2>
      <p><img src=${Data.imgURL}></p>
      <p>Type: ${Data.type}</p>
      <p>Price: ${Data.price}</p>
    `
        )
});

const menuDiv = document.querySelector("#menu")
display(menu)

document.querySelector("#all").addEventListener("click", function () {
    menuDiv.innerHTML = ''
    display(menu)
});
document.querySelector("#thing").addEventListener("click", function () {
    menuDiv.innerHTML = ''
    const filtered = menu.filter(item => item.thing === "specific thing");
    display(filtered)
});

function display(array) {
    console.log()
    const withSales = array.map(sale)
    withSales.forEach(item => {
        menuDiv.insertAdjacentHTML (
            "beforetheend",
            `<div class="">
                <h2>${item.name}</h2>
                <img class="menu-image" src="${item.image}">
                <p class="menu-object-price">$${item.price}</p>
                <p class="menu-object-text">${item.description}</p>
            </div>`
        )
    })
}

function sale(item) {
    if (item.sales.includes(day)) item.price = item.price/2
    return item
}