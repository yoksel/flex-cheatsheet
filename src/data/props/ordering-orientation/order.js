export default {
  name: 'order',

  link: 'https://www.w3.org/TR/css-flexbox-1/#order-property',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>',

  initValue: '0',

  isFeaturedHighlighted: true,

  desc: `<p><a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">Flex items</a> are, by default, displayed and laid out in the same order as they appear in the source document.
The <a href="#section-order">order</a> property can be used to change this ordering.</p>

<p>The <a href="#section-order">order</a> property controls the order in which
flex items appear within the flex container,
by assigning them to ordinal groups.
It takes a single <dfn id="valdef-order-integer"><a href="https://www.w3.org/TR/css3-values/#integer-value">&lt;integer></a></dfn> value,
which specifies which ordinal group the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> belongs to.</p>

<p>A flex container lays out its content in <dfn id="order-modified-document-order">order-modified document order</dfn>,
starting from the lowest numbered ordinal group and going up.
Items with the same ordinal group are laid out in the order they appear in the source document.
This also affects the <a href="https://www.w3.org/TR/CSS2/zindex.html">painting order</a> <a href="https://www.w3.org/TR/css-flexbox-1/#biblio-css21">[CSS21]</a>,
exactly as if the flex items were reordered in the source document.
Absolutely-positioned children of a <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex container</a> are treated as having <a href="#section-order">order: 0</a> for the purpose of determining their painting order relative to <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>.</p>

<p>Unless otherwise specified by a future specification,
this property has no effect on boxes that are not <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>.</p>`,

  values: [
    {
      name: '<a href="https://www.w3.org/TR/css3-values/#integer-value">&lt;integer></a>',
      alias: 'order-values',
      desc: ''
    }
  ],

  customValues: [
    {
      name: '-1'
    },
    {
      name: '0',
      current: true
    },
    {
      name: '1'
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex',
        height: '250px'
      }
    },
    {
      selector: '.child--featured',
      props: {
        order: '0'
      }
    }
  ]
};
