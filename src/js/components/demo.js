/* global HIGHLIGHT_GRID */

import { createElement, getCellsQuantity } from '../helpers';
import { StylesController } from './styles-controller';

const demoTmpl = document.querySelector('#demo-tmpl').content.firstElementChild;

export class Demo {
  constructor (data) {
    this._data = data;
    this._id = this._data.alias || this._data.name;
    this._propNames = this._getPropNames();
    this._values = this._getValuesList();
    this._baseClass = `demo__content--prop-${this._id}`;
    this._current = this._getCurrent();
    this._cellsQuantity = 0;
    this._parentElement = null;
    this._parentCopy = null;
    this._parentElementMarkup = '';
    this.element = this._getElement();
    const codesElement = this.element.querySelector('.demo__code');

    this._stylesController = new StylesController({
      data,
      current: this._current,
      codesElement,
      classList: [this._baseClass]
    });

    this._controlsClickHandler = this._controlsClickHandler.bind(this);
    this._hightlightGrid = this._hightlightGrid.bind(this);

    this._addControls();

    document.addEventListener('pageFilled', this._hightlightGrid);
  }

  _getElement () {
    const demo = demoTmpl.cloneNode(true);
    const demoContentElement = demo.querySelector('.demo__content');
    demoContentElement.classList.add(...this._getClassList());
    const viewElement = demo.querySelector('.demo__view');

    if (this._data.htmlMarkup) {
      viewElement.innerHTML = this._data.htmlMarkup;
    }

    if (this._data.demoBefore) {
      viewElement.insertAdjacentHTML('afterbegin', this._data.demoBefore);
    }

    this._parentElement = viewElement.querySelector('.parent');
    this._parentElementMarkup = this._parentElement.outerHTML;

    return demo;
  }

  _getValuesList () {
    const values = this._data.customValues || this._data.values;

    return values.map((item, index) => {
      return {
        ...item,
        id: item.id || `${this._id}-control-${index}`
      };
    });
  }

  _getClassList () {
    const list = [`demo__content--prop-${this._id}`];

    if (this._data.isFeaturedHighlighted) {
      list.push('demo__content--highlight-featured');
    }

    return list;
  }

  _addControls () {
    const controls = this._getControlsMarkup();

    const element = createElement(`<div class="demo__controls">${controls}</div>`);

    element.addEventListener('click', this._controlsClickHandler);

    this.element.prepend(element);
    this._current.control = element.querySelector('.demo__control--current');
  }

  _getControlsMarkup () {
    const controlsList = [];

    if (!this._values) {
      return;
    }

    for (const { id, name, current } of this._values) {
      const classList = ['demo__control'];

      if (current || name === this._currentValueId) {
        classList.push('demo__control--current');
      }

      controlsList.push(`<button
        type="button"
        class="${classList.join(' ')}"
        id="${id}">${name}</button>`);
    }

    return controlsList.join(' ');
  }

  _getPropNames () {
    const propName = this._data.propDemoName || this._data.name;

    if (!propName.includes('+')) {
      return [propName];
    }

    return propName
      .split('+')
      .map(item => item.trim());
  }

  _getCurrent () {
    if (!this._values) {
      return;
    }

    let currentValue;
    let currentValueId;

    for (const { id, name, current } of this._values) {
      if (current) {
        currentValueId = id;
        currentValue = name;
      }
    }

    if (!currentValueId) {
      currentValueId = this._values[0].id;
      currentValue = this._values[0].name;
    }

    return {
      id: currentValueId,
      propNames: this._propNames,
      // Need for double props (prop + prop)
      valuesByKey: this._getValuesByKey(currentValue)
    };
  }

  _getValuesByKey (currentValue) {
    let valuesByKey = { [this._propNames[0]]: currentValue };

    if (currentValue.includes('/')) {
      const values = currentValue.split('/');

      if (values.length === this._propNames.length) {
        valuesByKey = this._propNames.reduce((prev, item, index) => {
          prev[item] = values[index];
          return prev;
        }, {});
      }
    }

    return valuesByKey;
  }

  _controlsClickHandler (ev) {
    const control = ev.target.closest('.demo__control');

    if (!control) {
      return;
    }

    this._current.control.classList.remove('demo__control--current');
    control.classList.add('demo__control--current');

    this._current.control = control;
    this._current.id = control.id;
    this._current.valuesByKey = this._getValuesByKey(control.innerHTML);

    this._stylesController.updateStyles(this._current);

    this._hightlightGrid();
  }

  _getHightlightedGridItemsMarkup (quantity) {
    let itemsMarkup = '';

    for (let i = 0; i < quantity; i++) {
      itemsMarkup += '<div class="child"></div>';
    }

    return itemsMarkup;
  }

  _hightlightGrid () {
    if (!HIGHLIGHT_GRID) {
      return;
    }

    const parentElemStyles = getComputedStyle(this._parentElement);
    const oldCellsQuantity = this._cellsQuantity;
    this._cellsQuantity = getCellsQuantity(parentElemStyles);

    if (oldCellsQuantity === this._cellsQuantity) {
      return;
    }

    const oldParentCopy = this._parentCopy;
    this._parentCopy = createElement(this._parentElementMarkup);
    this._parentCopy.classList.add('parent--grid-view');
    const restCellsQuantity = this._cellsQuantity - this._parentCopy.children.length;
    const parentItemsMarkup = this._getHightlightedGridItemsMarkup(restCellsQuantity);
    this._parentCopy.insertAdjacentHTML('beforeEnd', parentItemsMarkup);

    if (oldParentCopy) {
      oldParentCopy.replaceWith(this._parentCopy);
    } else {
      this._parentElement.append(this._parentCopy);
    }
  }
}
