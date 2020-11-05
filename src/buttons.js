export default function createButton(location) {
  const body = document.querySelector('body');
  const button = document.createElement('button');
  button.id = `${location}Btn`;
  button.textContent = `${location}`;
  body.appendChild(button);
}