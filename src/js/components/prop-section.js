import { createElement, getPlurals } from '../helpers';
import { Demo } from './demo';

export class PropSection {
  constructor (data, params = {}) {
    this._data = data;
    this.id = data.alias || data.name;
    this._sectionId = `section-${this.id}`;
    this.parentId = params.parentId;
    this._isChild = !!this.parentId;
    const { children, demos, cssRules } = this._data;
    this._hasChildren = children && children.length > 0;
    this._hasDemos = demos && demos.length > 0;
    this._hasCSS = !!cssRules;

    const elements = [
      this._getTitleElement(),
      this._getLinkElement(),
      this._getDemoElement(),
      this._getDescElement(),
      this._getTargetElement(),
      this._getInitialValueElement(),
      this._getValuesElement()
    ];

    this.element = this._getSectionElement();

    elements.forEach(element => this.element.append(element));
  }

  _getSectionElement () {
    let className = 'prop';

    if (this._isChild) {
      className += ' prop--child';
    }
    if (this._hasDemos || this._hasChildren) {
      className += ' prop--has-children';
    }

    return createElement(`<section
      id="${this._sectionId}"
      class="${className} container"></section>`
    );
  }

  _getDemoElement () {
    if (this._hasDemos || this._hasChildren || !this._hasCSS) {
      return '';
    }

    const demo = new Demo(this._data);
    return demo.element;
  }

  _getTitleElement () {
    return createElement(`<h3 class="prop__title  notranslate">
      ${this._data.name}
      <a class="self-link" href="#${this._sectionId}"></a>
    </h3>`);
  }

  _getLinkElement () {
    const link = this._data.link;

    if (!link) {
      return '';
    }

    var text = link.replace('http://www.', '');

    return createElement(`<a class="prop__link" href="${link}">${text}</a>`);
  }

  _getDescElement () {
    if (!this._data.desc) {
      return '';
    }

    return createElement(`<div
      class="prop__desc">${this._data.desc}</div>`);
  }

  _getTargetElement () {
    if (!this._data.appliesTo) {
      return '';
    }

    return createElement(`<p class="prop__initial-value"><b>Applies to</b>: ${this._data.appliesTo}.</p>`);
  }

  _getInitialValueElement () {
    if (!this._data.initValue) {
      return '';
    }

    return createElement(`<p class="prop__initial-value"><b>Initial</b>: ${this._data.initValue}.</p>`);
  }

  _getValuesElement () {
    const { values, desc } = this._data;
    if (!values) {
      return '';
    }

    let markup = '';
    const title = getPlurals(values.length, ['Value', 'Values']);
    const isTitleHidden = !desc;

    for (const { name, alias, desc } of values) {
      const id = alias || `${this.id}-${name}`;

      markup += `<dt
        id="${id}"
        class="prop-values__term notranslate">
        ${name}
        <a class="self-link" href="#${id}"></a>
      </dt>
        <dd class="prop-values__desc">${desc}</dd>`;
    }

    return createElement(`<div
      class="
        prop-values
        ${isTitleHidden ? 'prop-values--title-hidden' : ''}
      ">
      <h4 class="
        prop-values__title
        notranslate
        ${isTitleHidden ? 'visually-hidden' : ''}
      ">${title}</h4>
      <dl class="prop-values__list">${markup}</dl>
    </div>
    `);
  }
}
