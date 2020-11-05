import createTab from './elements/tabs.js';
import homeContent from './content/home.js';
import menuContent from './content/menu.js';
import contactContent from './content/contact.js';

const body = document.querySelector('body');
body.appendChild(createTab("home"));
body.appendChild(createTab("contact"));
body.appendChild(createTab("menu"));

const tabs = document.getElementsByClassName('tab');

let content = document.querySelector('.content');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = () => {
    styleCheck(tabs, i);
    chooseContent(tabs, i);
  }
  chooseContent(tabs, i);
}

function styleCheck(tab, i) {

  if (tab[i].value == 'inactive') {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].value == 'active') {
        tab[i].value = 'inactive';
        tab[i].classList.toggle('active');
        tab[i].style.color = 'black';
      }
    }

    tab[i].style.color = 'purple';
    tab[i].classList.toggle('active');
    tab[i].value = 'active';

  }

}



function chooseContent(tab, i) {

  if (tab[i].value == 'active') {
    if (tab[i].textContent == 'Home') {
      return homeContent();
    } else if (tab[i].textContent == 'Menu') {
      return menuContent();
    } else {
      return contactContent(content);
    }
  }
}