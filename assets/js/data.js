var accentColor = 'khaki';
var data = [];


data[data.length] = {
  name: 'display',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-containers',

  targetForDemo: 'flex containers',
  appliesTo: 'all elements',

  desc: '<p>A <i>flex container</i> establishes a new <dfn >flex formatting context</dfn> for its contents. This is the same as establishing a block formatting context, except that flex layout is used instead of block layout. For example, floats do not intrude into the flex container, and the flex container’s margins do not collapse with the margins of its contents. <i>Flex containers</i> form a containing block for their contents <a href=\'https://www.w3.org/TR/CSS2/visudet.html#containing-block-details\'>exactly like block containers do</a>.  The <a href=\'https://www.w3.org/TR/css-overflow-3/#overflow\'>overflow</a> property applies to <i>flex containers</i>.</p><p>Flex containers are not block containers, and so some properties that were designed with the assumption of block layout don’t apply in the context of flex layout. In particular:</p><p>If an element’s specified <a href=\'https://www.w3.org/TR/CSS22/visuren.html#propdef-display\'>display</a> is <i>inline-flex</i>, then its <a href=\'https://www.w3.org/TR/CSS22/visuren.html#propdef-display\'>display</a> property computes to <i>flex</i> in certain circumstances: the table in <a href=\'https://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo\'>CSS 2.1 Section 9.7</a> is amended to contain an additional row, with <i>inline-flex</i> in the \'Specified Value\' column and <i>flex</i> in the \'Computed Value\' column.</p>',

  values: [{
      'name': 'flex',
      'desc': 'This value causes an element to generate a block-level <i>flex container</i> box.',
      current: true
    },
    {
      'name': 'inline-flex',
      'desc': 'This value causes an element to generate an inline-level <i>flex container</i> box.'
    }
  ],
  initValue: '',

  cssRules: [{
    'selector': '.parent',
    'rules': {
      'display': 'flex'
    }
  }],

  demoBefore: 'Some text'
};


data[data.length] = {
  name: 'ordering-orientation',
  title: 'Ordering & Orientation',
  type: 'subheader'
};


data[data.length] = {
  name: 'flex-direction',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-direction-property',

  targetForDemo: 'flex containers',
  appliesTo: 'flex containers',

  desc: '<p>The <i>flex-direction</i> property specifies how <i>flex items</i> are placed in the flex container, by setting the direction of the flex container’s <i>main axis</i>. This determines the direction in which flex items are laid out.</p><p role=\'note\'>Note: The reverse values do not reverse box ordering: like <a href=\'https://www.w3.org/TR/css-writing-modes-3/#propdef-writing-mode\'>writing-mode</a> and <a href=\'https://www.w3.org/TR/css-writing-modes-3/#propdef-direction\'>direction</a> , they only change the direction of flow. Painting order, speech order, and sequential navigation orders are not affected.</p>',

  values: [{
      name: 'row',
      desc: 'The flex container’s <i>main axis</i> has the same orientation as the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-axis\'>inline axis</a> of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a>. The <i>main-start</i> and <i>main-end</i> directions are equivalent to the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-start\'>inline-start</a> and <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-end\'>inline-end</a> directions, respectively, of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a>.'
    },
    {
      name: 'row-reverse',
      desc: 'Same as <i>row</i>, except the <i>main-start</i> and <i>main-end</i> directions are swapped.'
    },
    {
      name: 'column',
      desc: 'The flex container’s <i>main axis</i> has the same orientation as the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-axis\'>block axis</a> of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a>. The <i>main-start</i> and <i>main-end</i> directions are equivalent to the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-start\'>block-start</a> and <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-end\'>block-end</a> directions, respectively, of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a>.'
    },
    {
      name: 'column-reverse',
      desc: 'Same as <i>column</i>, except the <i>main-start</i> and <i>main-end</i> directions are swapped.'
    }
  ],

  initValue: 'row',

  cssRules: [{
    'selector': '.parent',
    'rules': {
      'display': 'flex',
      'flex-direction': 'row',
      'height': '100%'
    }
  }],
};


