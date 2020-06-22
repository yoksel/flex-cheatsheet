export default {
  name: 'flex-basis',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-basis-property',

  initValue: 'auto',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>',

  isFeaturedHighlighted: true,

  desc: `<p>The <a href="#section-flex-basis">flex-basis</a> property sets the <a href="#flex-flex-basis">flex basis</a>.
It accepts the same values as the <a href="https://www.w3.org/TR/CSS21/visudet.html#width">width</a> and <a href="https://www.w3.org/TR/CSS21/visudet.html#height">height</a> property, plus <a href="#valdef-flex-basis-content">content</a>.</p>

<p>For all values other than <a href="#valdef-flex-basis-auto">auto</a> and <a href="#valdef-flex-basis-content">content</a> (defined above), <a href="#section-flex-basis">flex-basis</a> is resolved the same way as <a href="https://www.w3.org/TR/CSS21/visudet.html#width">width</a> in horizontal writing modes <a href="https://www.w3.org/TR/css-flexbox-1/#biblio-css21">[CSS21]</a>,
except that if a value would resolve to <a href="https://www.w3.org/TR/css-sizing-3/#valdef-width-auto">auto</a> for <a href="https://www.w3.org/TR/CSS21/visudet.html#width">width</a>,
it instead resolves to <a href="#valdef-flex-basis-content">content</a> for <a href="#section-flex-basis">flex-basis</a>.
For example, percentage values of <a href="#section-flex-basis">flex-basis</a> are resolved against
the flex item’s containing block (i.e. its <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex container</a>);
and if that containing block’s size is <a href="https://www.w3.org/TR/css-flexbox-1/#definite">indefinite</a>,
the used value for <a href="#section-flex-basis">flex-basis</a> is <a href="#valdef-flex-basis-content">content</a>.
As another corollary, <a href="#section-flex-basis">flex-basis</a> determines the size of the content box,
unless otherwise specified
such as by <a href="https://www.w3.org/TR/css-sizing-3/#box-sizing">box-sizing</a> <a href="https://www.w3.org/TR/css-flexbox-1/#biblio-css3ui">[CSS3UI]</a>.</p>`,

  values: [
    {
      name: 'content | <a href="https://www.w3.org/TR/CSS21/visudet.html#width">&lt;width></a>',
      alias: 'flex-basis-value',
      desc: ''
    }
  ],

  customValues: [
    {
      name: '30%',
      current: true
    },
    {
      name: '50%'
    },
    {
      name: 'content'
    },
    {
      name: 'auto'
    }
  ],

  htmlMarkup: `<div class="parent parent--fade-children">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child child--featured">Some text</div>
    <div class="child"></div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex',
        'flex-wrap': 'wrap',
        height: '250px'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'flex-basis': '30%'
      }
    }
  ]
};
