'use strict';

var $ = tinyLib;

var doc = document;
var inputText = doc.querySelector('#code-input')
var outputText = doc.querySelector('#code-output')
var view = doc.querySelector('.view')

//---------------------------------------------

function parseCode() {
  view.innerHTML = inputText.value;
  outputText.value = '';
  var output = '';
  var propsList = $.get( '.propdef' );
  var offset = '  ';

  if ( propsList == undefined ) {
    return;
  }

  propsList.forEach ( function( item ) {

    // console.log(item, '\n\n');
    var propItem = new Item( item );
    // console.log( propItem.getPropName() );

    var outPuts = [
      [ offset + "name", propItem.name ],
      [ offset + "link", propItem.link ],
      [ offset + "initValue", propItem.initVal ],
      [ offset + "target", propItem.getTarget() ],
      [ offset + "desc", propItem.desc ],
      [ offset + "values", propItem.values ]
    ];

    var outPutsStrings = [];

    outPuts.forEach( function( item ) {
      outPutsStrings.push( item.join(': '));
    });

    output += 'data[ data.length] = {\n' + outPutsStrings.join(',\n\n') + '\n}\n\n';

    // $.out('outPuts', 'h3');
    // console.log( outPuts );
    $.out(outPuts[0][1], 'h3');
    console.table( outPuts );

  });

  outputText.value = output;

// outputText.value = JSON.stringify(outPuts);

// output += 'customValues: [],\n\n';
  // output += 'cssRules: [],\n\n';

  // outputText.value = output;
}

//---------------------------------------------

function Item( elem ) {
  // console.log( elem );
  this.elemSet = elem;
  this.name = this.getPropName();
  this.link = this.getPropLink();
  this.initVal = this.getInitVal();
  this.values = this.getValues();
  this.desc = this.getPropDesc();
};

//---------------------------------------------

Item.prototype.getPropName = function() {

  var elem = this.elemSet.elem.querySelector('.propdef tr:first-child td' );

  if ( elem ) {
    return elem.innerText;
  }

  return '';
}

//---------------------------------------------

Item.prototype.getPropLink = function () {
  return 'http://www.w3.org/TR/css3-flexbox/#' + this.name + '-property';
};

//---------------------------------------------

Item.prototype.getInitVal = function () {
  var elem = this.elemSet.elem.querySelector( '.propdef tr:nth-child(3) td' );

  if ( elem ) {
    return elem.innerText;
  }

  return '';
}

//---------------------------------------------

Item.prototype.getTarget = function () {
  var elem = this.elemSet.elem.querySelector( '.propdef tr:nth-child(4) td a' );

  if ( elem ) {
    return elem.innerText;
  }

  return '';
}

//---------------------------------------------

Item.prototype.getValues = function () {
  var elem = this.elemSet.elem;
  this.nextElems = findNextElem( elem );
  var values = [];

  if ( this.nextElems.length > 0 && this.nextElems.DL ) {
    var childNodes = this.nextElems.DL[0].childNodes;

    childNodes.forEach = [].forEach;

    childNodes.forEach ( function ( item ) {
      if ( item.tagName === 'DT' ) {
        values.push( { name: item.innerText } );
      }
      else if ( item.tagName === 'DD' ) {
        values[ values.length-1].desc = item.innerHTML;
      }
    });
    // console.log( values );
  }
  return values;
};

//---------------------------------------------

function findNextElem( elem ) {
  var counter = 0;
  var tags = {};
  tags.length = 0;

  // console.log( elem.classList.contains('heading'));

  while ( !elem.classList.contains('heading') && counter < 10 ) {
    elem = elem.nextElementSibling;

    if ( !tags[ elem.tagName ] ) {
      tags[ elem.tagName ] = [];
      tags.length++;
    }

    tags[ elem.tagName ].push( elem )
    // console.log( counter, elem.tagName );
    counter++;
  }

  // console.log(tags);

  return tags;
}

//---------------------------------------------

Item.prototype.getPropDesc = function() {

  var descItems = [];

  if ( this.nextElems.length > 0 && this.nextElems.P ) {
    var childNodes = this.nextElems.P;

    childNodes.forEach ( function ( item ) {
      if ( item.tagName === 'P' ) {
        descItems.push( item.innerHTML );
      }
    });

    $.out('descItems', 'h4');
    console.log( descItems );
  }

  // propDesc = propDesc.replace(/<a([^>]+)>/g, '<code>');
  // propDesc = propDesc.replace(/<\/a>/g, '</code>');
  // propDesc = propDesc.replace(/[\n]/g, '');

  return descItems.join('\n');
}

//---------------------------------------------

parseCode();

inputText.oninput = function(){
  parseCode();
};

inputText.onchange = function(){
  parseCode();
};
