'use strict';

var $ = tinyLib;

var doc = document;
var inputText = doc.querySelector('#code-input')
var outputText = doc.querySelector('#code-output')
var view = doc.querySelector('.view')

// view.innerHTML = input.value;

inputText.oninput = function(){
  parseCode();
};

inputText.onchange = function(){
  parseCode();
};


function parseCode() {
  view.innerHTML = inputText.value;
  outputText.value = '';
  var output = '';

  console.log($.get( '.propdef .dfn-paneled' ));

  if ( $.get( '.propdef .dfn-paneled' ) == undefined ) {
    // return;
  }
  var propName = $.get( '.propdef .dfn-paneled' ).html();
  var propInitial = $.get( '.propdef tr:nth-child(3) td' ).html();
  var propTarget = $.get( '.propdef tr:nth-child(4) td a' ).html();

  var propDescList = $.get('p');
  var propDesc = '';

  if ( propDescList.length > 1 ) {
    propDescList.forEach( function(item, i) {
      propDesc += item.elem.outerHTML;
    });
  }
  else {
    propDesc = propDescList.elem.outerHTML;
  }

  propDesc = propDesc.replace(/<a([^>]+)>/g, '<code>');
  propDesc = propDesc.replace(/<\/a>/g, '</code>');
  propDesc = propDesc.replace(/[\n]/g, '');

  propInitial = propInitial.replace(/[\n ]/g,'');

  output += 'name: \'' + propName + '\',\n\n';
  output += 'link: \'http://www.w3.org/TR/css3-flexbox/#' + propName + '-property\',\n\n';
  output += 'initValue: \'' + propInitial + '\',\n\n';
  output += 'target: \'' + propTarget + '\',\n\n';
  output += 'desc: \'' + propDesc + '\',\n\n';
  output += 'customValues: [],\n\n';
  output += 'cssRules: [],\n\n';

  outputText.value = output;
}
