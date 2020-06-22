export default {
  name: 'flex-direction',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-direction-property',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>',

  initValue: 'row',

  desc: `<p><p>The <a href="#section-flex-direction">flex-direction</a> property specifies how <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> are placed in the flex container,
by setting the direction of the flex container’s <a href="https://www.w3.org/TR/css-flexbox-1/#main-axis">main axis</a>.
This determines the direction in which flex items are laid out.</p>

<p class="note" role="note"><span>Note:</span> The reverse values do not reverse box ordering:
like <a href="https://www.w3.org/TR/css-writing-modes-4/#writing-mode">writing-mode</a> and <a href="https://www.w3.org/TR/css-writing-modes-3/#direction">direction</a> <a href="https://www.w3.org/TR/css-flexbox-1/#biblio-css3-writing-modes">[CSS3-WRITING-MODES]</a>,
they only change the direction of flow.
Painting order, speech order, and sequential navigation orders
are not affected.</p></p>`,

  values: [
    {
      name: 'row',
      alias: 'valdef-flex-direction-row',
      desc: `The flex container’s <a href="https://www.w3.org/TR/css-flexbox-1/#main-axis">main axis</a> has the same orientation as the <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-axis">inline axis</a> of the current <a href="https://www.w3.org/TR/css-writing-modes-4/#writing-mode">writing mode</a>.
The <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> and <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> directions are equivalent to the <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-start">inline-start</a> and <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-end">inline-end</a> directions, respectively,
of the current <a href="https://www.w3.org/TR/css-writing-modes-4/#writing-mode">writing mode</a>.`,
      current: true
    },

    {
      name: 'row-reverse',
      alias: 'valdef-flex-direction-row-reverse',
      desc: `Same as <a href="#valdef-flex-direction-row">row</a>,
except the <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> and <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> directions are swapped.`
    },

    {
      name: 'column',
      alias: 'valdef-flex-direction-column',
      desc: `The flex container’s <a href="https://www.w3.org/TR/css-flexbox-1/#main-axis">main axis</a> has the same orientation as the <a href="https://www.w3.org/TR/css-writing-modes-4/#block-axis">block axis</a> of the current <a href="https://www.w3.org/TR/css-writing-modes-4/#writing-mode">writing mode</a>.
The <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> and <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> directions are equivalent to the <a href="https://www.w3.org/TR/css-writing-modes-4/#block-start">block-start</a> and <a href="https://www.w3.org/TR/css-writing-modes-4/#block-end">block-end</a> directions, respectively,
of the current <a href="https://www.w3.org/TR/css-writing-modes-4/#writing-mode">writing mode</a>.`
    },

    {
      name: 'column-reverse',
      alias: 'valdef-flex-direction-column-reverse',
      desc: `Same as <a href="#valdef-flex-direction-column">column</a>,
except the <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> and <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> directions are swapped.`
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex',
        'flex-direction': 'row',
        height: '250px'
      }
    }
  ]
};
