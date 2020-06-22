import { groups } from './data/groups';
import { Nav } from './js/components/nav';
import { ThemeSwitcher } from './js/components/theme-switcher';
import { MainContainer } from './js/components/main-container';

import './screenshot.png';
import './scss/styles.scss';

const main = document.querySelector('.page-main');

const themeSwitcher = new ThemeSwitcher();
themeSwitcher.setTheme();
const mainContainer = new MainContainer({ container: main, groups });
const asideElement = document.querySelector('.page-aside');
const asideContentElement = document.querySelector('.page-aside__content');
const asideTogglerElement = document.querySelector('.page-aside__toggler');
const nav = new Nav({ groups, sectionsComponents: mainContainer.getSectionsComponents() });

asideContentElement.prepend(nav.element);
nav.moveMarker();

asideTogglerElement.addEventListener('click', () => {
  asideElement.classList.toggle('page-aside--collapsed');
});

if (window.location.search.includes('debug')) {
  checkLinks();
}

function checkLinks () {
  const elemsWithId = Array.from(document.querySelectorAll('[id]'));
  const elemsById = elemsWithId.reduce((prev, item) => {
    prev[item.id] = item;
    return prev;
  }, {});
  const links = document.querySelectorAll('a[href*="#"]');
  let counter = 0;

  links.forEach((link) => {
    const href = link.getAttribute('href');
    const isExternal = href.includes('http');
    const hrefTail = link.getAttribute('href').split('#')[1];

    if (isExternal) {
      if (elemsById[hrefTail] &&
        (href.includes('css3-grid-layout') || href.includes('css-grid-1'))) {
        console.log('external, id exist in doc: ', hrefTail);
        link.classList.add('marked-link');
}
    } else if (!elemsById[hrefTail]) {
      console.log(`id not exist ${hrefTail}`);
      link.classList.add('marked-link');
      counter++;
    } else if (!href) {
      link.classList.add('marked-link');
      counter++;
    }
  });

  console.log(`Wrong links total: ${counter}`);
}
