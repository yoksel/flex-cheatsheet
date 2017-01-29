var $ = tinyLib;

var doc = document;
var body = $.get('body');
var aside = $.get('.l-aside');
var main = $.get('.l-main');
var head = $.get('head');

var navHolder = $.create('ul').addClass('nav');
var contentHolder = $.create('div').addClass('content');
var stylesHolder = $.create('style').attr({'id':'flex'});

var navMarker = $.create('li').addClass('nav__marker');
var projectLinks = $.create('li')
                    .addClass(['nav__item', 'nav__item--project-links'])
                    .append( $.get('.project-links') );

var sections = [];
var navItems = {};
var navItemCurrent;

var demoWrapper = $.get('.demo-wrapper');
var codeWrapper = $.get('.code-wrapper');

var demoValueClassCurrent = 'demo-values__control--current';
var codeOffset = '  ';
var demoElemClasses = {
  'flex containers': '.parent' ,
  'flex items': '.child--featured'
};
var navItemCurrentClass = 'nav__item--current';
var localStorThemeKey = 'fbchTheme';

//---------------------------------------------

function createContent () {

    for (var i = 0; i < data.length; i++) {
        var item = new Item( data[i], i );
    }

    head.append( stylesHolder );
    main.append( contentHolder );
    aside.prepend( navHolder );
    navHolder.append( projectLinks );
    navHolder.append( navMarker );

    setCurrentNavItem();
}

//---------------------------------------------
// CONTENT
//---------------------------------------------

function Item ( item, pos ){
    this.dataItem = item;
    this.pos = pos;

    var navItem = this.navItemElem();
    navHolder.append( navItem );

    if ( this.dataItem.type && this.dataItem.type == 'subheader' ) {
        return;
    }

    var contentItem = this.ContentItemElem();
    var styles = this.StylesItem();

    contentHolder.append( contentItem );
}

//---------------------------------------------
// NAV
//---------------------------------------------

Item.prototype.navItemElem = function () {

    var elemContent = $.create('a')
                       .attr({
                        'href': '#' + this.dataItem.name,
                        'data-parent-nav-item': this.dataItem.name,
                        'class': 'nav__link'
                       })
                       .html(this.dataItem.name);
    // need to fix
    elemContent.elem.onclick = function() {
      navItemCurrent = elemContent;
      setCurrentNavItem();
    };

    if ( this.dataItem.type && this.dataItem.type === 'subheader' ) {
        elemContent = $.create('h2')
                       .attr({
                        'class': 'nav__subheader'
                       })
                       .html(this.dataItem.title);
    }

    var classList = ['nav__item', 'nav__item--' + this.dataItem.name];

    var elem = $.create('li')
                .addClass( classList )
                .attr( {'data-name' : this.dataItem.name} )
                .append( elemContent );

    navItems[ this.dataItem.name ] = elem;

    if ( !navItemCurrent ) {
      navItemCurrent = elem;
    }

    return elem;
};

//---------------------------------------------

function setCurrentNavItem ( elemSet ) {
    var parent;
    elemSet = elemSet ? elemSet : navItemCurrent;

    if ( !elemSet.elem ) {
      return;
    }

    unsetClass ( navItemCurrentClass );

    if ( elemSet.elem.dataset.parentNavItem ) {
      parent = $.get('.nav__item--' + elemSet.elem.dataset.parentNavItem);
    }
    else {
      parent = elemSet;
    }

    if ( parent ) {
      parent.addClass( navItemCurrentClass );
      navMarker.elem.style.top = parent.elem.offsetTop + 'px';
    }
}

//---------------------------------------------
// CONTENT
//---------------------------------------------

Item.prototype.ContentItemElem = function ( ) {

    var content = [
            this.contentItemTitle (),
            this.contentItemLink (),
            this.contentItemDemo (),
            this.contentItemDesc (),
            this.contentItemTarget (),
            this.contentItemInitial (),
            this.contentItemValues ()
            ];

    var elem = $.create('section')
                .addClass('content__item')
                .attr({id: this.dataItem.name})
                .append( content );
    sections.push( elem );
    return elem;
};

//---------------------------------------------

