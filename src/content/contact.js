import backgroundImage from '../images/home.jpeg';
import selectMenu from '../elements/select.js';

export default function contactContent() {

  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };

  const headline = document.createElement('h1');
  headline.textContent = "We are pleased to have you at Terra!";
  content.appendChild(headline);

  const tagline = document.createElement('h3');
  tagline.textContent = "Here at Terra we value the cuisine and cultures of all humans. As such we have compiled a menu that spans the globe and are proud to present this culinary trip around the world. So please, sit back and enjoy your trip!";
  tagline.style.textAlign = "center";
  tagline.classList.add('contentTagline')
  content.appendChild(tagline);

  const message = document.createElement('p');
  message.textContent = "Travel The World";
  content.appendChild(message);

  content.classList.remove('home');
  content.classList.remove('menu');
  content.classList.add('contact');

  return content;
}