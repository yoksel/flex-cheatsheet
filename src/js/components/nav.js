import { createElement, isVisible, debounce } from '../helpers';

export class Nav {
  constructor ({
    groups,
    sectionsComponents
  }) {
    this._groups = groups;
    // While get marker position
    // need to handle first the last of sections
    this._sectionsComponents = sectionsComponents.reverse();
    this._current = null;
    this._isWindowScrolling = false;
    this._scrollTimeOut = null;

    this.element = this._getNavElement();

    this._markerElement = createElement('<span class="nav__marker"></span>');
    this.element.prepend(this._markerElement);

    this._navItemsBySectionId = this._getItemsBySectionId();

    this._navClickHandler = this._navClickHandler.bind(this);
    this.moveMarker = this.moveMarker.bind(this);
    this._windowScrollHandler = this._windowScrollHandler.bind(this);

    this.element.addEventListener('click', this._navClickHandler);

    window.addEventListener('scroll', this._windowScrollHandler);
  }

  setCurrentItem (element) {
    if (element === this._currentElement) {
      return;
    }

    if (this._currentElement) {
      this._currentElement.classList.remove('nav__item--current');
    }

    this._markerElement.style.top = `${element.offsetTop}px`;

    element.classList.add('nav__item--current');

    this._currentElement = element;

    this._isWindowScrolling = true;
  }

  _getItemsBySectionId () {
    const navItems = Array.from(this.element.querySelectorAll('.nav__item, .nav__subheader'));

    const navItemsById = navItems.reduce((prev, item) => {
      prev[item.dataset.name] = item;

      return prev;
    }, {});

    return this._sectionsComponents.reduce((prev, item) => {
      const sectionId = `section-${item.id}`;
      let navItem = navItemsById[sectionId];

      if (!navItem) {
        navItem = navItemsById[`section-${item.parentId}`];
      }

      prev[sectionId] = navItem;

      return prev;
    }, {});
  }

  _getNavElement () {
    const navMarkup = this._getNavContentMarkup();

    return createElement(`<nav class="nav page-aside__container">
      <h2 class="visually-hidden">Navigation</h2>
      ${navMarkup}
    </nav>`);
  }

  _getNavContentMarkup () {
    const itemsList = Object.entries(this._groups)
      .map(([id, { title, items }]) => {
        let markup = '';
        const sectionId = `section-${id}`;

        if (title) {
          markup += `<h3
            class="nav__subheader"
            data-name="${sectionId}"
          >
            <a
              class="nav__subheader-link"
              href="#${sectionId}"
              >${title}</a>
          </h3>`;
        }

        markup += this._getListMarkup(id, items);

        return markup;
      });

    return itemsList.join('');
  }

  _getListMarkup (parentId, items, customClass = '') {
    const itemsList = items.map(({ alias, name, children }) => {
      const itemClass = 'nav__item';
      let itemsMarkup = '';
      const id = alias || name;
      const sectionId = `section-${id}`;

      if (children) {
        itemsMarkup = this._getListMarkup(id, children, 'nav__list--inner');
      }

      return `<li
          class="${itemClass}"
          data-name="${sectionId}"
          data-parent-name="section-${parentId}"
        ><a
            href="#${sectionId}"
            class="nav__link"
          >${name}</a>${itemsMarkup}</li>`;
    });

    return `<ul class="nav__list notranslate ${customClass}">${itemsList.join('')}</ul>`;
  }

  _navClickHandler (ev) {
    const navItem = ev.target.closest('.nav__item, .nav__subheader');

    if (!navItem) {
      return;
    }

    this.setCurrentItem(navItem);
  }

  moveMarker () {
    for (const section of this._sectionsComponents) {
      const navItemById = this._navItemsBySectionId[`section-${section.id}`];

      if (isVisible(section.element) && navItemById) {
        this.setCurrentItem(navItemById);
        break;
      }
    }
  }

  _windowScrollHandler () {
    // Instead of scrollend (doesn't work in FF)
    // https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
    clearTimeout(this._scrollTimeOut);

    this._scrollTimeOut = setTimeout(() => {
      this._isWindowScrolling = false;
    }, 100);

    if (this._isWindowScrolling) {
      return;
    }

    debounce(this.moveMarker, 500)();
  }
}
