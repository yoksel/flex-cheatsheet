var data = [];

data[0] = {
    name: 'display-flex',
    link: 'http://www.w3.org/TR/css3-flexbox/#flex-containers',
    values: [
        {
            name: 'flex',
            desc: 'This value causes an element to generate a block-level flex container box.'
        },
        {
            name: 'inline-flex',
            desc: 'This value causes an element to generate an inline-level flex container box.'
        }
    ],
    initValue: ''
};

data[1] = {
    name: 'flex-direction',
    link: 'http://www.w3.org/TR/css3-flexbox/#flex-direction-property',
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
    initValue: 'row'
};
data[2] = {
    name: 'flex-wrap',
    link: 'http://www.w3.org/TR/css3-flexbox/#flex-wrap-property',
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
    initValue: 'nowrap'
};
data[3] = {
    name: 'order',
    link: '',
    initValue: '0'
};
data[4] = {
    name: 'justify-content',
    link: 'http://www.w3.org/TR/css3-flexbox/#justify-content-property',
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
    initValue: 'flex-start'
};
data[5] = {
    name: 'align-items',
    link: 'http://www.w3.org/TR/css3-flexbox/#propdef-align-items',
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
    initValue: 'stretch'
};
data[6] = {
    name: 'align-self',
    link: 'http://www.w3.org/TR/css3-flexbox/#propdef-align-self',
    values: data[5].values,
    initValue: 'auto'
};
data[7] = {
    name: 'align-content',
    link: '',
    initValue: ''
};