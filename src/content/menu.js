import backgroundImage from '../images/menu.jpeg';
import selectMenu from '../elements/select.js';

export default function menuContent() {

  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };

  const background = document.createElement('img');
  background.src = backgroundImage;
  background.id = "backgroundImage";
  content.appendChild(background);

  const snacks = document.createElement('h2');
  snacks.textContent = "Snacks";
  snacks.classList.add('menuLeft');
  content.appendChild(snacks);

  const hotDishes = document.createElement('h2');
  hotDishes.textContent = "Hot Dishes";
  hotDishes.classList.add('menuLeft');
  hotDishes.classList.add('bottom');
  content.appendChild(hotDishes);

  const drinks = document.createElement('h2');
  drinks.textContent = "Drinks";
  drinks.classList.add('menuRight');
  content.appendChild(drinks);

  const desserts = document.createElement('h2');
  desserts.textContent = "Desserts";
  desserts.classList.add('menuRight');
  desserts.classList.add('bottom');
  content.appendChild(desserts);



  content.classList.remove('home');
  content.classList.remove('contact');
  content.classList.add('menu');

  return content;
}