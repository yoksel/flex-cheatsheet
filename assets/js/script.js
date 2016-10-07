// var tl = tinyLib;

var doc = document;
var aside = $('.l-aside');
var main = $('.l-main');
var head = $('head');

var navHolder = $.create('ul',{'class':'nav'});
var contentHolder = $.create('div',{'class':'content'});
var stylesHolder = $.create('style',{'id':'flex'});

var navMarker = $.create('div',{'class':'nav__marker'});

var sections = [];
var navItems = {};

var demoWrapper = $('.demo-wrapper');
var codeWrapper = $('.code-wrapper');

var demoValueClassCurrent = 'demo-values__control--current';
var codeOffset = '  ';
var demoElemClasses = {
  'flex container': '.parent' ,
  'flex items': '.child--featured'
};
var navItemCurrentClass = 'nav__item--current';

//---------------------------------------------

function createContent () {

    for (var i = 0; i < data.length; i++) {
        var item = new Item( data[i], i );
    };

    head.appendChild( stylesHolder );
    main.appendChild( contentHolder );
    aside.appendChild( navHolder );
    navHolder.appendChild( navMarker );
    setCurrentNavItem( navItems[0] );

}

//---------------------------------------------
// CONTENT
//---------------------------------------------

function Item ( item, pos ){
    this.dataItem = item;
    this.pos = pos;

    var navItem = this.navItemElem();
    navHolder.appendChild( navItem );

    if ( this.dataItem.type && this.dataItem.type == 'subheader' ) {
        return;
    }

    var contentItem = this.ContentItemElem();
    var styles = this.StylesItem();

    contentHolder.appendChild( contentItem );
}

//---------------------------------------------
// NAV
//---------------------------------------------

Item.prototype.navItemElem = function () {

    var contents = [
        {
        'tag': 'a',
        'href': '#' + this.dataItem.name,
        'class': 'nav__link',
        'contents': this.dataItem.name,
        'data-parent-nav-item': this.dataItem.name,
        'events': { click: setCurrentNavItem }
        },
        // this.navItemValues ()
    ];

    if ( this.dataItem.type && this.dataItem.type === 'subheader' ) {
        contents = [
            {
            'tag': 'h2',
            'class': 'nav__subheader',
            'contents': this.dataItem.name
            }
        ];
    }

    var classList = ['nav__item', 'nav__item--' + this.dataItem.name];

    var elemProps = {
        'class': classList.join(' '),
        'data-name': this.dataItem.name,
        'contents': contents
    };

    var elem = $.create('li', elemProps);
    navItems[ this.dataItem.name ] = elem;
    return elem;
}

//---------------------------------------------

Item.prototype.navItemValues = function () {
    var items = [];

    if ( !this.dataItem.values ) {
        return;
    }

    for (var i = 0; i < this.dataItem.values.length; i++) {
        items = items.concat( navItemValueLink( this.dataItem.values[i], this.dataItem.name ) );
    };

    var elemProps = {
        'class':'values values-nav',
        'contents': items
    };

    var elem = $.create('ul', elemProps);
    return elem;
}

//---------------------------------------------

function navItemValueLink( value, property ) {

    if ( !value.name ) {
        return;
    }

    var href = property + '__' + value.name;

    var elemProps = {
        'class':'value__item values-nav__item',
        'contents': {
            tag: 'a',
            href: '#' + href,
            textContent: value.name,
            // 'data-parent-nav-item': property,
            // events: { click: setCurrentNavValue }
            }
    };

    var elem = $.create('li', elemProps);

    return elem;
}

//---------------------------------------------

function setCurrentNavItem ( elem ) {
    var parent = undefined;

    if ( !elem ) {
      return;
    }

    unsetClass ( navItemCurrentClass );

    elem = elem.nodeType == 1 ? elem : this;

    if ( elem.dataset.parentNavItem ) {
      parent = $('.nav__item--' + elem.dataset.parentNavItem);
    }
    else {
      parent = elem;
    }

    if ( parent ) {
      parent.classList.add( navItemCurrentClass );
      navMarker.style.top = parent.offsetTop + 'px';
    }
}

