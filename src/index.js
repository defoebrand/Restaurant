import createButton from './elements/buttons.js';
import selectMenu from './elements/select.js';

const body = document.querySelector('body');
body.appendChild(createButton("home"));
body.appendChild(createButton("contact"));
body.appendChild(createButton("menu"));


const content = document.getElementById('content');

const headline = document.createElement('h1');
headline.textContent = "Welcome to Terra!";
content.appendChild(headline);

const tagline = document.createElement('h3');
tagline.innerHTML = "The most <i>Traveled</i> restaurant in the world!";
content.appendChild(tagline);

const message = document.createElement('p');
message.textContent = "Where would you like to go today?";
content.appendChild(message);

const menuCountries = ['italy', 'mexico', 'japan', 'america', 'india', 'africa']

content.appendChild(selectMenu(menuCountries));