import flexDirection from './props/ordering-orientation/flex-direction';
import flexWrap from './props/ordering-orientation/flex-wrap';
import flexFlow from './props/ordering-orientation/flex-flow';
import order from './props/ordering-orientation/order';

export default {
  title: 'Ordering & Orientation',
  alias: 'ordering-orientation',

  link: 'https://www.w3.org/TR/css-flexbox-1/#flow-order',

  desc: `<p>The contents of a flex container can be laid out in any direction and in any order.
This allows an author to trivially achieve effects that would previously have required complex or fragile methods,
such as hacks using the <a href="https://www.w3.org/TR/CSS21/visuren.html#float">float</a> and <a href="https://www.w3.org/TR/CSS21/visuren.html#clear">clear</a> properties.
This functionality is exposed through the <a href="#section-flex-direction">flex-direction</a>, <a href="#section-flex-wrap">flex-wrap</a>, and <a href="#section-order">order</a> properties.</p>

<p class="note" role="note"><span>Note:</span> The reordering capabilities of flex layout intentionally affect <em>only the visual rendering</em>,
leaving speech order and navigation based on the source order.
This allows authors to manipulate the visual presentation
while leaving the source order intact for non-CSS UAs and for
linear models such as speech and sequential navigation.
See <a href="https://www.w3.org/TR/css-flexbox-1/#order-accessibility">Reordering and Accessibility</a> and the <a href="https://www.w3.org/TR/css-flexbox-1/#overview">Flex Layout Overview</a> for examples
that use this dichotomy to improve accessibility.</p>

<p><strong class="advisement"> Authors <em>must not</em> use <a href="#section-order">order</a> or the <code>*-reverse</code> values of <a href="#section-flex-flow">flex-flow</a>/<a href="#section-flex-direction">flex-direction</a> as a substitute for correct source ordering,
as that can ruin the accessibility of the document.</strong></p>`,

  items: [
    flexDirection,
    flexWrap,
    flexFlow,
    order
  ]
};
