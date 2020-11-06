import contentCreator from '../helpers/contentCreator';

export default function contactContent(content) {

  content.appendChild(contentCreator.withText('h1', 'We are pleased to have you at Terra!'));

  content.appendChild(contentCreator.withHTML('h3', 'Here at Terra we value the cuisine and cultures of all humans. As such we have compiled a menu that spans the globe and are proud to present this culinary trip around the world. So please, sit back and enjoy your journey!<br><br>Please join us at any of the following locations:<br><br>Lithuania |  India |  Italy | England | America | Mexico | Africa'));

  content.appendChild(contentCreator.withText('p', 'Travel The World'));

  content.classList.add('contact');

  return content;
}