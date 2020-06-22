export default {
  name: 'justify-content',

  link: 'http://www.w3.org/TR/css-flexbox-1/#justify-content-property',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>',

  initValue: 'flex-start',

  desc: `<p>The <a href="#section-justify-content">justify-content</a> property aligns <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> along the <a href="https://www.w3.org/TR/css-flexbox-1/#main-axis">main axis</a> of the current line of the flex container.
This is done <em>after</em> any flexible lengths and any <a href="https://www.w3.org/TR/css-flexbox-1/#auto-margins">auto margins</a> have been resolved.
Typically it helps distribute extra free space leftover when either
all the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> on a line are inflexible,
or are flexible but have reached their maximum size.
It also exerts some control over the alignment of items when they overflow the line.</p>`,

  values: [
    {
      name: 'flex-start',
      alias: 'valdef-justify-content-flex-start',
      desc: `<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">Flex items</a> are packed toward the start of the line.
The <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> margin edge of the first <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> on the line
is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> edge of the line,
and each subsequent <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> is placed flush with the preceding item.`,
      current: true
    },

    {
      name: 'flex-end',
      alias: 'valdef-justify-content-flex-end',
      desc: `<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">Flex items</a> are packed toward the end of the line.
The <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> margin edge of the last <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> edge of the line,
and each preceding <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> is placed flush with the subsequent item.`
    },

    {
      name: 'center',
      alias: 'valdef-justify-content-center',
      desc: `<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">Flex items</a> are packed toward the center of the line.
The <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> on the line are placed flush with each other
and aligned in the center of the line,
with equal amounts of space between the <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> edge of the line and the first item on the line
and between the <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> edge of the line and the last item on the line.
(If the leftover free-space is negative,
the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> will overflow equally in both directions.)`
    },

    {
      name: 'space-between',
      alias: 'valdef-justify-content-space-between',
      desc: `<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">Flex items</a> are evenly distributed in the line.
If the leftover free-space is negative
or there is only a single <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> on the line,
this value is identical to <a href="#valdef-justify-content-flex-start">flex-start</a>.
Otherwise,
the <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> margin edge of the first <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> on the line
is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#main-start">main-start</a> edge of the line,
the <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> margin edge of the last <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> on the line
is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#main-end">main-end</a> edge of the line,
and the remaining <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> on the line are distributed
so that the spacing between any two adjacent items is the same.`
    },

    {
      name: 'space-around',
      alias: 'valdef-justify-content-space-around',
      desc: `<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">Flex items</a> are evenly distributed in the line,
with half-size spaces on either end.
If the leftover free-space is negative or
there is only a single <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> on the line,
this value is identical to <a href="#valdef-justify-content-center">center</a>.
Otherwise, the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> on the line are distributed
such that the spacing between any two adjacent <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> on the line is the same,
and the spacing between the first/last <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> and the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex container</a> edges
is half the size of the spacing between <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>.`
    },
    {
      name: 'space-evenly',
      alias: 'valdef-justify-content-space-evenly',
      desc: `<p>The <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subjects</a> are evenly distributed in the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>,
with a full-size space on either end.
The <span>alignment subjects</span> are distributed so that the spacing between any two adjacent <span>alignment subjects</span>,
before the first <span>alignment subject</span>,
and after the last <span>alignment subject</span> is the same.

     <p>The default <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a> for this value is <a href="#valdef-justify-content-center">center</a>.</p>`
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex',
        'justify-content': 'flex-start',
        height: '250px'
      }
    }
  ]
};
