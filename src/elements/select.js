import capFirst from '../helpers/capFirst.js';

export default function selectMenu() {

  const destinations = ['choose a destination...', 'lithuania', 'italy', 'mexico', 'japan', 'america', 'india', 'africa']

  const select = document.createElement('select');
  select.id = "destinations";

  for (let i = 0; i < destinations.length; i++) {
    const option = document.createElement('option');
    option.value = `${destinations[i]}`;
    option.innerText = `${capFirst(destinations[i])}`;
    select.appendChild(option);
  }

  return select

}