import capFirst from '../helpers/capFirst.js';

export default function createButton(location) {

  const button = document.createElement('button');
  button.id = `${location}Btn`;
  button.textContent = `${capFirst(location)}`;

  return button;
}