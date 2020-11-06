import contentCreator from './helpers/contentCreator';
import homeContent from './content/home';
import menuContent from './content/menu';
import contactContent from './content/contact';
import './style.css';

const body = document.querySelector('body');
body.appendChild(contentCreator.createTab('home'));
body.appendChild(contentCreator.createTab('contact'));
body.appendChild(contentCreator.createTab('menu'));

const tabs = document.getElementsByClassName('tab');

function chooseContent(tab, i) {
  if (tab[i].value === 'active') {
    const content = document.getElementById('content');
    if (tab[i].textContent === 'Home') {
      let view = homeContent(content);
    } else if (tab[i].textContent === 'Menu') {
      let view = menuContent(content);
    } else {
      let view = contactContent(content);
    }
  }
  return view;
}

function clearContent() {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  content.classList.remove('home');
  content.classList.remove('contact');
  content.classList.remove('menu');
}

function tabCheck(tab, i) {
  if (tab[i].value === 'inactive') {
    clearContent();
    for (let i = 0; i < tab.length; i += 1) {
      if (tab[i].value === 'active') {
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

function fillContent() {
  for (let i = 0; i < tabs.length; i += 1) {
    tabs[i].onclick = () => {
      tabCheck(tabs, i);
    };
    chooseContent(tabs, i);
  }
}

fillContent();