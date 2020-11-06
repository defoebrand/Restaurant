import contentCreator from '../helpers/contentCreator';
import backgroundImage from '../images/home.jpeg';

export default function homeContent(content) {

  content.appendChild(contentCreator.withIMG('img', backgroundImage, "backgroundImage"));

  content.appendChild(contentCreator.withText('h1', 'Welcome to Terra!'));

  content.appendChild(contentCreator.withHTML('h3', 'The most <i>Traveled</i> restaurant in the world!'));

  content.appendChild(contentCreator.withText('p', 'Where would you like to go today?'));

  const destinations = ['choose a destination...', 'lithuania', 'china', 'italy', 'mexico', 'japan', 'america', 'india', 'africa']

  content.appendChild(contentCreator.selectMenu(destinations));

  content.classList.add('home');

  return content;
}