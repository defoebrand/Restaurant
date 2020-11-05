import capFirst from '../helpers/capFirst.js';
import homeContent from '../content/home.js';

export default function createTab(location) {

  const tab = document.createElement('p');
  tab.id = `${location}Tab`;
  tab.classList.add("tab");
  tab.value = value(location);
  tab.textContent = `${capFirst(location)}`;

  function value(location) {
    if (location == 'home') {
      tab.style.color = 'purple';
      tab.classList.add('active');
      return 'active';
    } else {
      tab.style.color = 'black';
      return 'inactive';
    }
  };


  return tab;
}