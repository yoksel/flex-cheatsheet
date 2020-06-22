export default {
  name: 'align-content',

  link: 'http://www.w3.org/TR/css-flexbox-1/#align-content-property',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#multi-line-flex-container">multi-line</a> <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>',

  initValue: 'stretch',

  desc: `<p>The <a href="#section-align-content">align-content</a> property aligns a flex container’s lines within the flex container
when there is extra space in the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross-axis</a>,
similar to how <a href="#section-justify-content">justify-content</a> aligns individual items within the <a href="https://www.w3.org/TR/css-flexbox-1/#main-axis">main-axis</a>.
Note, this property has no effect on a <a href="https://www.w3.org/TR/css-flexbox-1/#single-line-flex-container">single-line</a> <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex container</a>.
Values have the following meanings:</p>

<p class="note" role="note"><span>Note:</span> Only <a href="https://www.w3.org/TR/css-flexbox-1/#multi-line-flex-container">multi-line</a> <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a> ever have free space in the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross-axis</a> for lines to be aligned in,
because in a <a href="https://www.w3.org/TR/css-flexbox-1/#single-line-flex-container">single-line</a> flex container
the sole line automatically stretches to fill the space.</p>`,

  values: [
    {
      name: 'flex-start',
      alias: 'valdef-align-content-flex-start',
      desc: `Lines are packed toward the start of the flex container.
The <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> edge of the first line in the flex container
is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> edge of the flex container,
and each subsequent line is placed flush with the preceding line.`,
      current: true
    },

    {
      name: 'flex-end',
      alias: 'valdef-align-content-flex-end',
      desc: `Lines are packed toward the end of the flex container.
The <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> edge of the last line
is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> edge of the flex container,
and each preceding line is placed flush with the subsequent line.`
    },

    {
      name: 'center',
      alias: 'valdef-align-content-center',
      desc: `Lines are packed toward the center of the flex container.
The lines in the flex container are placed flush with each other
and aligned in the center of the flex container,
with equal amounts of space
between the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> content edge of the flex container
and the first line in the flex container,
and between the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> content edge of the flex container
and the last line in the flex container.
(If the leftover free-space is negative,
the lines will overflow equally in both directions.)`
    },

    {
      name: 'space-between',
      alias: 'valdef-align-content-space-between',
      desc: `Lines are evenly distributed in the flex container.
If the leftover free-space is negative
or there is only a single <a href="https://www.w3.org/TR/css-flexbox-1/#flex-line">flex line</a> in the flex container,
this value is identical to <a href="#valdef-align-content-flex-start">flex-start</a>.
Otherwise,
the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> edge of the first line in the flex container
is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> content edge of the flex container,
the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> edge of the last line in the flex container
is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> content edge of the flex container,
and the remaining lines in the flex container are distributed
so that the spacing between any two adjacent lines is the same.`
    },

    {
      name: 'space-around',
      alias: 'valdef-align-content-space-around',
      desc: `Lines are evenly distributed in the flex container,
with half-size spaces on either end.
If the leftover free-space is negative
this value is identical to <a href="#valdef-align-content-center">center</a>.
Otherwise, the lines in the flex container are distributed
such that the spacing between any two adjacent lines is the same,
and the spacing between the first/last lines and the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex container</a> edges
is half the size of the spacing between <a href="https://www.w3.org/TR/css-flexbox-1/#flex-line">flex lines</a>.`
    },

    {
      name: 'stretch',
      alias: 'valdef-align-content-stretch',
      desc: `Lines stretch to take up the remaining space.
If the leftover free-space is negative,
this value is identical to <a href="#valdef-align-content-flex-start">flex-start</a>.
Otherwise,
the free-space is split equally between all of the lines,
increasing their cross size.`
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'align-content': 'stretch',
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