//---------------------------------------------

function setCurrentNavValue () {

    var navItemCurrentValClass = 'values-nav__item--current';
    unsetClass ( navItemCurrentValClass );

    setCurrentNavItem( this );
    this.parentNode.classList.add( navItemCurrentValClass );

}

//---------------------------------------------
// CONTENT
//---------------------------------------------

Item.prototype.ContentItemElem = function ( ) {

    var elemProps = {
        'class':'content__item',
        'id': this.dataItem.name,
        'contents': [
            this.contentItemTitle (),
            this.contentItemLink (),
            this.contentItemDemo (),
            this.contentItemDesc (),
            this.contentItemInitial (),
            this.contentItemValues ()
            ]
    };

    var elem = $.create('section', elemProps);
    sections.push( elem );
    return elem;
}

//---------------------------------------------

Item.prototype.contentItemTitle = function () {
    var elemProps = {
        'class':'content__title',
        'contents': this.dataItem.name,
        'id': this.dataItem.name
    };

    var elem = $.create('h2', elemProps);
    return elem;
}

//---------------------------------------------

Item.prototype.contentItemLink = function () {

    if ( !this.dataItem.link ) {
        return;
    }

    var linkText = this.dataItem.link.replace('http://www.','');

    var elemProps = {
        'href': this.dataItem.link,
        'contents': linkText,
        'class':'content__link',
    };

    var elem = $.create('a', elemProps);
    return elem;
}

//---------------------------------------------

Item.prototype.contentItemInitial = function () {

    if ( !this.dataItem.initValue ){
        return;
    }

    var elemProps = {
        'class':'content__initial-value',
    };

    var elem = $.create('p', elemProps);

    elem.innerHTML = '<b>Initial</b>: ' + this.dataItem.initValue + '.';

    return elem;
}

//---------------------------------------------

Item.prototype.contentItemDemo = function () {
    this.demoWrapper = $.clone( demoWrapper );
    this.demoElem = $('.demo', this.demoWrapper);
    this.targetElemSelector = demoElemClasses[ this.dataItem.target ];

    if ( this.dataItem.demoBefore ) {
      var view = $('.demo__view', this.demoWrapper);
      view.innerHTML = this.dataItem.demoBefore + view.innerHTML;
    }

    // Class-marker
    this.demoClassName = 'demo--prop-' + this.dataItem.name;
    this.demoClass = '.' + this.demoClassName;

    this.demoElem.classList.add( this.demoClassName );

    this.contentItemDemoValues();
    this.contentItemSetCSS();
    this.contentItemSetCodeText();

    // console.log(this);

    return this.demoWrapper;
}

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
      var styles = ''

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

    // console.log(this);
  }
}

//---------------------------------------------

Item.prototype.contentItemSetCSS = function () {

  this.stylesElem = $.create('style',{ id: 'style-' + this.dataItem.name });

  this.contentItemGetCSS();
  this.stylesElem.innerHTML = this.hiddenStyles;

  head.appendChild( this.stylesElem );
}

//---------------------------------------------

Item.prototype.contentItemChangeCSSProp = function (  ) {

  var rules = this.dataItem.cssRules;
  var current = this.currentValue;
  var targetSelector = this.targetElemSelector
  var prop = this.dataItem.name;
  var that = this;

  if ( rules ) {
    rules.forEach( function(rule, i){
      if ( rule.selector === targetSelector ) {
        rule.rules[ prop ] = current;

        that.contentItemGetCSS();
        that.stylesElem.innerHTML = that.hiddenStyles;
        that.codesElem.innerHTML = that.visibleStyles;
      }
    });
  }
};

//---------------------------------------------

Item.prototype.contentItemSetCodeText = function () {
    this.codesElem = $('.demo__code', this.demoWrapper);
    this.codesElem.innerHTML = this.visibleStyles;
};

//---------------------------------------------

