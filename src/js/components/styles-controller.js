import { createElement } from '../helpers';

export class StylesController {
  constructor ({
    data,
    current,
    codesElement,
    classList
  }) {
    this._data = data;
    this._current = current;
    this._classList = classList;
    this._stylesElement = this._getStylesElement();
    this._codesElement = codesElement;
    this._propNames = this._current.propNames;
    this._setStyles();
  }

  updateStyles (current) {
    this._current = current;
    this._setStyles();
  }

  _getStylesElement () {
    const id = this._data.alias || this._data.name;
    const element = createElement(`<style id="style-${id}"></style>`);
    document.head.append(element);

    return element;
  }

  _getStyles () {
    const rules = this._data.cssRules;
    const parentClass = `.${this._classList.join(' ')}`;
    let visibleStyles = '';
    let hiddenStyles = '';

    if (!rules) {
      return {};
    }

    for (const { selector, props, valueId } of rules) {
      const propsListHidden = [];
      let propsListVisible = [];
      const hiddenSelector = [parentClass, selector].join(' ');

      if (valueId && valueId !== this._current.id) {
        continue;
      }

      for (let [name, value] of Object.entries(props)) {
        const valueByKey = this._current.valuesByKey[name];

        if (valueByKey) {
          value = valueByKey;
        }

        if (typeof value === 'string' && value.includes('\n')) {
          const spaces = '  ';
          value = value.replace(/\s{2,}/g, `\n${spaces}`);
          value = `\n${spaces}${value}`;
        }

        let propString = `${name}: ${value};\n`;

        propsListHidden.push(propString);

        if (this._propNames.includes(name)) {
          propString = `<mark>${propString}</mark>`;
        }

        propsListVisible.push(propString);
      }

      propsListVisible = propsListVisible
        .map(prop => {
          return (
            `<div class="demo__code-prop">${prop}</div>`
          );
        });

      hiddenStyles += `${hiddenSelector} {\n${propsListHidden.join('')}}\n`;
      visibleStyles += `${selector} {${propsListVisible.join('')}}<br><br>`;
    }

    return {
      visibleStyles,
      hiddenStyles
    };
  }

  _setStyles () {
    this.styles = this._getStyles();
    this._stylesElement.innerHTML = this.styles.hiddenStyles;
    this._codesElement.innerHTML = this.styles.visibleStyles;
  }
}
