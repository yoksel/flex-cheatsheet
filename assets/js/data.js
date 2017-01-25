var accentColor = 'khaki';
var data = [];

data[ data.length ] = {
    name: 'display',

    link: 'http://www.w3.org/TR/css-flexbox-1/#flex-containers',
    target: 'flex container',

    desc: '<p>A <i>flex container</i> establishes a new <dfn>flex formatting context</dfn> for its contents. This is the same as establishing a block formatting context, except that flex layout is used instead of block layout. For example, floats do not intrude into the flex container, and the flex container’s margins do not collapse with the margins of its contents. <i>Flex containers</i> form a containing block for their contents <i>exactly like block containers do</i>. <i>[CSS21]</i> The <i>overflow</i> property applies to <i>flex containers</i>.</p><p>Flex containers are not block containers, and so some properties that were designed with the assumption of block layout don’t apply in the context of flex layout. In particular:</p><p>If an element’s specified <i>display</i> is <i>inline-flex</i>, then its <i>display</i> property computes to <i>flex</i> in certain circumstances: the table in <i>CSS 2.1 Section 9.7</i> is amended to contain an additional row, with <i>inline-flex</i> in the "Specified Value" column and <i>flex</i> in the "Computed Value" column.</p>',

    values: [
        {
            name: 'flex',
            desc: 'This value causes an element to generate a block-level <i>flex container</i> box.',
            current: true
        },
        {
            name: 'inline-flex',
            desc: 'This value causes an element to generate an inline-level <i>flex container</i> box.'
        }
    ],
    initValue: '',
    cssRules: [
      {
        'selector': '.parent',
        'rules': { 'display': 'flex' }
      }
    ],
    demoBefore: 'Some text'
};

data[ data.length ] = {
    name: 'ordering-orientation',
    title: 'Ordering & Orientation',
    type: 'subheader'
};


data[ data.length ] = {
    name: 'flex-direction',

    link: 'http://www.w3.org/TR/css3-flexbox/#flex-direction-property',
    target: 'flex container',

    desc: 'The flex-direction property specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis. This determines the direction that flex items are laid out in.',

    values: [
        {
            name: 'row',
            desc: 'The flex container’s main axis has the same orientation as the inline axis of the current writing mode. The main-start and main-end directions are equivalent to the inline-start and inline-end directions, respectively, of the current writing mode.'
        },
        {
            name: 'row-reverse',
            desc: 'Same as row, except the main-start and main-end directions are swapped.'
        },
        {
            name: 'column',
            desc: 'The flex container’s main axis has the same orientation as the block axis of the current writing mode. The main-start and main-end directions are equivalent to the block-start and block-end directions, respectively, of the current writing mode.'
        },
        {
            name: 'column-reverse',
            desc: 'Same as column, except the main-start and main-end directions are swapped.'
        }
    ],
    initValue: 'row',
    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'flex-direction': 'row',
          'height': '100%'
         }
      }
    ],
};


data[ data.length ] = {
    name: 'flex-wrap',

    link: 'http://www.w3.org/TR/css-flexbox-1/#flex-wrap-property',
    target: 'flex container',

    desc: 'The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.',

    values: [
        {
            name: 'nowrap',
            desc: 'The flex container is single-line. The cross-start direction is equivalent to either the inline-start or block-start direction of the current writing mode, whichever is in the cross axis, and the cross-end direction is the opposite direction of cross-start.'
            },
            {
            name: 'wrap',
            desc: 'The flex container is multi-line. The cross-start direction is equivalent to either the inline-start or block-start direction of the current writing mode, whichever is in the cross axis, and the cross-end direction is the opposite direction of cross-start.'
            },
            {
            name: 'wrap-reverse',
            desc: 'Same as wrap, except the cross-start and cross-end directions are swapped.'}
    ],
    initValue: 'nowrap',
    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'align-items': 'flex-start',
          'flex-wrap': 'nowrap',
          'height': '100%'
         }
      },
      {
        'selector': '.child',
        'rules': {
          'width': '40%'
        }
      }
    ],
};

data[ data.length ] = {
    name: 'flex-flow',

    link: 'http://www.w3.org/TR/css-flexbox-1/#flex-flow-property',
    target: 'flex container',

    desc: '<p>The <b>flex-flow</b> property is a shorthand for setting the <b>flex-direction</b> and <b>flex-wrap</b> properties, which together define the flex container’s main and cross axes.</p>',

    initValue: 'row nowrap',
    customValues: [
      { name: 'row nowrap', current: true },
      { name: 'column-reverse'},
      { name: 'column wrap'},
      { name: 'row-reverse wrap-reverse'}
    ],
    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'flex': 'row nowrap',
          'height': '100%',
         }
      },
      {
        'selector': '.child',
        'rules': {
          'width': '40%',
          'height': '40%'
        }
      }
    ],
};

data[ data.length ] = {
    name: 'order',

    link: '',
    target: 'flex items',
    initValue: '0',
    customValues: [
      { name: '-1', current: true },
      { name: '0'},
      { name: '1'}
    ],
    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'align-items': 'flex-start',
          'height': '100%'
         }
      },
      {
        'selector': '.child--featured',
        'rules': {
          'order': '-1',
          'background-color': accentColor,
        }
      }
    ],
};

