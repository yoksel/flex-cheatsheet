export default {
  name: 'display',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-containers',

  appliesTo: 'all elements',

  desc: `<p>A <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex container</a> establishes a new <dfn id="flex-formatting-context">flex formatting context</dfn> for its contents.
This is the same as establishing a block formatting context,
except that flex layout is used instead of block layout.
For example, floats do not intrude into the flex container,
and the flex container’s margins do not collapse with the margins of its contents. <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">Flex containers</a> form a containing block for their contents <a href="https://www.w3.org/TR/CSS2/visudet.html#containing-block-details">exactly like block containers do</a>. <a href="https://www.w3.org/TR/css-flexbox-1/#biblio-css21">[CSS21]</a> The <a href="https://www.w3.org/TR/css-overflow-3/#overflow">overflow</a> property applies to <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>.</p>

<p>Flex containers are not block containers,
and so some properties that were designed with the assumption of block layout don’t apply in the context of flex layout.
In particular:</p>

<ul>
  <li>
    <p class=""><a href="https://www.w3.org/TR/CSS21/visuren.html#float">float</a> and <a href="https://www.w3.org/TR/CSS21/visuren.html#clear">clear</a> do not create floating or clearance of <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a>,
and do not take it out-of-flow.</p>
  </li>

  <li>
    <p><a href="https://www.w3.org/TR/css-inline-3/#vertical-align">vertical-align</a> has no effect on a flex item.</p>
  </li>
  <li>
    <p>the <a href="https://www.w3.org/TR/css-pseudo-4/#selectordef-first-line">::first-line</a> and <a href="https://www.w3.org/TR/css-pseudo-4/#selectordef-first-letter">::first-letter</a> pseudo-elements do not apply to <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>,
and <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a> do not contribute a <a href="https://www.w3.org/TR/css-pseudo-4/#first-formatted-line">first formatted line</a> or <a href="">first letter</a> to their ancestors.</p>
  </li>
</ul>

<p>If an element’s specified <a href="https://www.w3.org/TR/css-display-3/#display">display</a> is <a href="#valdef-display-inline-flex">inline-flex</a>,
then its <a href="https://www.w3.org/TR/css-display-3/#display">display</a> property computes to <a href="#valdef-display-flex">flex</a> in certain circumstances:
the table in <a href="https://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo">CSS 2.1 Section 9.7</a> is amended to contain an additional row,
with <a href="#valdef-display-inline-flex">inline-flex</a> in the "Specified Value" column
and <a href="#valdef-display-flex">flex</a> in the "Computed Value" column.</p>`,

  values: [
    {
      name: 'flex',
      alias: 'valdef-display-flex',
      desc: `This value causes an element to generate a <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex container</a> box
that is <a href="https://www.w3.org/TR/css-display-3/#block-level">block-level</a> when placed in <a href="https://www.w3.org/TR/css-display-3/#flow-layout">flow layout</a>.`,
      current: true
    },
    {
      name: 'inline-flex',
      alias: 'valdef-display-inline-flex',
      desc: `This value causes an element to generate a <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex container</a> box
that is <a href="https://www.w3.org/TR/css-display-3/#inline-level">inline-level</a> when placed in <a href="https://www.w3.org/TR/css-display-3/#flow-layout">flow layout</a>.`
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex'
      }
    }
  ],

  demoBefore: 'Some text'
};
