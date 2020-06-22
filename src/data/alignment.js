import justifyContent from './props/alignment/justify-content';
import alignContent from './props/alignment/align-content';
import alignItemsSelf from './props/alignment/align-items-self';

export default {
  title: 'Alignment',
  alias: 'alignment',

  link: 'https://www.w3.org/TR/css-flexbox-1/#alignment',

  desc: `<p>After a flex container’s contents have finished their flexing
and the dimensions of all flex items are finalized,
they can then be aligned within the flex container.</p>

<p>The <a href="https://www.w3.org/TR/CSS21/box.html#margin">margin</a> properties can be used to align items in a manner similar to, but more powerful than, what margins can do in block layout. <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">Flex items</a> also respect the alignment properties from <a href="https://www.w3.org/TR/css3-align/">CSS Box Alignment</a>,
which allow easy keyword-based alignment of items in both the <a href="https://www.w3.org/TR/css-flexbox-1/#main-axis">main axis</a> and <a href="https://www.w3.org/TR/css-flexbox-1/#cross-axis">cross axis</a>.
These properties make many common types of alignment trivial,
including some things that were very difficult in CSS 2.1,
like horizontal and vertical centering.</p>

<p class="note" role="note"><span>Note:</span> While the alignment properties are defined in <a href="https://www.w3.org/TR/css3-align/">CSS Box Alignment</a> <a href="https://www.w3.org/TR/css-flexbox-1/#biblio-css-align-3">[CSS-ALIGN-3]</a>,
Flexible Box Layout reproduces the definitions of the relevant ones here
so as to not create a normative dependency that may slow down advancement of the spec.
These properties apply only to flex layout
until <a href="https://www.w3.org/TR/css3-align/">CSS Box Alignment Level 3</a> is finished
and defines their effect for other layout modes.
Additionally, any new values defined in the Box Alignment module
will apply to Flexible Box Layout;
in otherwords, the Box Alignment module, once completed,
will supercede the definitions here.</p>`,

  items: [
    justifyContent,
    alignItemsSelf,
    alignContent
  ]
};
