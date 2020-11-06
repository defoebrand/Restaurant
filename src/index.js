import contentCreator from '../src/helpers/contentCreator';
import homeContent from './content/home.js';
import menuContent from './content/menu.js';
import contactContent from './content/contact.js';
import './style.css';

const body = document.querySelector('body');
body.appendChild(contentCreator.createTab("home"));
body.appendChild(contentCreator.createTab("contact"));
body.appendChild(contentCreator.createTab("menu"));

const tabs = document.getElementsByClassName('tab');

fillContent();

function fillContent() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = () => {
      tabCheck(tabs, i);
    }
    chooseContent(tabs, i);
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

function tabCheck(tab, i) {
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