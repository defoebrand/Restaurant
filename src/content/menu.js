import contentCreator from '../helpers/contentCreator';
import backgroundImage from '../images/menu.jpeg';

export default function menuContent(content) {

  content.appendChild(contentCreator.withIMG('img', backgroundImage, 'backgroundImage', 'menuImage'));

  content.appendChild(contentCreator.menuItem('h2', 'Snacks', 'Left', 'Heading'));

  content.appendChild(contentCreator.menuItem('p', 'Herring   --   $3.00', 'Left', 'Choice1'));

  content.appendChild(contentCreator.menuItem('p', 'Cheeses   --   $2.50', 'Left', 'Choice2'));

  content.appendChild(contentCreator.menuItem('p', 'Meats   --   $3.50', 'Left', 'Choice3'));

  content.appendChild(contentCreator.menuItem('h2', 'Hot Dishes', 'Left', 'Heading', 'Large'));

  content.appendChild(contentCreator.menuItem('p', 'Cepelinai   --   $2.50', 'Left', 'Choice1', 'Large'));

  content.appendChild(contentCreator.menuItem('p', 'Koldunai   --   $3.00', 'Left', 'Choice2', 'Large'));

  content.appendChild(contentCreator.menuItem('p', 'Balandeliai   --   $3.50', 'Left', 'Choice3', 'Large'));

  content.appendChild(contentCreator.menuItem('h2', 'Drinks', 'Right', 'Heading'));

  content.appendChild(contentCreator.menuItem('p', 'Gira   --   $0.50', 'Right', 'Choice1'));

  content.appendChild(contentCreator.menuItem('p', 'Coffee   --   $1.00', 'Right', 'Choice2'));

  content.appendChild(contentCreator.menuItem('p', 'Tea   --   $0.75', 'Right', 'Choice3'));

  content.appendChild(contentCreator.menuItem('h2', 'Desserts', 'Right', 'Heading', 'Large'));

  content.appendChild(contentCreator.menuItem('p', 'Tiramisu   --   $1.50', 'Right', 'Choice1', 'Large'));

  content.appendChild(contentCreator.menuItem('p', 'Ledai   --   $1.50', 'Right', 'Choice2', 'Large'));

  content.appendChild(contentCreator.menuItem('p', 'Pyragas   --   $2.00', 'Right', 'Choice3', 'Large'));

  content.classList.add('menu');

  return content;
}