export default {
  name: 'Flex values',
  alias: 'flex-values',

  isFeaturedHighlighted: true,

  propDemoName: 'flex',

  values: [
    {
      name: '&lt;flex-grow>',
      alias: 'valdef-flex-flex-grow',
      desc: `<p>This <a href="https://www.w3.org/TR/css3-values/#number-value">&lt;number></a> component sets <a href="#section-flex-grow">flex-grow</a> <a href="https://www.w3.org/TR/css-flexbox-1/#flex-components">longhand</a> and specifies the <dfn id="flex-flex-grow-factor">flex grow factor</dfn>,
which determines how much the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> will grow
relative to the rest of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> in the flex container
when positive free space is distributed.
When omitted, it is set to <code>1</code>.</p>

     <details class="note">
      <summary>Flex values between 0 and 1 have a somewhat special behavior:
when the sum of the flex values on the line is less than 1,
they will take up less than 100% of the free space.</summary>
      <p>An item’s <a href="#section-flex-grow">flex-grow</a> value
is effectively a request for some proportion of the free space,
with <code>1</code> meaning “100% of the free space”;
then if the items on the line are requesting more than 100% in total,
the requests are rebalanced to keep the same ratio but use up exactly 100% of it.
However, if the items request <em>less</em> than the full amount
(such as three items that are each <a href="#section-flex-grow">flex-grow: .25</a>)
then they’ll each get exactly what they request
(25% of the free space to each,
with the final 25% left unfilled).
See <a href="https://www.w3.org/TR/css-flexbox-1/#resolve-flexible-lengths">§9.7 Resolving Flexible Lengths</a> for the exact details
of how free space is distributed.</p>

      <p>This pattern is required for continuous behavior as <a href="#section-flex-grow">flex-grow</a> approaches zero
(which means the item wants <em>none</em> of the free space).
Without this, a <a href="#section-flex-grow">flex-grow: 1</a> item would take all of the free space;
but so would a <a href="#section-flex-grow">flex-grow: 0.1</a> item,
and a <a href="#section-flex-grow">flex-grow: 0.01</a> item,
etc.,
until finally the value is small enough to underflow to zero
and the item suddenly takes up none of the free space.
With this behavior,
the item instead gradually takes less of the free space
as <a href="#section-flex-grow">flex-grow</a> shrinks below <code>1</code>,
smoothly transitioning to taking none of the free space at zero.</p>

      <p>Unless this “partial fill” behavior is <em>specifically</em> what’s desired,
authors should stick to values ≥ 1;
for example, using <code>1</code> and <code>2</code> is usually better
than using <code>.33</code> and <code>.67</code>,
as they’re more likely to behave as intended
if items are added, removed, or line-wrapped.</p>
     </details>`
    },

    {
      name: '&lt;flex-shrink>',
      alias: 'valdef-flex-flex-shrink',
      desc: `<p>This <a href="https://www.w3.org/TR/css3-values/#number-value">&lt;number></a> component sets <a href="#section-flex-shrink">flex-shrink</a> <a href="https://www.w3.org/TR/css-flexbox-1/#flex-components">longhand</a> and specifies the <dfn id="flex-flex-shrink-factor">flex shrink factor</dfn>,
which determines how much the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> will shrink
relative to the rest of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> in the flex container
when negative free space is distributed.
When omitted, it is set to <code>1</code>.</p>

     <p class="note" role="note"><span>Note:</span> The <a href="#flex-flex-shrink-factor">flex shrink factor</a> is multiplied by the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-base-size">flex base size</a> when distributing negative space.
This distributes negative space in proportion to how much the item is able to shrink,
so that e.g. a small item won’t shrink to zero before a larger item has been noticeably reduced.</p>`
    },

    {
      name: '&lt;flex-basis>',
      alias: 'valdef-flex-flex-basis',
      desc: `<p>This component sets the <a href="#section-flex-basis">flex-basis</a> <a href="https://www.w3.org/TR/css-flexbox-1/#flex-components">longhand</a>,
which specifies the <dfn id="flex-flex-basis">flex basis</dfn>:
the initial <a href="https://www.w3.org/TR/css-flexbox-1/#main-size">main size</a> of the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>,
before free space is distributed according to the flex factors.</p>

     <p><a href="#section-flex-basis">&lt;flex-basis></a> accepts the same values as the <a href="https://www.w3.org/TR/CSS21/visudet.html#width">width</a> and <a href="https://www.w3.org/TR/CSS21/visudet.html#height">height</a> properties
(except that <a href="#valdef-flex-basis-auto">auto</a> is treated differently)
plus the <a href="#valdef-flex-basis-content">content</a> keyword:</p>
     <dl>

  <dt>
    <dfn id="valdef-flex-basis-auto">auto</dfn>

  </dt>
  <dd>
    When specified on a <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>, the <a href="#valdef-flex-basis-auto">auto</a> keyword
retrieves the value of the <a href="https://www.w3.org/TR/css-flexbox-1/#main-size-property">main size property</a> as the used <a href="#section-flex-basis">flex-basis</a>.
If that value is itself <a href="#valdef-flex-basis-auto">auto</a>, then the used value is <a href="#valdef-flex-basis-content">content</a>.

  </dd>
  <dt>
    <dfn id="valdef-flex-basis-content">content</dfn>

  </dt>
  <dd>
    Indicates an <a href="https://www.w3.org/TR/css-flexbox-1/#algo-main-item">automatic size</a> based on the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>’s content.
(It is typically equivalent to the <a href="https://www.w3.org/TR/css-sizing-3/#max-content">max-content size</a>,
but with adjustments to handle aspect ratios,
intrinsic sizing constraints,
and orthogonal flows;
see <a href="https://www.w3.org/TR/css-flexbox-1/#algo-main-item">details</a> in <a href="https://www.w3.org/TR/css-flexbox-1/#layout-algorithm">§9 Flex Layout Algorithm</a>.)
       <p class="note" role="note"><span>Note:</span> This value was not present in the initial release of Flexible Box Layout,
and thus some older implementations will not support it.
The equivalent effect can be achieved by using <code>auto</code> together with a main size (<a href="https://www.w3.org/TR/CSS21/visudet.html#width">width</a> or <a href="https://www.w3.org/TR/CSS21/visudet.html#height">height</a>) of <a href="https://www.w3.org/TR/css-sizing-3/#valdef-width-auto">auto</a>.</p>

  </dd>
  <dt>
    <a href="https://www.w3.org/TR/CSS21/visudet.html#width"><b>&lt;width></b></a>

  </dt>
  <dd>
    For all other values, <a href="#section-flex-basis">flex-basis</a> is resolved the same way as for <a href="https://www.w3.org/TR/CSS21/visudet.html#width">width</a> and <a href="https://www.w3.org/TR/CSS21/visudet.html#height">height</a>.

  </dd>
</dl>
     <p>When omitted from the <a href="#section-flex">flex</a> shorthand, its specified value is <code>0</code>.</p>`
    },

    {
      name: 'none',
      alias: 'valdef-flex-none',
      desc: 'The keyword <a href="#valdef-flex-none">none</a> expands to <code>0 0 auto</code>.'
    }
  ],

  customValues: [
    {
      name: '0 1 auto',
      current: true
    },
    {
      name: '0 1 30%'
    },
    {
      name: '1 0 30%'
    },
    {
      name: 'none'
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
        flex: '0 1 auto'
      }
    }
  ]
};