Item.prototype.contentItemTitle = function () {
    var elem = $.create('h2')
                .attr({
                  'class':'content__title',
                  'id': this.dataItem.name
                })
                .html(this.dataItem.name);

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemLink = function () {

    if ( !this.dataItem.link ) {
        return;
    }

    var linkText = this.dataItem.link.replace('http://www.','');

    var elem = $.create('a')
                .attr({
                    'href': this.dataItem.link,
                    'class':'content__link',
                })
                .html(linkText);
    return elem;
};

//---------------------------------------------

Item.prototype.contentItemTarget = function () {

    if ( !this.dataItem.appliesTo ){
        return;
    }

    var elem = $.create('p')
                .addClass('content__initial-value')
                .html('<b>Applies to</b>: ' + this.dataItem.appliesTo + '.');

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemInitial = function () {

    if ( !this.dataItem.initValue ){
        return;
    }

    var elem = $.create('p')
                .addClass('content__initial-value')
                .html('<b>Initial</b>: ' + this.dataItem.initValue + '.');

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemDemo = function () {
    this.demoWrapper = demoWrapper.clone();

    this.demoElem = $.get('.demo', this.demoWrapper);
    this.targetElemSelector = demoElemClasses[ this.dataItem.targetForDemo ];

    if ( this.dataItem.demoBefore ) {
      var view = $.get('.demo__view', this.demoWrapper);
      view.html( this.dataItem.demoBefore + view.html() );
    }

    // Class-marker
    this.demoClassName = 'demo--prop-' + this.dataItem.name;
    this.demoClass = '.' + this.demoClassName;

    this.demoElem.addClass( this.demoClassName );

    if ( this.targetElemSelector.search('featured') > -1 ) {
      this.demoElem.addClass( 'demo--has-featured' );
    }

    this.contentItemDemoValues();
    this.contentItemSetCSS();
    this.contentItemSetCodeText();

    return this.demoWrapper;
};

//---------------------------------------------

Item.prototype.contentItemGetCSS = function () {
  var rules = this.dataItem.cssRules;
  var parentClass = this.demoClass;
  var visibleStyles = '';
  var hiddenStyles = '';
  var that = this;

  if ( rules ) {
    rules.forEach( function(item, i){
      var rulesListHidden = '';
      var rulesListVisible = '';
      var styles = '';

      for (var rule in item.rules ) {
        var ruleString = rule + ': ' + item.rules[ rule ] + ';\n';

        rulesListHidden += codeOffset + ruleString;

        if ( rule === that.dataItem.name ) {
          ruleString = '<mark>' + ruleString + '</mark>';
        }

        rulesListVisible += codeOffset + ruleString;
      }

      hiddenStyles += parentClass + ' ' + item.selector + ' {\n';
      hiddenStyles += rulesListHidden;
      hiddenStyles += '}\n';

      visibleStyles += item.selector + ' {\n';
      visibleStyles += rulesListVisible;
      visibleStyles += '}\n';
    });

    that.visibleStyles = visibleStyles;
    that.hiddenStyles = hiddenStyles;
  }
};

//---------------------------------------------

Item.prototype.contentItemSetCSS = function () {

  this.stylesElem = $.create('style')
                     .attr({ id: 'style-' + this.dataItem.name });

  this.contentItemGetCSS();
  this.stylesElem.html( this.hiddenStyles );

  head.append( this.stylesElem );
};

//---------------------------------------------

Item.prototype.contentItemChangeCSSProp = function () {

  var rules = this.dataItem.cssRules;
  var current = this.currentValue;
  var targetSelector = this.targetElemSelector;
  var prop = this.dataItem.name;
  var that = this;

  if ( rules ) {
    rules.forEach( function(rule, i){
      if ( rule.selector === targetSelector ) {
        rule.rules[ prop ] = current;

        that.contentItemGetCSS();
        that.stylesElem.html( that.hiddenStyles );
        that.codesElem.html( that.visibleStyles );
      }
    });
  }
};

//---------------------------------------------

Item.prototype.contentItemSetCodeText = function () {
    this.codesElem = $.get('.demo__code', this.demoWrapper);
    this.codesElem.html( this.visibleStyles );
};

//---------------------------------------------

Item.prototype.contentItemDemoValues = function () {
    var items = [];
    var parentItem = this;
    var hasCurrent = false;

    if ( !this.dataItem.values && !this.dataItem.customValues ) {
        return;
    }

    var values = this.dataItem.values;

    if ( this.dataItem.customValues ) {
      values = this.dataItem.customValues;
    }

    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        var valElem = new DemoControl( this, value );

        if ( value.current && value.current === true ) {
          valElem.addClass( demoValueClassCurrent );
          hasCurrent = true;
        }
        else if ( !this.dataItem.customValues
          && !hasCurrent
          && value.name === this.dataItem.initValue ) {
            valElem.addClass( demoValueClassCurrent );
            hasCurrent = true;
        }

        items = items.concat(valElem);
    }

    var elem = $.create('div')
                .addClass('demo-values')
                .append(items);

    this.demoWrapper.prepend( elem );

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemDesc = function () {

    if ( !this.dataItem.desc ) {
        return;
    }

    var elem = $.create('div')
                .addClass('content__desc')
                .html(this.dataItem.desc);

    return elem;
};

//---------------------------------------------

Item.prototype.contentItemValues = function () {
    var items = [];

    if ( !this.dataItem.values ) {
        return;
    }

    for (var i = 0; i < this.dataItem.values.length; i++) {
        var value = this.dataItem.values[i];
        var id = this.dataItem.name + '__' + value.name;

        var dt = $.create('dt')
                  .attr({
                    id: id,
                    class: 'content-values__term',
                  })
                  .html(value.name);
        var dd = $.create('dd')
                  .attr({
                    class: 'content-values__desc',
                  })
                  .html(value.desc);

        items.push(dt, dd);
    }

    var elem = $.create('dl')
                .addClass('content-values')
                .append(items);
    return elem;
};

//---------------------------------------------
// DEMO CONTROLS
//---------------------------------------------

function DemoControl( parentObj, value ) {

    var valName = value.name;
    var that = this;

    this.elemSet = $.create('button')
                    .addClass('demo-values__control')
                    .html(valName)
                    .attr({'name': valName});

    this.elemSet.elem.onclick = function( ) {
        parentObj.currentValue = this.innerHTML;
        parentObj.contentItemChangeCSSProp();

        if ( !parentObj.currentElem ) {
          parentObj.currentElem = $.get('.' + demoValueClassCurrent, this.parentNode);
        }

        if ( parentObj.currentElem ) {
          parentObj.currentElem.removeClass( demoValueClassCurrent );
        }

        parentObj.currentElem = that.elemSet;
        that.elemSet.addClass( demoValueClassCurrent );
    };

    return this.elemSet;
}

//---------------------------------------------
// STYLES
//---------------------------------------------

Item.prototype.StylesItem = function () {

    var prop = this.dataItem.name;
    var values = this.dataItem.values;
    var target = this.dataItem.targetForDemo;
    var intValue = this.dataItem.initValue;
    var parentClass = this.demoClass;
    var childClass = this.demoClass + ' .flex-item';

    var parentStyles = '';

    if ( !this.dataItem.targetForDemo || !values) {
        return;
    }

    for (var i = 0; i < values.length; i++) {

        // Parent
        if ( target === 'flex container' ) {

            var value = values[i];
            var elemClass = '.' + prop + '--' + value.name;

            parentStyles += [
                elemClass + ' {',
                prop + ': ' + value.name + ';',
                '}\n'
                ].join('\n');

        }
    }

    var containerStyles = [
        parentStyles,
        // childsStyles
        ].join('\n');

    stylesHolder.elem.innerHTML += containerStyles;
};

//---------------------------------------------
// THEMES SWITCHER
//---------------------------------------------

function addThemeControls() {
  var control = $.create('button')
                 .addClass('theme-control')
                 .html('Change theme');
  body.append(control);

  control.elem.addEventListener('click', function () {
    var nextTheme = body.data('theme') === 'seagreen' ? 'default' : 'seagreen';
    body.data({'theme': nextTheme});
    localStorage[localStorThemeKey] = nextTheme;
  });
}

//---------------------------------------------

function applyTheme() {
  var theme = localStorage[localStorThemeKey];
  theme = theme ? theme : 'seagreen';
  body.data({'theme': theme});
}

//---------------------------------------------
// COMMON
//---------------------------------------------

function unsetClass ( className ) {
    var current = $.get('.' + className);

    if ( current.elem ) {
        current.removeClass( className );
    }
}

//---------------------------------------------

// Source: https://learn.javascript.ru/onscroll

function isVisible(elem) {

  var coords = elem.getBoundingClientRect();
  var koeff = 300;

  var windowHeight = document.documentElement.clientHeight;

  // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
  var topVisible = coords.top > 0 && coords.top < windowHeight / 2;
  var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

//---------------------------------------------

// Source: https://davidwalsh.name/javascript-debounce-function

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//---------------------------------------------

var myEfficientFn = debounce(function() {

  sections.forEach( function( item, i ) {
    if( isVisible( item.elem ) && navItems[ item.elem.id ].elem ) {
        setCurrentNavItem ( navItems[ item.elem.id ] );
    }
  });

}, 100);

window.addEventListener('scroll', myEfficientFn);

//---------------------------------------------

createContent();
applyTheme();
addThemeControls();
