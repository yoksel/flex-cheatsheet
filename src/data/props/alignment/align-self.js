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
    <div class="child child--huge-text">Some text</div>
    <div class="child"></div>
    <div class="child child--featured"></div>
    <div class="child"></div>
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