data[ data.length ] = {
    name: 'alignment',
    title: 'Alignment',
    type: 'subheader'
};

data[ data.length ] = {
    name: 'justify-content',

    link: 'http://www.w3.org/TR/css-flexbox-1/#justify-content-property',
    target: 'flex container',

    values: [
        {
            name: 'flex-start',
            desc: 'Flex items are packed toward the start of the line. The main-start margin edge of the first flex item on the line is placed flush with the main-start edge of the line, and each subsequent flex item is placed flush with the preceding item.'
        },
        {
            name: 'flex-end',
            desc: 'Flex items are packed toward the end of the line. The main-end margin edge of the last flex item is placed flush with the main-end edge of the line, and each preceding flex item is placed flush with the subsequent item.'
        },
        {
            name: 'center',
            desc: 'Flex items are packed toward the center of the line. The flex items on the line are placed flush with each other and aligned in the center of the line, with equal amounts of space between the main-start edge of the line and the first item on the line and between the main-end edge of the line and the last item on the line. (If the leftover free-space is negative, the flex items will overflow equally in both directions.)'
        },
        {
            name: 'space-between',
            desc: 'Flex items are evenly distributed in the line. If the leftover free-space is negative or there is only a single flex item on the line, this value is identical to flex-start. Otherwise, the main-start margin edge of the first flex item on the line is placed flush with the main-start edge of the line, the main-end margin edge of the last flex item on the line is placed flush with the main-end edge of the line, and the remaining flex items on the line are distributed so that the spacing between any two adjacent items is the same.'
        },
        {
            name: 'space-around',
            desc: 'Flex items are evenly distributed in the line, with half-size spaces on either end. If the leftover free-space is negative or there is only a single flex item on the line, this value is identical to center. Otherwise, the flex items on the line are distributed such that the spacing between any two adjacent flex items on the line is the same, and the spacing between the first/last flex items and the flex container edges is half the size of the spacing between flex items.'
        }
    ],
    initValue: 'flex-start',
    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'justify-content': 'flex-start',
          'height': '100%'
         }
      }
    ],
};

data[ data.length ] = {
    name: 'align-items',

    link: 'http://www.w3.org/TR/css-flexbox-1/#propdef-align-items',
    target: 'flex container',

    values: [
        {
            name: 'flex-start',
            desc: 'The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line.'
        },
        {
            name: 'flex-end',
            desc: 'The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line.'
        },
        {
            name: 'center',
            desc: 'The flex item’s margin box is centered in the cross axis within the line. (If the cross size of the flex line is less than that of the flex item, it will overflow equally in both directions.)'
        },
        {
            name: 'baseline',
            desc: 'If the flex item’s inline axis is the same as the cross axis, this value is identical to flex-start. Otherwise, it participates in baseline alignment: all participating flex items on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its cross-start margin edge is placed flush against the cross-start edge of the line.'
        },
        {
            name: 'stretch',
            desc: 'If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched. Its used value is the length necessary to make the cross size of the item’s margin box as close to the same size as the line as possible, while still respecting the constraints imposed by min-height/min-width/max-height/max-width.'
        }
    ],
    initValue: 'stretch',
    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'align-items': 'stretch',
          'height': '100%'
         }
      }
    ],
};

data[ data.length ] = {
    name: 'align-self',

    link: 'http://www.w3.org/TR/css-flexbox-1/#propdef-align-self',
    initValue: 'auto',

    target: 'flex items',

    values: [
        {
            name: 'flex-start',
            desc: 'The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line.',
            current: true
        },
        {
            name: 'flex-end',
            desc: 'The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line.'
        },
        {
            name: 'center',
            desc: 'The flex item’s margin box is centered in the cross axis within the line. (If the cross size of the flex line is less than that of the flex item, it will overflow equally in both directions.)'
        },
        {
            name: 'baseline',
            desc: 'If the flex item’s inline axis is the same as the cross axis, this value is identical to flex-start. Otherwise, it participates in baseline alignment: all participating flex items on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its cross-start margin edge is placed flush against the cross-start edge of the line.'
        },
        {
            name: 'stretch',
            desc: 'If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched. Its used value is the length necessary to make the cross size of the item’s margin box as close to the same size as the line as possible, while still respecting the constraints imposed by min-height/min-width/max-height/max-width.'
        }
    ],

    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'height': '100%'
         }
      },
      {
        'selector': '.child--featured',
        'rules': {
          'align-self': 'flex-start',
          'background-color': accentColor,
        }
      }
    ],
};

