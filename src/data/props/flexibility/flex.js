import flexValues from './flex-values';

export default {
  name: 'flex',

  link: 'https://www.w3.org/TR/css-flexbox-1/#flex-property',

  initValue: '0 1 auto',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a>',

  isFeaturedHighlighted: true,

  desc: `<p>The <a href="#section-flex">flex</a> property specifies the components of a <dfn id="flexible-length">flexible length</dfn>:
the <dfn id="flex-factor">flex factors</dfn> (<a href="#flex-flex-grow-factor">grow</a> and <a href="#flex-flex-shrink-factor">shrink</a>)
and the <a href="#flex-flex-basis">flex basis</a>.
When a box is a <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>, <a href="#section-flex">flex</a> is consulted <em>instead of</em> the <a href="https://www.w3.org/TR/css-flexbox-1/#main-size-property">main size property</a> to determine the <a href="https://www.w3.org/TR/css-flexbox-1/#main-size">main size</a> of the box.
If a box is not a <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>, <a href="#section-flex">flex</a> has no effect.</p>

<p>The initial values of the <a href="#section-flex">flex</a> components are equivalent to <a href="https://www.w3.org/TR/css-flexbox-1/#flex-initial">flex: 0 1 auto</a>.</p>

<p class="note" role="note"><span>Note:</span> The initial values of <a href="#section-flex-grow">flex-grow</a> and <a href="#section-flex-basis">flex-basis</a> are different from their defaults when omitted in the <a href="#section-flex">flex</a> shorthand.
This is so that the <a href="#section-flex">flex</a> shorthand can better accommodate the most <a href="https://www.w3.org/TR/css-flexbox-1/#flex-common">common cases</a>.</p>

<p>A unitless zero that is not already preceded by two flex factors
must be interpreted as a flex factor.
To avoid misinterpretation or invalid declarations,
authors must specify a zero <a href="#section-flex-basis">&lt;flex-basis></a> component
with a unit or precede it by two flex factors.</p>`,

  values: [
    {
      name: 'none | [ <a href="#section-flex-grow">&lt;flex-grow></a> <a href="#section-flex-shrink">&lt;flex-shrink></a> ? || <a href="#section-flex-basis">&lt;flex-basis></a> ]',
      alias: 'flex-value',
      desc: ''
    }
  ],

  children: [
    flexValues
  ]
};
