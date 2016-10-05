// Tiny library

//---------------------------------
// http://checkman.io/blog/creating-a-javascript-library/
// http://code.tutsplus.com/tutorials/build-your-first-javascript-library--net-26796
//http://lea.verou.me/2015/04/idea-extending-native-dom-prototypes-without-collisions/

(function( window ){

    'use strict';

    function define_library () {

        var tinyLib = {};
        var doc = document;
        var ns = 'http://www.w3.org/2000/svg';

        function ElemSet( elem ) {
          this.elem = elem;
        }

        //---------------------------------

        tinyLib.get = function( selector ) {
          var nodeList = doc.querySelectorAll( selector );
          var elemsArr = Array.prototype.slice.call( nodeList );

          var elemsList = elemsArr.map( function( item ) {
            return new ElemSet( item );
          });

          if ( elemsList.length === 1 ) {
            return elemsList[0];
          }

          return elemsList;
        };

        //---------------------------------

        tinyLib.create = function ( tagName ) {
          var elem = doc.createElement( tagName );
          return new ElemSet( elem );
        };

        //---------------------------------

        tinyLib.createNS = function( elemName ) {
          var elem = doc.createElementNS( ns, tagName );
          return new ElemSet( elem );
        };

        //------------------------------
        // ElemSet Methods

        ElemSet.prototype.addClass = function ( classNames ) {
          var elem = this.elem;

          if ( typeof classNames === 'string') {
            classNames = [classNames];
          }

          classNames.forEach( function ( className ){
            elem.classList.add( className );
          });

          return this;
        };

        //---------------------------------

        ElemSet.prototype.removeClass = function ( classNames ) {

          var elem = this.elem;

          if ( typeof classNames === 'string') {
              classNames = [classNames];
          }

          classNames.forEach( function ( className ){
              elem.classList.remove( className );
          });

          return this;
        };

        //---------------------------------

        ElemSet.prototype.append = function( elem ) {

          var elemToAdd = elem.elem;

          if ( typeof elem === 'string' ) {
            elemToAdd = tinyLib.create( elem ).elem;
          }

          this.elem.appendChild( elemToAdd );

          return this;
        };

        //---------------------------------

        ElemSet.prototype.prepend = function( elem ) {

          var elemToAdd = elem.elem;

          if ( typeof elem === 'string' ) {
            elemToAdd = tinyLib.create( elem ).elem;
          }

          this.elem.insertBefore( elemToAdd, this.elem.firstChild );

          return this;
        };

        //---------------------------------

        ElemSet.prototype.attr = function( attrName, attrVal ) {

          var elem = this.elem;
          var attrSet = {};

          if ( attrVal ) {
            attrSet[ attrName ] = attrVal;
          }
          else if ( typeof attrName === 'object' ) {
            attrSet = attrName;
          }

          if ( Object.keys(attrSet).length > 0 ) {
            for ( var key in attrSet ) {
              elem.setAttribute( key, attrSet[ key ]);
            }
            return this;
          }

          var out = elem.getAttribute( attrName );
          return out;

        };

        //---------------------------------

        ElemSet.prototype.val = function ( content ) {
          if ( !content ) {
            return this.elem.value;
          }

          this.elem.value = content;
          return this;
        };

        //---------------------------------

        ElemSet.prototype.html = function ( content ) {
          var elem = this.elem;

          if( content ) {
            elem.innerHTML = content;
            return this;
          }

          return elem.innerHTML;
        };

        //---------------------------------
        // Colored console output

        var consoleStyles = {
          'h1': 'font: 2.5em/1 Arial; color: crimson;',
          'h2': 'font: 2em/1 Arial; color: orangered;',
          'h3': 'font: 1.6em/1 Arial; color: olivedrab;',
          'h4': 'font: bold 1.3em/1 Arial; color: midnightblue',
          'warn': 'padding: 0 .3rem; background: crimson; font: 2em/1 Arial; color: white'
        };

        tinyLib.out = function( msg, style ) {
          if ( !style || !consoleStyles[ style ] ) {
            style = '';
          }
          console.log( '%c' + msg, consoleStyles[ style ] );
        };

        tinyLib.dir = function( msg ) {
          console.dir( msg );
        };

        //---------------------------------

        return tinyLib;
    }

    //---------------------------------

    if ( typeof tinyLib === 'undefined' ) {
        window.tinyLib = define_library();
    }

})(window);
