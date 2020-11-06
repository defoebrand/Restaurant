import backgroundImage from '../images/home.jpeg';
import selectMenu from '../elements/select.js';

export default function homeContent(content) {

  const background = document.createElement('img');
  background.src = backgroundImage;
  background.classList.add("backgroundImage");
  content.appendChild(background);

  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Terra!";
  content.appendChild(headline);

  const tagline = document.createElement('h3');
  tagline.innerHTML = "The most <i>Traveled</i> restaurant in the world!";
  content.appendChild(tagline);

  const message = document.createElement('p');
  message.textContent = "Where would you like to go today?";
  content.appendChild(message);

  content.appendChild(selectMenu());

  content.classList.add('home');

  return content;
}