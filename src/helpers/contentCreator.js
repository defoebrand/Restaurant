import capFirst from './capFirst';

const contentCreator = {

  withText(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    element.classList.add(className);

    return element;
  },

  withHTML(type, content, className) {
    const element = document.createElement(type);
    element.innerHTML = content;
    element.classList.add(className);

    return element;
  },

  withIMG(type, content, className, id) {
    const element = document.createElement(type);
    element.src = content;
    element.classList.add(className);
    element.id = id;

    return element;
  },

  menuItem(type, content, side, placement, size) {
    const element = document.createElement(type);
    element.textContent = content;
    element.classList.add(`menu${side}`);
    element.classList.add(`menu${placement}`);
    element.classList.add(`menu${size}`);

    return element;
  },

  selectMenu(options) {
    const element = document.createElement('select');
    element.id = 'selectMenu';
    for (let i = 0; i < options.length; i += 1) {
      const option = document.createElement('option');
      option.value = `${options[i]}`;
      option.innerText = `${capFirst(options[i])}`;
      element.appendChild(option);
    }
    return element;
  },

  createTab(location) {
    const tab = document.createElement('p');

    function value(location) {
      let value = 'active';
      if (location === 'home') {
        tab.style.color = 'purple';
        tab.classList.add('active');
      } else {
        tab.style.color = 'black';
        value = 'inactive';
      }
      return value;
    }
    tab.id = `${location}Tab`;
    tab.classList.add('tab');
    tab.textContent = `${capFirst(location)}`;
    tab.value = value(location);

    return tab;
  },
};

export default contentCreator;