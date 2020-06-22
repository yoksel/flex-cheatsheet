export default {
  name: 'flex-wrap',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-wrap-property',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>',

  initValue: 'nowrap',

  desc: `<p>The <a href="#section-flex-wrap">flex-wrap</a> property controls whether the flex container is <a href="https://www.w3.org/TR/css-flexbox-1/#single-line-flex-container">single-line</a> or <a href="https://www.w3.org/TR/css-flexbox-1/#multi-line-flex-container">multi-line</a>,
and the direction of the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross-axis</a>,
which determines the direction new lines are stacked in.</p>

<p>For the values that are not <a href="#valdef-flex-wrap-wrap-reverse">wrap-reverse</a>,
the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> direction is equivalent to either
the <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-start">inline-start</a> or <a href="https://www.w3.org/TR/css-writing-modes-4/#block-start">block-start</a> direction of the current <a href="https://www.w3.org/TR/css-writing-modes-4/#writing-mode">writing mode</a> (whichever is in the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross axis</a>)
and the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> direction is the opposite direction of <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a>.
When <a href="#section-flex-wrap">flex-wrap</a> is <a href="#valdef-flex-wrap-wrap-reverse">wrap-reverse</a>,
the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> and <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> directions
are swapped.</p>`,

  values: [
    {
      name: 'nowrap',
      alias: 'valdef-flex-wrap-nowrap',
      desc: 'The flex container is <a href="https://www.w3.org/TR/css-flexbox-1/#single-line-flex-container">single-line</a>.',
      current: true
    },

    {
      name: 'wrap',
      alias: 'valdef-flex-wrap-wrap',
      desc: 'The flex container is <a href="https://www.w3.org/TR/css-flexbox-1/#multi-line-flex-container">multi-line</a>.'
    },

    {
      name: 'wrap-reverse',
      alias: 'valdef-flex-wrap-wrap-reverse',
      desc: 'Same as <a href="#valdef-flex-wrap-wrap">wrap</a>.'
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex',
        'align-items': 'flex-start',
        'flex-wrap': 'nowrap',
        height: '250px'
      }
    },
    {
      selector: '.child',
      props: {
        width: '40%'
      }
    }
  ]
};
