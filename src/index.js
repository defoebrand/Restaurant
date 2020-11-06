import createTab from './elements/tabs.js';
import homeContent from './content/home.js';
import menuContent from './content/menu.js';
import contactContent from './content/contact.js';

const body = document.querySelector('body');
body.appendChild(createTab("home"));
body.appendChild(createTab("contact"));
body.appendChild(createTab("menu"));

const tabs = document.getElementsByClassName('tab');

function fillContent() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = () => {
      styleCheck(tabs, i);
      chooseContent(tabs, i);
    }
    chooseContent(tabs, i);
  }
}

function clearContent() {
  let content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };

  content.classList.remove('home');
  content.classList.remove('contact');
  content.classList.remove('menu');
}

function styleCheck(tab, i) {
  if (tab[i].value == 'inactive') {
    clearContent();
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].value == 'active') {
        tab[i].value = 'inactive';
        tab[i].classList.toggle('active');
        tab[i].style.color = 'black';
      }
    }
    tab[i].value = 'active';
    tab[i].classList.toggle('active');
    tab[i].style.color = 'purple';
  }
}

function chooseContent(tab, i) {
  if (tab[i].value == 'active') {
    const content = document.getElementById('content');
    if (tab[i].textContent == 'Home') {
      return homeContent(content);
    } else if (tab[i].textContent == 'Menu') {
      return menuContent(content);
    } else {
      return contactContent(content);
    }
  }
}


fillContent();