Item.prototype.contentItemDemoValues = function () {
    var items = [];
    var parentItem = this;
    var hasCurrent = false;

    // console.log( this.dataItem );
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

        console.log( value );

        if ( value.current && value.current === true ) {
          valElem.classList.add( demoValueClassCurrent );
          hasCurrent = true;

          console.log( 'value has current' );
        }
        else if ( !this.dataItem.customValues
          && !hasCurrent
          && value.name === this.dataItem.initValue ) {
            valElem.classList.add( demoValueClassCurrent );
            hasCurrent = true;
        }
        // else ( !hasCurrent ) {
        //
        // }

        items = items.concat(valElem);
    };

    var elemProps = {
        'class':'demo-values',
        'contents': items,
        'start': this.demoWrapper
    };

    var elem = $.create('div', elemProps);
    return elem;
};

//---------------------------------------------

Item.prototype.contentItemDesc = function () {

    if ( !this.dataItem.desc ) {
        return;
    }

    var elemProps = {
        'class':'content__desc'
    };

    var elem = $.create('div', elemProps);

    elem.innerHTML = this.dataItem.desc;

    return elem;
}

//---------------------------------------------

Item.prototype.contentItemValues = function () {
    var items = [];

    if ( !this.dataItem.values ) {
        return;
    }

    for (var i = 0; i < this.dataItem.values.length; i++) {
        var value = this.dataItem.values[i];
        var id = this.dataItem.name + '__' + value.name;

        items.push(
            {
            tag: 'dt',
            id: id,
            textContent: value.name,
            class: 'content-values__term',
            });
        items.push(
            {
            tag: 'dd',
            textContent: value.desc,
            class: 'content-values__desc',
            });
    };

    var elemProps = {
        'class':'content-values',
        'contents': items
    };

    var elem = $.create('dl', elemProps);
    return elem;
}

//---------------------------------------------
// DEMO CONTROLS
//---------------------------------------------

function DemoControl( parentObj, value ) {

    var valName = value.name;

    this.elem = $.create({
            'tag': 'button',
            'class': 'demo-values__control',
            'contents': valName,
            'name': valName,
        });

    this.elem.onclick = function( ) {
        parentObj.currentValue = this.innerHTML;
        parentObj.contentItemChangeCSSProp();

        if ( !parentObj.currentElem ) {
          parentObj.currentElem = $('.' + demoValueClassCurrent, this.parentNode);
        }

        if ( parentObj.currentElem ) {
          parentObj.currentElem.classList.remove( demoValueClassCurrent );
        }

        parentObj.currentElem = this;
        this.classList.add( demoValueClassCurrent )
    }

    return this.elem;
}

//---------------------------------------------
// STYLES
//---------------------------------------------

Item.prototype.StylesItem = function () {

    // stylesHolder.innerHTML = '.test { }';

    var prop = this.dataItem.name;
    var values = this.dataItem.values;
    var target = this.dataItem.target;
    var intValue = this.dataItem.initValue;
    var parentClass = this.demoClass;
    var childClass = this.demoClass + ' .flex-item';

    var parentStyles = '';

    if ( !this.dataItem.target || !values) {
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
    };

    // console.log( parentStyles );


    // var childsStyles = [
    //     childClass + ' {',
    //     prop + ':' + intValue,
    //     '}'
    //     ].join('\n');

    var containerStyles = [
        parentStyles,
        // childsStyles
        ].join('\n');

    // console.log( containerStyles );

    stylesHolder.innerHTML += containerStyles;

    // console.log( stylesHolder.innerHTML );
}

//---------------------------------------------
// COMMON
//---------------------------------------------

function unsetClass ( className ) {
    var current = $('.' + className);

    if ( current ) {
        current.classList.remove( className );
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
};

//---------------------------------------------

var myEfficientFn = debounce(function() {

  sections.forEach( function( item, i ) {
    if( isVisible( item ) ) {
      // console.log( item.id, navItems[ item.id ] );
      setCurrentNavItem ( navItems[ item.id ] );
    }
  });

}, 100);

window.addEventListener('scroll', myEfficientFn);

//---------------------------------------------

createContent();
