/* global STORAGE_KEY */

const themes = [
  'sunny',
  'seagreen',
  'winter',
  'warm',
  'brown',
  'gray'
];

export class ThemeSwitcher {
  constructor () {
    this._lsKey = STORAGE_KEY;
    this._counter = 0;
    this._theme = this._getTheme();
    this._control = document.querySelector('.theme-control');

    this._controlOnClickHandler = this._controlOnClickHandler.bind(this);

    this._control.addEventListener('click', this._controlOnClickHandler);
  }

  setTheme () {
    document.body.dataset.theme = this._theme;
    localStorage.setItem(this._lsKey, this._theme);
  }

  _controlOnClickHandler () {
    this._counter++;

    if (this._counter > themes.length - 1) {
      this._counter = 0;
    }

    this._theme = themes[this._counter];

    this.setTheme();
  }

  _getTheme () {
    let theme = localStorage.getItem(this._lsKey);
    theme = theme || 'seagreen';
    this._counter = themes.indexOf(theme);

    return theme;
  }
}
