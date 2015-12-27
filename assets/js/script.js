// console.log('hello');

var doc = document;
var aside = $('.l-aside');
var main = $('.l-main');

var navHolder = $.create('ul',{'class':'nav'});
var contentHolder = $.create('div',{'class':'content'});
var demo = $('.demo-wrapper');

//---------------------------------------------

function createContent () {

    for (var i = 0; i < data.length; i++) {
        var item = new Item( data[i] );
    };

    aside.appendChild( navHolder );
    main.appendChild( contentHolder );

}

//---------------------------------------------

function Item ( item ){
    this.item = item;

    var navItem = this.navItemElem ();
    var contentItem = this.ContentItemElem ();

    navHolder.appendChild( navItem );
    contentHolder.appendChild( contentItem );
}

//---------------------------------------------
// NAV
//---------------------------------------------

Item.prototype.navItemElem = function () {

    var elemProps = {
        'class':'nav__item nav__item--' + this.item.name,
        'contents': [
            {
            'tag': 'a',
            'href': '#' + this.item.name,
            'class': 'nav__link',
            'contents': this.item.name,
            'data-parent-nav-item': this.item.name,
            'events': { click: setCurrentNavItem }
            },
            this.navItemValues () ]
    };

    var elem = $.create('li', elemProps);

    return elem;
}

//---------------------------------------------

Item.prototype.navItemValues = function () {
    var items = [];

    if ( !this.item.values ) {
        return;
    }

    for (var i = 0; i < this.item.values.length; i++) {
        items = items.concat( navItemValueLink( this.item.values[i], this.item.name ) );
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
            'data-parent-nav-item': property,
            events: { click: setCurrentNavValue }
            }
    };

    var elem = $.create('li', elemProps);

    return elem;
}

//---------------------------------------------

function setCurrentNavItem ( elem ) {

    var navItemCurrentClass = 'nav__item--current';

    unsetCurrent ( navItemCurrentClass );

    elem = elem.nodeType == 1 ? elem : this;

    var parent = $('.nav__item--' + elem.dataset.parentNavItem);

    parent.classList.add( navItemCurrentClass );
}

//---------------------------------------------

function setCurrentNavValue () {


    var navItemCurrentValClass = 'values-nav__item--current';
    unsetCurrent ( navItemCurrentValClass );

    setCurrentNavItem( this );
    this.parentNode.classList.add( navItemCurrentValClass );

}

//---------------------------------------------
// CONTENT
//---------------------------------------------

Item.prototype.contentItemTitle = function () {
    var elemProps = {
        'class':'content__title',
        'contents': this.item.name
    };

    var elem = $.create('h1', elemProps);
    return elem;
}

//---------------------------------------------

Item.prototype.contentItemLink = function () {
    var linkText = this.item.link.replace('http://www.','');

    var elemProps = {
        'href': this.item.link,
        'contents': linkText,
        'class':'content__link',
    };

    var elem = $.create('a', elemProps);
    return elem;
}

//---------------------------------------------

Item.prototype.contentItemValues = function () {
    var items = [];

    if ( !this.item.values ) {
        return;
    }

    for (var i = 0; i < this.item.values.length; i++) {
        var value = this.item.values[i];
        var id = this.item.name + '__' + value.name;

        items.push(
            {
            tag: 'dt',
            id: id,
            textContent: value.name,
            class: 'values__term values-content__term',
            });
        items.push(
            {
            tag: 'dd',
            textContent: value.desc,
            class: 'values__desc values-content__desc',
            });
    };

    var elemProps = {
        'class':'values values-content',
        'contents': items
    };

    var elem = $.create('dl', elemProps);
    return elem;
}

//---------------------------------------------

function test () {
    console.log( this );
}

//---------------------------------------------

Item.prototype.contentItemDemoValues = function () {
    var items = [];

    if ( !this.item.values ) {
        return;
    }

    for (var i = 0; i < this.item.values.length; i++) {
        var value = this.item.values[i];
        var valElem = $.create({
                'tag': 'button',
                'class': 'values__control demo-values__control',
                'contents': value.name,
                // 'events': {click: test}
            });
        items = items.concat(valElem);
    };

    var elemProps = {
        'class':'values values-demo',
        'contents': items,
        'start': this.demo
    };

    var elem = $.create('ul', elemProps);
    return elem;
}

//---------------------------------------------

Item.prototype.contentItemDemo = function () {
    this.demo = $.clone( demo );
    this.contentItemDemoValues();

    return this.demo;
}
//---------------------------------------------

Item.prototype.ContentItemElem = function ( ) {

    var elemProps = {
        'class':'content__item',
        'id': this.item.name,
        'contents': [
            this.contentItemTitle (),
            this.contentItemLink (),
            // this.contentItemDemo (),
            this.contentItemValues ()
            ]
    };

    var elem = $.create('section', elemProps);

    return elem;
}

//---------------------------------------------
// COMMON
//---------------------------------------------

function unsetCurrent ( className ) {
    var current = $('.' + className);

    if ( current ) {
        current.classList.remove( className );
    }
}

//---------------------------------------------

createContent();
