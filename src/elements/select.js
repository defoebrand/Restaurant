import capFirst from '../helpers/capFirst.js';

export default function selectMenu(location) {

  const select = document.createElement('select');
  select.id = "countrySelect";

  for (let i = 0; i < location.length; i++) {
    const option = document.createElement('option');
    option.value = `${location[i]}`;
    option.innerText = `${capFirst(location[i])}`;
    select.appendChild(option);
  }

  return select

}