import backgroundImage from '../images/home.jpeg';
import selectMenu from '../elements/select.js';

export default function homeContent() {

  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };

  const background = document.createElement('img');
  background.src = backgroundImage;
  background.id = "backgroundImage";
  content.appendChild(background);

  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Terra!";
  content.appendChild(headline);

  const tagline = document.createElement('h3');
  tagline.innerHTML = "The most <i>Traveled</i> restaurant in the world!";
  tagline.style.textAlign = "center";
  content.appendChild(tagline);

  const message = document.createElement('p');
  message.textContent = "Where would you like to go today?";
  content.appendChild(message);

  const menuCountries = ['italy', 'mexico', 'japan', 'america', 'india', 'africa']
  content.appendChild(selectMenu(menuCountries));

  content.classList.remove('menu');
  content.classList.remove('contact');
  content.classList.add('home');

  return content;
}