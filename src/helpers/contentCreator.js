import capFirst from './capFirst.js';

const contentCreator = {

  withText(type, content, className) {

    let element = document.createElement(type);
    element.textContent = content;
    element.classList.add(className);
    return element
  },

  withHTML(type, content, className) {

    let element = document.createElement(type);
    element.innerHTML = content;
    element.classList.add(className);
    return element
  },

  withIMG(type, content, className) {

    let element = document.createElement(type);
    element.src = content;
    element.classList.add(className);
    return element
  },

  selectMenu(options) {

    const element = document.createElement('select');
    element.id = 'selectMenu';

    for (let i = 0; i < options.length; i++) {
      const option = document.createElement('option');
      option.value = `${options[i]}`;
      option.innerText = `${capFirst(options[i])}`;
      element.appendChild(option);
    }

    return element

  },

  createTab(location) {
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
  },

}

export default contentCreator