// console.log('hello');

var doc = document;
var aside = $('.l-aside');
var main = $('.l-main');
var head = $('head');

var navHolder = $.create('ul',{'class':'nav'});
var contentHolder = $.create('div',{'class':'content'});
var demoWrapper = $('.demo-wrapper');

var stylesHolder = $.create('style',{'id':'flex'});

var demoValueClassCurrent = 'demo-values__control--current';

//---------------------------------------------

function createContent () {

    for (var i = 0; i < data.length; i++) {
        var item = new Item( data[i] );
    };

    aside.appendChild( navHolder );
    main.appendChild( contentHolder );
    head.appendChild( stylesHolder );

    console.log( 'stylesHolder.innerHTML' );
    console.log( stylesHolder.innerHTML );

}

//---------------------------------------------

function Item ( item ){
    this.dataItem = item;

    var navItem = this.navItemElem ();
    navHolder.appendChild( navItem );

    if ( this.dataItem.type && this.dataItem.type == 'subheader' ) {
        return;
    }

    var contentItem = this.ContentItemElem ();
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
            this.navItemValues ()
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

    var elemProps = {
        'class':'nav__item nav__item--' + this.dataItem.name,
        'contents': contents
    };

    var elem = $.create('li', elemProps);

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

    unsetClass ( navItemCurrentClass );

    elem = elem.nodeType == 1 ? elem : this;

    var parent = $('.nav__item--' + elem.dataset.parentNavItem);

    parent.classList.add( navItemCurrentClass );
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

    return elem;
}

//---------------------------------------------

Item.prototype.contentItemTitle = function () {
    var elemProps = {
        'class':'content__title',
        'contents': this.dataItem.name
    };

    var elem = $.create('h1', elemProps);
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
    this.flexItemsElem = $('.flex-items', this.demoWrapper);

    // Class-marker
    this.flexItemsClassName = 'flex-items--' + this.dataItem.name;
    this.flexItemsClass = '.' + this.flexItemsClassName;

    this.flexItemsElem.classList.add( this.flexItemsClassName );

    this.setPropertyClass();

    this.contentItemDemoValues();

    return this.demoWrapper;
}

//---------------------------------------------

Item.prototype.setPropertyClass = function ( valueName ) {

    valueName = valueName ? valueName : this.dataItem.initValue;

    // Class-property
    if ( valueName ) {

        // Remove old property class
        this.flexItemsElem.classList.remove( this.flexItemsPropClassName );

        // Add new property class
        this.flexItemsPropClassName = this.dataItem.name + '--' + valueName;
        this.flexItemsPropClass = '.' + this.flexItemsPropClassName;

        this.flexItemsElem.classList.add( this.flexItemsPropClassName );
    }
}

//---------------------------------------------

Item.prototype.contentItemDemoValues = function () {

    var items = [];
    var parentItem = this;

    if ( !this.dataItem.values ) {
        return;
    }

    for (var i = 0; i < this.dataItem.values.length; i++) {
        var value = this.dataItem.values[i];
        var valElem = new DemoControl( this, value );

        if ( i === 0 ) {
            valElem.classList.add( demoValueClassCurrent );
        }
        console.log( valElem );

        items = items.concat(valElem);
    };

    var elemProps = {
        'class':'values values-demo',
        'contents': items,
        'start': this.demoWrapper
    };

    var elem = $.create('ul', elemProps);
    return elem;
}

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
// DEMO CONTROLS
//---------------------------------------------

function DemoControl( parentObj, value ) {

    var valName = value.name;

    this.elem = $.create({
            'tag': 'button',
            'class': 'values__control demo-values__control',
            'contents': valName,
            'name': valName,
        });

    this.elem.onclick = function( ) {
        parentObj.setPropertyClass( valName );
        // unsetClass ( demoValueClassCurrent );
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
    var parentClass = this.flexItemsClass;
    var childClass = this.flexItemsClass + ' .flex-item';

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

    console.log( containerStyles );

    stylesHolder.innerHTML += containerStyles;

    console.log( stylesHolder.innerHTML );
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

createContent();
