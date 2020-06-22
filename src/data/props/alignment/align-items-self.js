import alignItems from './align-items';
import alignSelf from './align-self';

export default {
  name: 'align-items, align-self',
  alias: 'align-items-self',

  link: 'https://www.w3.org/TR/css-flexbox-1/#align-items-property',

  desc: `<p><a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">Flex items</a> can be aligned in the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross axis</a> of the current line of the flex container,
similar to <a href="#section-justify-content">justify-content</a> but in the perpendicular direction. <a href="#section-align-items">align-items</a> sets the default alignment for all of the flex container’s <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">items</a>,
including anonymous <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>. <a href="#section-align-self">align-self</a> allows this default alignment to be overridden for individual <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>.
(For anonymous flex items, <a href="#section-align-self">align-self</a> always matches the value of <a href="#section-align-items">align-items</a> on their associated flex container.)</p>

<p>If either of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item’s</a> cross-axis margins are <a href="">auto</a>, <a href="#section-align-self">align-self</a> has no effect.</p>`,

  values: [
    {
      name: 'auto',
      alias: 'valdef-align-items-auto',
      desc: `Defers <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross-axis</a> alignment control
to the value of <a href="#section-align-items">align-items</a> on the parent box.
(This is the initial value of <a href="#section-align-self">align-self</a>.)`,
      current: true
    },

    {
      name: 'flex-start',
      alias: 'valdef-align-items-flex-start',
      desc: 'The <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> margin edge of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> edge of the line.'
    },

    {
      name: 'flex-end',
      alias: 'valdef-align-items-flex-end',
      desc: 'The <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> margin edge of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-end">cross-end</a> edge of the line.'
    },

    {
      name: 'center',
      alias: 'valdef-align-items-center',
      desc: `The <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>’s margin box is centered in the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross axis</a> within the line.
(If the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-size">cross size</a> of the flex line is less than that of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>,
it will overflow equally in both directions.)`
    },

    {
      name: 'baseline',
      alias: 'valdef-align-items-baseline',
      desc: `The <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> <dfn id="baseline-participation">participates in baseline alignment</dfn>:
all participating <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> on the line
are aligned such that their baselines align,
and the item with the largest distance between its baseline and its <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> margin edge
is placed flush against the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> edge of the line.
If the item does not have a baseline in the necessary axis,
then one is <a href="https://www.w3.org/TR/css3-align/#synthesize-baseline">synthesized</a> from the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>’s border box.`
    },

    {
      name: 'stretch',
      alias: 'valdef-align-items-stretch',
      desc: `If the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-size-property">cross size property</a> of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> computes to <a href="https://www.w3.org/TR/css-sizing-3/#valdef-width-auto">auto</a>,
and neither of the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross-axis</a> margins are <code>auto</code>,
the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> is <dfn id="stretched">stretched</dfn>.
Its used value is the length necessary to make the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-size">cross size</a> of the item’s margin box as close to the same size as the line as possible,
while still respecting the constraints imposed by <a href="https://www.w3.org/TR/CSS21/visudet.html#min-height">min-height</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#min-width">min-width</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#max-height">max-height</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#max-width">max-width</a>.
     <p class="note" role="note"><span>Note:</span> If the flex container’s height is constrained
this value may cause the contents of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> to overflow the item.</p>
     <p>The <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> margin edge of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> is placed flush with the <a href="https://www.w3.org/TR/css-flexbox-1/#cross-start">cross-start</a> edge of the line.</p>`
    }
  ],

  demos: [
    alignItems,
    alignSelf
  ]
};
