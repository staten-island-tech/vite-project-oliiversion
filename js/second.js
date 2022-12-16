const foodList = document.getElementById("food-list");

const foods = [
  {
    name: "Apple",
    image: "https://via.placeholder.com/50x50?text=Apple",
    price: "1.31 per pound",
  },
  {
    name: "Banana",
    image: "https://via.placeholder.com/50x50?text=Banana",
    price: 0.68,
  },
  {
    name: "Orange",
    image: "https://via.placeholder.com/50x50?text=Orange",
    price: "1.58 per pound",
  },
];

for (let i = 0; i < foods.length; i++) {
  const food = foods[i];
  const li = document.createElement("li");
  li.classList.add("food-item");

  const img = document.createElement("img");
  img.src = food.image;

  const name = document.createElement("span");
  name.textContent = food.name;

  li.appendChild(img);
  li.appendChild(name);

  foodList.appendChild(li);
}
