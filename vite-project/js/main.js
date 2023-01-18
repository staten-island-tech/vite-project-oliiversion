import "../styles/style.css";
import AOS from "aos";
import { foodoptions } from "./food";
import { DOMSelectors } from "./dom";
document.querySelector("#titlecard").innerHTML = `
<h1 class=title>Shopping!</h1>`;

foodoptions.forEach((el) => {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
      <div class="inner">
      <h2>${el.name}</h2>
      <img class="ye" src="${el.img}" alt="add image">
      <h2 class="cals">Calories: ${el.calories}</h2>
      </div>`
  );
});

const remove = function () {
  document.querySelectorAll(".inner").forEach((e) => e.remove());
};

const options = {
  getAll: function () {
    document.getElementById("listall").addEventListener("click", function () {
      remove();
      foodoptions.forEach((el) => {
        console.log(el.name);
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
      <div class="inner">
      <h2>${el.name}</h2>
      <img class="ye" src="${el.img}" alt="add image">        
      <h2 class=cals>Calories: ${el.calories}</h2>
      </div>`
        );
      });
    });
  },

  getMeat: function () {
    document.getElementById("meat").addEventListener("click", function () {
      remove();
      foodoptions
        .filter((el) => el.part.includes("meat"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
        <div class="inner">
        <h2>${el.name}</h2>
        <img class="ye" src="${el.img}" alt="add image">        
        <h2 class=cals>Calories: ${el.calories}</h2>
        </div>`
          );
        });
    });
  },

  getSnacks: function () {
    document.getElementById("snacks").addEventListener("click", function () {
      remove();
      foodoptions
        .filter((el) => el.part.includes("snacks"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="inner">
          <h2>${el.name}</h2>
          <img class="ye" src="${el.img}" alt="add image">        
          <h2 class=cals>Calories: ${el.calories}</h2>
          </div>`
          );
        });
    });
  },

  getVegetarian: function () {
    document
      .getElementById("vegetarian")
      .addEventListener("click", function () {
        remove();
        foodoptions
          .filter((el) => el.vegetarian.includes("yes"))
          .forEach((el) => {
            console.log(el.name);
            DOMSelectors.box.insertAdjacentHTML(
              "beforeend",
              `
          <div class="inner">
          <h2>${el.name}</h2>
          <img class="abby" src="${el.img}" alt="add image">        
          <h2 class=cals>Calories: ${el.calories}</h2>
          </div>`
            );
          });
      });
  },
};
options.getAll();
options.getMeat();
options.getSnacks();
options.getVegetarian();
