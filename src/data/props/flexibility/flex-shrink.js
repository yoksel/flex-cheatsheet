export default {
  name: 'flex-shrink',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-shrink-property',

  initValue: '1',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>',

  isFeaturedHighlighted: true,

  desc: `<p>The <a href="#section-flex-shrink">flex-shrink</a> property sets the <a href="#flex-flex-shrink-factor">flex shrink factor</a> to the provided <dfn id="valdef-flex-shrink-number"><a href="https://www.w3.org/TR/css3-values/#number-value">&lt;number></a></dfn>.
Negative numbers are invalid.</p>`,

  values: [
    {
      name: '<a href="https://www.w3.org/TR/css3-values/#number-value">&lt;number></a>',
      alias: 'flex-shrink-value',
      desc: ''
    }
  ],

  customValues: [
    {
      name: '1',
      current: true
    },
    {
      name: '0'
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
      selector: '.child',
      props: {
        width: '45%'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'flex-shrink': '1'
      }
    }
  ]
};
