import flexGrow from './props/flexibility/flex-grow';
import flexShrink from './props/flexibility/flex-shrink';
import flexBasis from './props/flexibility/flex-basis';
import flex from './props/flexibility/flex';

export default {
  title: 'Flexibility',
  alias: 'flexibility',

  link: 'https://www.w3.org/TR/css-flexbox-1/#flexibility',

  desc: `<p>The defining aspect of flex layout is the ability to make the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex items</a> “flex”,
altering their width/height to fill the available space in the <a href="https://www.w3.org/TR/css-flexbox-1/#main-dimension">main dimension</a>.
This is done with the <a href="#section-flex">flex</a> property.
A flex container distributes free space to its items (proportional to their <a href="#flex-flex-grow-factor">flex grow factor</a>) to fill the container,
or shrinks them (proportional to their <a href="#flex-flex-shrink-factor">flex shrink factor</a>) to prevent overflow.</p>

<p>A <a href="https://www.w3.org/TR/css-flexbox-1/#flex-item">flex item</a> is <dfn id="fully-inflexible">fully inflexible</dfn> if both its <a href="#section-flex-grow">flex-grow</a> and <a href="#section-flex-shrink">flex-shrink</a> values are zero,
and <dfn id="flexible">flexible</dfn> otherwise.</p>`,

  items: [
    flexGrow,
    flexShrink,
    flexBasis,
    flex
  ]
};
