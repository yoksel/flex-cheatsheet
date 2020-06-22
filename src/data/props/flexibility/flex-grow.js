export default {
  name: 'flex-grow',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-grow-property',

  initValue: '0',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>',

  isFeaturedHighlighted: true,

  desc: `<p>The <a href="#section-flex-grow">flex-grow</a> property sets the <a href="#flex-flex-grow-factor">flex grow factor</a> to the provided <dfn id="valdef-flex-grow-number"><a href="https://www.w3.org/TR/css3-values/#number-value">&lt;number></a></dfn>.
Negative numbers are invalid.</p>`,

  values: [
    {
      name: '<a href="https://www.w3.org/TR/css3-values/#number-value">&lt;number></a>',
      alias: 'flex-grow-value',
      desc: ''
    }
  ],

  customValues: [
    {
      name: '0'
    },
    {
      name: '1',
      current: true
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
          'flex-grow': '1'
        }
      }
    ]
};
