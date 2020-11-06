import backgroundImage from '../images/menu.jpeg';

export default function menuContent(content) {

  const background = document.createElement('img');
  background.src = backgroundImage;
  background.classList.add("backgroundImage");
  background.id = 'menu';
  content.appendChild(background);

  const snacks = document.createElement('h2');
  snacks.textContent = "Snacks";
  snacks.classList.add('menuLeft');
  content.appendChild(snacks);

  const snackChoice1 = document.createElement('p');
  snackChoice1.textContent = "Herring   --   $3.00";
  snackChoice1.classList.add('menuLeft');
  snackChoice1.classList.add('menuChoice1');
  content.appendChild(snackChoice1);

  const snackChoice2 = document.createElement('p');
  snackChoice2.textContent = "Cheeses   --   $2.50";
  snackChoice2.classList.add('menuLeft');
  snackChoice2.classList.add('menuChoice2');
  content.appendChild(snackChoice2);

  const snackChoice3 = document.createElement('p');
  snackChoice3.textContent = "Meats   --   $3.50";
  snackChoice3.classList.add('menuLeft');
  snackChoice3.classList.add('menuChoice3');
  content.appendChild(snackChoice3);

  const hotDishes = document.createElement('h2');
  hotDishes.textContent = "Hot Dishes";
  hotDishes.classList.add('menuLeft');
  hotDishes.classList.add('bottom');
  content.appendChild(hotDishes);

  const hotDishes1 = document.createElement('p');
  hotDishes1.textContent = "Cepelinai   --   $2.50";
  hotDishes1.classList.add('menuLeft');
  hotDishes1.classList.add('menuChoice4');
  content.appendChild(hotDishes1);

  const hotDishes2 = document.createElement('p');
  hotDishes2.textContent = "Koldunai   --   $3.00";
  hotDishes2.classList.add('menuLeft');
  hotDishes2.classList.add('menuChoice5');
  content.appendChild(hotDishes2);

  const hotDishes3 = document.createElement('p');
  hotDishes3.textContent = "Balandeliai   --   $3.50";
  hotDishes3.classList.add('menuLeft');
  hotDishes3.classList.add('menuChoice6');
  content.appendChild(hotDishes3);

  const drinks = document.createElement('h2');
  drinks.textContent = "Drinks";
  drinks.classList.add('menuRight');
  content.appendChild(drinks);

  const drinkChoice1 = document.createElement('p');
  drinkChoice1.textContent = "Gira   --   $0.50";
  drinkChoice1.classList.add('menuRight');
  drinkChoice1.classList.add('menuChoice1');
  content.appendChild(drinkChoice1);

  const drinkChoice2 = document.createElement('p');
  drinkChoice2.textContent = "Coffee   --   $1.00";
  drinkChoice2.classList.add('menuRight');
  drinkChoice2.classList.add('menuChoice2');
  content.appendChild(drinkChoice2);

  const drinkChoice3 = document.createElement('p');
  drinkChoice3.textContent = "Tea   --   $0.75";
  drinkChoice3.classList.add('menuRight');
  drinkChoice3.classList.add('menuChoice3');
  content.appendChild(drinkChoice3);

  const desserts = document.createElement('h2');
  desserts.textContent = "Desserts";
  desserts.classList.add('menuRight');
  desserts.classList.add('bottom');
  content.appendChild(desserts);

  const dessertChoice1 = document.createElement('p');
  dessertChoice1.textContent = "Tiramisu   --   $1.50";
  dessertChoice1.classList.add('menuRight');
  dessertChoice1.classList.add('menuChoice4');
  content.appendChild(dessertChoice1);

  const dessertChoice2 = document.createElement('p');
  dessertChoice2.textContent = "Ledai   --   $1.50";
  dessertChoice2.classList.add('menuRight');
  dessertChoice2.classList.add('menuChoice5');
  content.appendChild(dessertChoice2);

  const dessertChoice3 = document.createElement('p');
  dessertChoice3.textContent = "Pyragas   --   $2.00";
  dessertChoice3.classList.add('menuRight');
  dessertChoice3.classList.add('menuChoice6');
  content.appendChild(dessertChoice3);




  content.classList.add('menu');

  return content;
}