data[ data.length ] = {
    name: 'align-content',

    link: 'http://www.w3.org/TR/css-flexbox-1/#align-content-property',
    target: 'flex container',

    desc: '<p>The <b>align-content</b> property aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.</p> <p><b>Note, this property has no effect on a single-line flex container.</b></p>',

    values: [
        {
            name: 'flex-start',
            desc: 'Lines are packed toward the start of the flex container. The cross-start edge of the first line in the flex container is placed flush with the cross-start edge of the flex container, and each subsequent line is placed flush with the preceding line.'
        },
        {
            name: 'flex-end',
            desc: 'Lines are packed toward the end of the flex container. The cross-end edge of the last line is placed flush with the cross-end edge of the flex container, and each preceding line is placed flush with the subsequent line.'
        },
        {
            name: 'center',
            desc: 'Lines are packed toward the center of the flex container. The lines in the flex container are placed flush with each other and aligned in the center of the flex container, with equal amounts of space between the cross-start content edge of the flex container and the first line in the flex container, and between the cross-end content edge of the flex container and the last line in the flex container. (If the leftover free-space is negative, the lines will overflow equally in both directions.)'
        },
        {
            name: 'space-between',
            desc: 'Lines are evenly distributed in the flex container. If the leftover free-space is negative this value is identical to flex-start. Otherwise, the cross-start edge of the first line in the flex container is placed flush with the cross-start content edge of the flex container, the cross-end edge of the last line in the flex container is placed flush with the cross-end content edge of the flex container, and the remaining lines in the flex container are distributed so that the spacing between any two adjacent lines is the same.'
        },
        {
            name: 'space-around',
            desc: 'Lines are evenly distributed in the flex container, with half-size spaces on either end. If the leftover free-space is negative this value is identical to center. Otherwise, the lines in the flex container are distributed such that the spacing between any two adjacent lines is the same, and the spacing between the first/last lines and the flex container edges is half the size of the spacing between flex lines.'
        },
        {
            name: 'stretch',
            desc: 'Lines stretch to take up the remaining space. If the leftover free-space is negative, this value is identical to flex-start. Otherwise, the free-space is split equally between all of the lines, increasing their cross size.'
        }
    ],
    initValue: 'stretch',
    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'flex-wrap': 'wrap',
          'align-content': 'stretch',
          'height': '100%',
         }
      },
      {
        'selector': '.child',
        'rules': {
          'width': '30%'
        }
      }
    ],
};

data[ data.length ] = {
    name: 'flexibility',
    title: 'Flexibility',
    type: 'subheader'
};

data[ data.length ] = {
  name: 'flex-grow',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-grow-property',

  initValue: '0',

  target: 'flex items',

  desc: '<p>The <code>flex-grow</code> property sets the <code>flex grow factor</code> to the provided <dfn class="css" data-dfn-for="flex-grow" data-dfn-type="value" data-export="" id="valdef-flex-grow-number"><code>&lt;number&gt;</code></dfn>.	Negative numbers are invalid.</p>',

  customValues: [
    { name: '0' },
    { name: '1', current: true }
  ],

  cssRules: [
    {
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'height': '100%',
       }
    },
    {
      'selector': '.child--featured',
      'rules': {
        'flex-grow': '1',
        'background-color': accentColor
      }
    }
  ],
};

data[ data.length ] = {
  name: 'flex-shrink',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-shrink-property',

  initValue: '1',

  target: 'flex items',

  desc: '<p>The <code>flex-shrink</code> property sets the <code>flex shrink factor</code> to the provided <dfn class="css" data-dfn-for="flex-shrink" data-dfn-type="value" data-export="" id="valdef-flex-shrink-number"><code>&lt;number&gt;</code></dfn>.	Negative numbers are invalid.</p>',

  customValues: [
    { name: '0' },
    { name: '1', current: true }
  ],

  cssRules: [
    {
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'height': '100%',
       }
    },
    {
      'selector': '.child',
      'rules': {
        'width': '40%'
      }
    },
    {
      'selector': '.child--featured',
      'rules': {
        'flex-shrink': '1',
        'background-color': accentColor
      }
    }
  ],


};

data[ data.length ] = {
    name: 'flex-basis',

    link: 'http://www.w3.org/TR/css3-flexbox/#flex-basis-property',

    initValue: 'auto',

    target: 'flex items',

    desc: '<p>The <code>flex-basis</code> property sets the <code>flex basis</code>.	It accepts the same values as the <code>width</code> and <code>height</code> property, plus <code>content</code>.</p><p>For all values other than <code>auto</code> and <code>content</code> (defined above), <code>flex-basis</code> is resolved the same way as <code>width</code> in horizontal writing modes, except that if a value would resolve to <span class="css">auto</span> for <code>width</code>, it instead resolves to <code>content</code> for <code>flex-basis</code>. For example, percentage values of <code>flex-basis</code> are resolved against the flex item’s containing block (i.e. its <code>flex container</code>); and if that containing block’s size is <code>indefinite</code>, the used value for <code>flex-basis</code> is <code>content</code>. As another corollary, <code>flex-basis</code> determines the size of the content box, unless otherwise specified such as by <code>box-sizing</code>.</p>',

    customValues: [
      { name: '30%', current: true },
      { name: '50%'},
      { name: 'content'}
    ],
    cssRules: [
      {
        'selector': '.parent',
        'rules': {
          'display': 'flex',
          'flex-wrap': 'wrap',
          'align-content': 'center',
          'height': '100%',
         }
      },
      {
        'selector': '.child--featured',
        'rules': {
          'flex-basis': '30%'
        }
      }
    ],
};
