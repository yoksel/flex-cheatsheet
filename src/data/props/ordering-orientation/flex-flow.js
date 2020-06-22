export default {
  name: 'flex-flow',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-flow-property',

  appliesTo: '<a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>',

  initValue: 'row nowrap',

  desc: `<p>The <a href="#section-flex-flow">flex-flow</a> property is a shorthand for setting the <a href="#section-flex-direction">flex-direction</a> and <a href="#section-flex-wrap">flex-wrap</a> properties,
which together define the flex container’s main and cross axes.</p>

<div class="note" role="note">
  Note that the <a href="#section-flex-flow">flex-flow</a> directions are <a href="https://www.w3.org/TR/css-writing-modes-4/#writing-mode">writing mode</a> sensitive.
In vertical Japanese, for example,
a <a href="#valdef-flex-direction-row">row</a> flex container lays out its contents from top to bottom.
   </div>`,

  values: [
    {
      name: '<a href="#section-flex-direction">&lt;flex-direction></a> || <a href="#section-flex-wrap">&lt;flex-wrap></a>',
      alias: 'flex-flow-values',
      desc: ''
    }
  ],

  customValues: [
    {
      name: 'row nowrap',
      current: true
    },
    {
      name: 'column-reverse'
    },
    {
      name: 'column wrap'
    },
    {
      name: 'row-reverse wrap-reverse'
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'flex',
        'flex-flow': 'row nowrap',
        height: '250px'
      }
    },
    {
      selector: '.child',
      props: {
        width: '40%',
        height: '40%'
      }
    }
  ]
};