data[data.length] = {
  name: 'flex-wrap',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-wrap-property',

  targetForDemo: 'flex containers',
  appliesTo: 'flex containers',

  desc: '<p>The <i>flex-wrap</i> property controls whether the flex container is <i>single-line</i> or <i>multi-line</i>, and the direction of the <i>cross-axis</i>, which determines the direction new lines are stacked in. </p><p>For the values that are not <i>wrap-reverse</i>, the <i>cross-start</i> direction is equivalent to either the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-start\'>inline-start</a> or <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-start\'>block-start</a> direction of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a> (whichever is in the <i>cross axis</i>) and the <i>cross-end</i> direction is the opposite direction of <i>cross-start</i>. When <i>flex-wrap</i> is <i>wrap-reverse</i>, the <i>cross-start</i> and <i>cross-end</i> directions are swapped.</p>',

  values: [{
      name: 'nowrap',
      desc: 'The flex container is <i>single-line</i>.'
    },
    {
      name: 'wrap',
      desc: 'The flex container is <i>multi-line</i>.'
    },
    {
      name: 'wrap-reverse',
      desc: 'Same as <i>wrap</i>.'
    }
  ],

  initValue: 'nowrap',

  cssRules: [{
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


data[data.length] = {
  name: 'flex-flow',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-flow-property',

  targetForDemo: 'flex containers',
  appliesTo: 'flex containers',

  desc: '<p>The <i>flex-flow</i> property is a shorthand for setting the <i>flex-direction</i> and <i>flex-wrap</i> properties, which together define the flex container’s main and cross axes.</p>',

  initValue: 'row nowrap',

  customValues: [{
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

  cssRules: [{
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


data[data.length] = {
  name: 'order',

  link: 'https://www.w3.org/TR/css-flexbox-1/#order-property',

  targetForDemo: 'flex items',
  appliesTo: 'flex items',

  desc: '<p>The <i>order</i> property controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups. It takes a single <dfn ><a href=\'https://www.w3.org/TR/css3-values/#integer-value\'>&lt;integer&gt;</a></dfn> value, which specifies which ordinal group the <i>flex item</i> belongs to.</p><p>A flex container lays out its content in <dfn >order-modified document order</dfn>, starting from the lowest numbered ordinal group and going up. Items with the same ordinal group are laid out in the order they appear in the source document. This also affects the <a href=\'https://www.w3.org/TR/CSS2/zindex.html\'>painting order</a> , exactly as if the flex items were reordered in the source document.</p><p>Unless otherwise specified by a future specification, this property has no effect on boxes that are not children of a <i>flex container</i>.</p>',

  initValue: '0',

  customValues: [{
      name: '-1',
      current: true
    },
    {
      name: '0'
    },
    {
      name: '1'
    }
  ],

  cssRules: [{
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


data[data.length] = {
  name: 'alignment',
  title: 'Alignment',
  type: 'subheader'
};


data[data.length] = {
  name: 'justify-content',

  link: 'http://www.w3.org/TR/css-flexbox-1/#justify-content-property',

  targetForDemo: 'flex containers',
  appliesTo: 'flex containers',

  desc: '<p>The <i>justify-content</i> property aligns <i>flex items</i> along the <i>main axis</i> of the current line of the flex container. This is done <em>after</em> any flexible lengths and any <i>auto margins</i> have been resolved. Typically it helps distribute extra free space leftover when either all the <i>flex items</i> on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.</p>',

  values: [{
      name: 'flex-start',
      desc: '<i>Flex items</i> are packed toward the start of the line. The <i>main-start</i> margin edge of the first <i>flex item</i> on the line is placed flush with the <i>main-start</i> edge of the line, and each subsequent <i>flex item</i> is placed flush with the preceding item.'
    },
    {
      name: 'flex-end',
      desc: '<i>Flex items</i> are packed toward the end of the line. The <i>main-end</i> margin edge of the last <i>flex item</i> is placed flush with the <i>main-end</i> edge of the line, and each preceding <i>flex item</i> is placed flush with the subsequent item.'
    },
    {
      name: 'center',
      desc: '<i>Flex items</i> are packed toward the center of the line. The <i>flex items</i> on the line are placed flush with each other and aligned in the center of the line, with equal amounts of space between the <i>main-start</i> edge of the line and the first item on the line and between the <i>main-end</i> edge of the line and the last item on the line. (If the leftover free-space is negative, the <i>flex items</i> will overflow equally in both directions.)'
    },
    {
      name: 'space-between',
      desc: '<i>Flex items</i> are evenly distributed in the line. If the leftover free-space is negative or there is only a single <i>flex item</i> on the line, this value is identical to <i>flex-start</i>. Otherwise, the <i>main-start</i> margin edge of the first <i>flex item</i> on the line is placed flush with the <i>main-start</i> edge of the line, the <i>main-end</i> margin edge of the last <i>flex item</i> on the line is placed flush with the <i>main-end</i> edge of the line, and the remaining <i>flex items</i> on the line are distributed so that the spacing between any two adjacent items is the same.'
    },
    {
      name: 'space-around',
      desc: '<i>Flex items</i> are evenly distributed in the line, with half-size spaces on either end. If the leftover free-space is negative or there is only a single <i>flex item</i> on the line, this value is identical to <i>center</i>. Otherwise, the <i>flex items</i> on the line are distributed such that the spacing between any two adjacent <i>flex items</i> on the line is the same, and the spacing between the first/last <i>flex items</i> and the <i>flex container</i> edges is half the size of the spacing between <i>flex items</i>.'
    }
  ],

  initValue: 'flex-start',

  cssRules: [{
    'selector': '.parent',
    'rules': {
      'display': 'flex',
      'justify-content': 'flex-start',
      'height': '100%'
    }
  }],
};


data[data.length] = {
  name: 'align-items',

  link: 'http://www.w3.org/TR/css-flexbox-1/#propdef-align-items',

  targetForDemo: 'flex containers',
  appliesTo: 'flex containers',

  desc: '<p><i>Flex items</i> can be aligned in the <i>cross axis</i> of the current line of the flex container, similar to <i>justify-content</i> but in the perpendicular direction. <i>align-items</i> sets the default alignment for all of the flex container’s <i>items</i>, including anonymous <i>flex items</i>. <i>align-self</i> allows this default alignment to be overridden for individual <i>flex items</i>. (For anonymous flex items, <i>align-self</i> always matches the value of <i>align-items</i> on their associated flex container.)</p><p>If either of the <i>flex item’s</i> cross-axis margins are <i>align-self</i> has no effect.</p><p>On absolutely positioned elements, a value of <i>auto</i> computes to itself. On all other elements, a value of <dfn >auto</dfn> for <i>align-self</i> computes to the value of <i>align-items</i> on the element’s parent, or <i>stretch</i> if the element has no parent. The alignments are defined as:</p>',

  values: [{
      name: 'flex-start',
      desc: 'The <i>cross-start</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-start</i> edge of the line.'
    },
    {
      name: 'flex-end',
      desc: 'The <i>cross-end</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-end</i> edge of the line.'
    },
    {
      name: 'center',
      desc: 'The <i>flex item</i>’s margin box is centered in the <i>cross axis</i> within the line. (If the <i>cross size</i> of the flex line is less than that of the <i>flex item</i>, it will overflow equally in both directions.)'
    },
    {
      name: 'baseline',
      desc: 'If the <i>flex item</i>’s inline axis is the same as the <i>cross axis</i>, this value is identical to <i>flex-start</i>. <p>Otherwise, it <dfn >participates in baseline alignment</dfn>: all participating <i>flex items</i> on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its <i>cross-start</i> margin edge is placed flush against the <i>cross-start</i> edge of the line.</p>'
    },
    {
      name: 'stretch',
      desc: 'If the <i>cross size property</i> of the <i>flex item</i> computes to <span >auto</span>, and neither of the <i>cross-axis</i> margins are <span >auto</span>, the <i>flex item</i> is <dfn >stretched</dfn>. Its used value is the length necessary to make the <i>cross size</i> of the item’s margin box as close to the same size as the line as possible, while still respecting the constraints imposed by <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-min-height\'>min-height</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-min-width\'>min-width</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-max-height\'>max-height</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-max-width\'>max-width</a>. <p role=\'note\'>Note: If the flex container’s height is constrained this value may cause the contents of the <i>flex item</i> to overflow the item.</p> <p>The <i>cross-start</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-start</i> edge of the line.</p>'
    }
  ],

  initValue: 'stretch',

  cssRules: [{
    'selector': '.parent',
    'rules': {
      'display': 'flex',
      'align-items': 'stretch',
      'height': '100%'
    }
  }],
};


data[data.length] = {
  name: 'align-self',

  link: 'http://www.w3.org/TR/css-flexbox-1/#propdef-align-self',

  initValue: 'auto',

  targetForDemo: 'flex items',
  appliesTo: 'flex items',

  desc: '<p><i>Flex items</i> can be aligned in the <i>cross axis</i> of the current line of the flex container, similar to <i>justify-content</i> but in the perpendicular direction. <i>align-items</i> sets the default alignment for all of the flex container’s <i>items</i>, including anonymous <i>flex items</i>. <i>align-self</i> allows this default alignment to be overridden for individual <i>flex items</i>. (For anonymous flex items, <i>align-self</i> always matches the value of <i>align-items</i> on their associated flex container.)</p><p>If either of the <i>flex item’s</i> cross-axis margins are <i>align-self</i> has no effect.</p><p>On absolutely positioned elements, a value of <i>auto</i> computes to itself. On all other elements, a value of <dfn >auto</dfn> for <i>align-self</i> computes to the value of <i>align-items</i> on the element’s parent, or <i>stretch</i> if the element has no parent. The alignments are defined as:</p>',

  values: [{
      name: 'flex-start',
      desc: 'The <i>cross-start</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-start</i> edge of the line.',
      current: true
    },
    {
      name: 'flex-end',
      desc: 'The <i>cross-end</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-end</i> edge of the line.'
    },
    {
      name: 'center',
      desc: 'The <i>flex item</i>’s margin box is centered in the <i>cross axis</i> within the line. (If the <i>cross size</i> of the flex line is less than that of the <i>flex item</i>, it will overflow equally in both directions.)'
    },
    {
      name: 'baseline',
      desc: 'If the <i>flex item</i>’s inline axis is the same as the <i>cross axis</i>, this value is identical to <i>flex-start</i>. <p>Otherwise, it <dfn >participates in baseline alignment</dfn>: all participating <i>flex items</i> on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its <i>cross-start</i> margin edge is placed flush against the <i>cross-start</i> edge of the line.</p>'
    },
    {
      name: 'stretch',
      desc: 'If the <i>cross size property</i> of the <i>flex item</i> computes to <span >auto</span>, and neither of the <i>cross-axis</i> margins are <span >auto</span>, the <i>flex item</i> is <dfn >stretched</dfn>. Its used value is the length necessary to make the <i>cross size</i> of the item’s margin box as close to the same size as the line as possible, while still respecting the constraints imposed by <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-min-height\'>min-height</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-min-width\'>min-width</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-max-height\'>max-height</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-max-width\'>max-width</a>. <p role=\'note\'>Note: If the flex container’s height is constrained this value may cause the contents of the <i>flex item</i> to overflow the item.</p> <p>The <i>cross-start</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-start</i> edge of the line.</p>'
    }
  ],

  cssRules: [{
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


data[data.length] = {
  name: 'align-content',

  link: 'http://www.w3.org/TR/css-flexbox-1/#align-content-property',

  targetForDemo: 'flex containers',
  appliesTo: 'flex containers',

  desc: '<p>The <i>align-content</i> property aligns a flex container’s lines within the flex container when there is extra space in the <i>cross-axis</i>, similar to how <i>justify-content</i> aligns individual items within the <i>main-axis</i>. Note, this property has no effect on a <i>single-line</i> <i>flex container</i>. Values have the following meanings:</p><p role=\'note\'>Note: Only <i>multi-line</i> <i>flex containers</i> ever have free space in the <i>cross-axis</i> for lines to be aligned in, because in a <i>single-line</i> flex container the sole line automatically stretches to fill the space.</p>',

  values: [{
      name: 'flex-start',
      desc: 'Lines are packed toward the start of the flex container. The <i>cross-start</i> edge of the first line in the flex container is placed flush with the <i>cross-start</i> edge of the flex container, and each subsequent line is placed flush with the preceding line.'
    },
    {
      name: 'flex-end',
      desc: 'Lines are packed toward the end of the flex container. The <i>cross-end</i> edge of the last line is placed flush with the <i>cross-end</i> edge of the flex container, and each preceding line is placed flush with the subsequent line.'
    },
    {
      name: 'center',
      desc: 'Lines are packed toward the center of the flex container. The lines in the flex container are placed flush with each other and aligned in the center of the flex container, with equal amounts of space between the <i>cross-start</i> content edge of the flex container and the first line in the flex container, and between the <i>cross-end</i> content edge of the flex container and the last line in the flex container. (If the leftover free-space is negative, the lines will overflow equally in both directions.)'
    },
    {
      name: 'space-between',
      desc: 'Lines are evenly distributed in the flex container. If the leftover free-space is negative this value is identical to <i>flex-start</i>. Otherwise, the <i>cross-start</i> edge of the first line in the flex container is placed flush with the <i>cross-start</i> content edge of the flex container, the <i>cross-end</i> edge of the last line in the flex container is placed flush with the <i>cross-end</i> content edge of the flex container, and the remaining lines in the flex container are distributed so that the spacing between any two adjacent lines is the same.'
    },
    {
      name: 'space-around',
      desc: 'Lines are evenly distributed in the flex container, with half-size spaces on either end. If the leftover free-space is negative this value is identical to <i>center</i>. Otherwise, the lines in the flex container are distributed such that the spacing between any two adjacent lines is the same, and the spacing between the first/last lines and the <i>flex container</i> edges is half the size of the spacing between <i>flex lines</i>.'
    },
    {
      name: 'stretch',
      desc: 'Lines stretch to take up the remaining space. If the leftover free-space is negative, this value is identical to <i>flex-start</i>. Otherwise, the free-space is split equally between all of the lines, increasing their cross size.'
    }
  ],

  initValue: 'stretch',

  cssRules: [{
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


data[data.length] = {
  name: 'flexibility',
  title: 'Flexibility',
  type: 'subheader'
};


data[data.length] = {
  name: 'flex-grow',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-grow-property',

  initValue: '0',

  targetForDemo: 'flex items',
  appliesTo: 'flex items',

  desc: '<p>The <i>flex-grow</i> property sets the <i>flex grow factor</i> to the provided <dfn ><a href=\'https://www.w3.org/TR/css3-values/#number-value\'>&lt;number&gt;</a></dfn>. Negative numbers are invalid.</p>',

  customValues: [{
      name: '0'
    },
    {
      name: '1',
      current: true
    }
  ],

  cssRules: [{
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


data[data.length] = {
  name: 'flex-shrink',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-shrink-property',

  initValue: '1',

  targetForDemo: 'flex items',
  appliesTo: 'flex items',

  desc: '<p>The <i>flex-shrink</i> property sets the <i>flex shrink factor</i> to the provided <dfn ><a href=\'https://www.w3.org/TR/css3-values/#number-value\'>&lt;number&gt;</a></dfn>. Negative numbers are invalid.</p>',

  customValues: [{
      name: '0'
    },
    {
      name: '1',
      current: true
    }
  ],

  cssRules: [{
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


data[data.length] = {
  name: 'flex-basis',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-basis-property',

  initValue: 'auto',

  targetForDemo: 'flex items',
  appliesTo: 'flex items',

  desc: '<p>The <i>flex-basis</i> property sets the <i>flex basis</i>. It accepts the same values as the <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-width\'>width</a> and <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-height\'>height</a> property, plus <i>content</i>.</p><p>For all values other than <i>auto</i> and <i>content</i> (defined above), <i>flex-basis</i> is resolved the same way as <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-width\'>width</a> in horizontal writing modes , except that if a value would resolve to <span >auto</span> for <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-width\'>width</a>, it instead resolves to <i>content</i> for <i>flex-basis</i>. For example, percentage values of <i>flex-basis</i> are resolved against the flex item’s containing block (i.e. its <i>flex container</i>); and if that containing block’s size is <i>indefinite</i>, the used value for <i>flex-basis</i> is <i>content</i>. As another corollary, <i>flex-basis</i> determines the size of the content box, unless otherwise specified such as by <a href=\'https://www.w3.org/TR/css3-ui/#propdef-box-sizing\'>box-sizing</a> .</p>',

  customValues: [{
      name: '30%',
      current: true
    },
    {
      name: '50%'
    },
    {
      name: 'content'
    }
  ],

  cssRules: [{
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
        'flex-basis': '30%',
        'background-color': accentColor
      }
    }
  ],
};
