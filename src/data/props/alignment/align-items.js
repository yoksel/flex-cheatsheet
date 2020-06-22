export default {
  name: 'align-items',

  link: 'http://www.w3.org/TR/css-flexbox-1/#propdef-align-items',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>',

  initValue: 'stretch',

  customValues: [
    {
      name: 'stretch',
      current: true
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
    },
    {
      name: 'auto'
    }
  ],

  htmlMarkup: `<div class="parent parent--fade-children">
    <div class="child child--huge-text">Ut enim minim</div>
    <div class="child">Ad veni</div>
    <div class="child">Quis nostrud exercitation neminaes</div>
    <div class="child">Duis aute irure dolor</div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex',
        'align-items': 'stretch',
        height: '250px'
      }
    }
  ]
};
