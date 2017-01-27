'use strict';

var $ = tinyLib;

var doc = document;
var inputText = doc.querySelector('#code-input');
var outputText = doc.querySelector('#code-output');
var view = doc.querySelector('.view');
var linkToSpec = 'https://www.w3.org/TR/css-flexbox-1/';

//---------------------------------------------

function parseCode() {
  view.innerHTML = inputText.value;
  outputText.value = '';
  var output = '';
  var propsList = $.get( '.propdef' );
  var offset = '    ';

  if ( propsList === undefined ) {
    return;
  }

  propsList.forEach ( function( item ) {
    var propItem = new Item( item );
    var outPuts = [
      [
        offset + 'name',
        propItem.name
      ],
      [
        offset + 'link',
        propItem.link
      ],
      [
        offset + 'initValue',
        propItem.initVal
      ],
      [
        offset + 'target',
        propItem.target
      ],
      [
        offset + 'desc',
        propItem.desc
      ],
      [
        offset + 'values',
        propItem.values
      ]
    ];

    var outPutsStrings = [];

    outPuts.forEach( function( item ) {
      var content = item[1];

      if ( typeof content === 'string') {
        content = '\'' + content + '\'';
      }
      else if ( content && typeof content === 'object') {
        content = beautyJSON( content );
      }
      item[1] = content;

      outPutsStrings.push( item.join(': '));
    });

    output += 'data[ data.length] = {\n' + outPutsStrings.join(',\n\n') + '\n};\n\n';

  });

  outputText.value = output;
}

//---------------------------------------------

function Item( elem ) {
  this.elemSet = elem;
  this.name = this.getPropName();
  this.link = this.getPropLink();
  this.initVal = this.getInitVal();
  this.values = this.getValues();
  this.desc = this.getPropDesc();
  this.target = this.getTarget();
}

//---------------------------------------------

Item.prototype.getPropName = function() {
  var elem = this.elemSet.elem.querySelector('.propdef tr:first-child td' );

  if ( elem ) {
    return elem.innerText;
  }

  return '';
};

//---------------------------------------------

Item.prototype.getPropLink = function () {
  return linkToSpec + '#' + this.name + '-property';
};

//---------------------------------------------

Item.prototype.getInitVal = function () {
  var elem = this.elemSet.elem.querySelector( '.propdef tr:nth-child(3) td' );

  if ( elem ) {
    return elem.innerText;
  }

  return null;
};

//---------------------------------------------

Item.prototype.getTarget = function () {
  var elem = this.elemSet.elem.querySelector( '.propdef tr:nth-child(4) td a' );

  if ( elem ) {
    return elem.innerText;
  }

  return null;
};

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
        var desc = item.innerHTML;
        desc = clearText( desc );
        values[ values.length-1].desc = desc;
      }
    });
  }

  return values;
};

//---------------------------------------------

function findNextElem( elem ) {
  var counter = 0;
  var tags = {};
  tags.length = 0;

  while ( !elem.classList.contains('heading') && counter < 10 ) {
    elem = elem.nextElementSibling;

    if ( !tags[ elem.tagName ] ) {
      tags[ elem.tagName ] = [];
      tags.length++;
    }

    tags[ elem.tagName ].push( elem );
    counter++;
  }

  return tags;
}

//---------------------------------------------

Item.prototype.getPropDesc = function() {
  var descItems = [];

  if ( this.nextElems.length > 0 && this.nextElems.P ) {
    var childNodes = this.nextElems.P;

    childNodes.forEach ( function ( item ) {
      if ( item.tagName === 'P' ) {
        var content = item.outerHTML;
        content = clearText( content );

        descItems.push( content );
      }
    });
  }

  return descItems.join('');
};

//---------------------------------------------

function clearText( text ) {
  text = text.replace(/class=".*?"|data-.*?=".*?"|id=".*?"/g, '');
  text = text.replace(/\n/g, ' ');
  text = text.replace(/\s+/g, ' ');
  text = text.trim();

  text = text.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/g, linkReplace);
  text = text.replace(/"/g,"\\'");

  return text;
}

//---------------------------------------------

function linkReplace(str, url, text) {
  if ( url.search(/^http/) >= 0 ) {
    return str;
  }
  else if ( url.search(/biblio/) >= 0 ) {
    return '';
  }
  else if ( !text ) {
    return '';
  }

  return '<i>' + text + '</i>';
}

//---------------------------------------------

function beautyJSON( content ) {
  if ( content.length === 0 ) {
    return '';
  }

  content = JSON.stringify( content, null, '  ' );
  content = content.replace(/(\\){2,}/g,'\\');
  content = content.replace(/"/g,"'");
  content = content.replace(/'\w{2,5}'/g,'$&');
  content = content.replace(/  /g,'    ');

  return content;
}

//---------------------------------------------

parseCode();

inputText.oninput = parseCode;
inputText.onchange = parseCode;
