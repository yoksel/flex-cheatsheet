export default {
  name: 'align-self',

  link: 'http://www.w3.org/TR/css-flexbox-1/#propdef-align-self',

  initValue: 'auto',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>',

  isFeaturedHighlighted: true,

  customValues: [
    {
      name: 'auto',
      current: true
    },
    {
      name: 'stretch'
    },
    {
      name: 'flex-start'
    },
    {
      name: 'flex-end'
    },
    {
      name: 'center'
    },
    {
      name: 'baseline'
    }
  ],

  htmlMarkup: `<div class="parent parent--fade-children">
    <div class="child child--featured child--huge-text">Ut enim minim</div>
    <div class="child child--featured">Quis nostrud exercitation neminaes</div>
    <div class="child">Ad veni</div>
    <div class="child">Duis aute irure dolor</div>
  </div>`,

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
        'align-self': 'flex-start'
      }
    }
  ]
};
