import { createElement } from '../helpers';

export class Group {
  constructor (data) {
    this._data = data;
    this._sectionId = `section-${this._data.id}`;
    const container = createElement('<div class="group__intro container"></div>');

    const elements = [
      this._getTitleElement(),
      this._getLinkElement(),
      this._getDescElement()
    ];

    elements.forEach(element => container.append(element));

    this.element = this._getElement();

    this.element.append(container);
  }

  _getElement () {
    const { hideTitle } = this._data;
    let className = 'group';

    if (hideTitle) {
      className += ' group--hidden-title';
    }

    return createElement(`<section class="${className}" id="${this._sectionId}"></section>`);
  }

  _getTitleElement () {
    const { title, hideTitle } = this._data;

    if (!title) {
      return '';
    }

    let className = 'group__title';

    if (hideTitle) {
      className += ' visually-hidden';
    }

    return createElement(`<h2 class="${className}">
      ${title}
      <a class="self-link" href="#${this._sectionId}"></a>
    </h2>`);
  }

  _getDescElement () {
    const { desc } = this._data;

    if (!desc) {
      return '';
    }

    return createElement(`<div class="group__desc">${desc}</div>`);
  }

  _getLinkElement () {
    const { link } = this._data;

    if (!link) {
      return '';
    }

    var text = link.replace('http://www.', '');

    return createElement(`<a class="group__link" href="${link}">${text}</a>`);
  }
}
